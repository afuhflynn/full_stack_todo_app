import { useEffect } from "react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  clearCompletedTodos,
} from "../lib/api-client";
import { useTodoStore } from "../lib/store";
import {
  Todo,
  Category,
  CreateTodoPayload,
  UpdateTodoPayload,
  CreateCategoryPayload,
  UpdateCategoryPayload,
} from "../types";
import { toast } from "sonner";

/**
 * =================================
 * Query Keys
 *
 * This section defines the query keys used by TanStack Query to manage caching.
 * A structured key system ensures consistency and prevents collisions.
 * =================================
 */
const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, "detail"] as const,
  detail: (id: string) => [...todoKeys.details(), id] as const,
};

const categoryKeys = {
  all: ["categories"] as const,
  lists: () => [...categoryKeys.all, "list"] as const,
  list: (filters: string) => [...categoryKeys.lists(), { filters }] as const,
  details: () => [...categoryKeys.all, "detail"] as const,
  detail: (id: string) => [...categoryKeys.details(), id] as const,
};

/**
 * =================================
 * TODO Hooks
 *
 * These hooks provide a declarative API for interacting with the todo data,
 * handling fetching, caching, and state synchronization with Zustand.
 * =================================
 */

/**
 * Fetches all todos and syncs them with the Zustand store.
 */
export const useGetTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const {
    data: todos,
    isPending,
    error,
  } = useQuery({
    queryKey: todoKeys.lists(),
    queryFn: getTodos,
  });

  useEffect(() => {
    if (!isPending && !error) {
      setTodos(todos || []);
    }
  }, [isPending, error, todos, setTodos]);

  return { todos, isPending, error };
};

/**
 * Fetches a single todo by its ID.
 * @param id The ID of the todo to fetch.
 */
export const useGetTodoById = (id: string) => {
  return useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: () => getTodoById(id),
    enabled: !!id, // Query will not run until an ID is provided
  });
};

/**
 * Creates a new todo with optimistic updates.
 */
export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const { addTodo, setInput } = useTodoStore();

  return useMutation({
    mutationFn: (payload: CreateTodoPayload) => createTodo(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      console.log({ data });

      addTodo(data);
      setInput("");
      toast.success("Todo created successfully!");
    },
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: todoKeys.lists() });
      const previousTodos = queryClient.getQueryData<Todo[]>(todoKeys.lists());

      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      if (err) {
        // @ts-ignore
        if (err?.status === 401) {
          toast.error("Please login to create a todo.");
          return;
        }
        // @ts-ignore
        if (err?.status === 409) {
          toast.error(
            `Todo "${newTodo.content.substring(0, 10)}" already exits.`,
          );
          return;
        }
        toast.error(err.message);
      }
      if (context?.previousTodos) {
        queryClient.setQueryData(todoKeys.lists(), context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
  });
};

/**
 * Updates an existing todo with optimistic updates.
 */
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const updateTodoInStore = useTodoStore((state) => state.updateTodo);

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateTodoPayload }) =>
      updateTodo(id, payload),
    onSuccess: (data) => {
      updateTodoInStore(data.id, data);
      queryClient.setQueryData(todoKeys.detail(data.id), data);
      toast.success("Todo updated successfully!");
    },
    onMutate: async ({ id, payload }) => {
      const toastId = toast.loading("Updating todo...");
      await queryClient.cancelQueries({ queryKey: todoKeys.detail(id) });
      await queryClient.cancelQueries({ queryKey: todoKeys.lists() });

      const previousTodo = queryClient.getQueryData<Todo>(todoKeys.detail(id));
      const previousTodos = queryClient.getQueryData<Todo[]>(todoKeys.lists());

      queryClient.setQueryData(todoKeys.detail(id), (old) =>
        old ? { ...old, ...payload } : undefined,
      );
      queryClient.setQueryData(todoKeys.lists(), (old: Todo[] = []) =>
        old.map((todo) => (todo.id === id ? { ...todo, ...payload } : todo)),
      );

      toast.dismiss(toastId);

      return { previousTodo, previousTodos };
    },
    onError: (err, variables, context) => {
      toast.error("An unexpected error occurred updating todo.");
      if (context?.previousTodo) {
        queryClient.setQueryData(
          todoKeys.detail(variables.id),
          context.previousTodo,
        );
      }
      if (context?.previousTodos) {
        queryClient.setQueryData(todoKeys.lists(), context.previousTodos);
      }
    },
    onSettled: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
        queryClient.invalidateQueries({ queryKey: todoKeys.detail(data.id) });
      }
    },
  });
};

/**
 * Deletes a todo with optimistic updates.
 */
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: (data, id) => {
      removeTodo(id);
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: todoKeys.lists() });
      const previousTodos = queryClient.getQueryData<Todo[]>(todoKeys.lists());
      queryClient.setQueryData(todoKeys.lists(), (old: Todo[] = []) =>
        old.filter((todo) => todo.id !== id),
      );
      return { previousTodos };
    },
    onError: (err, id, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(todoKeys.lists(), context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
  });
};

/**
 * Deletes a todo with optimistic updates.
 */
export const useClearCompletedTodos = () => {
  const queryClient = useQueryClient();
  const { setTodos } = useTodoStore();

  return useMutation({
    mutationFn: () => clearCompletedTodos(),
    onSuccess: (data) => {
      queryClient.setQueryData<Todo[]>(todoKeys.lists(), data);
      toast.success("Todos cleared successfully!");
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: todoKeys.lists() });
      const previousTodos = queryClient.getQueryData<Todo[]>(todoKeys.lists());

      return { previousTodos };
    },
    onError: (err, id, context) => {
      toast.error("An error occurred clearing todos.");
      if (context?.previousTodos) {
        queryClient.setQueryData(todoKeys.lists(), context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
  });
};

/**
 * =================================
 * CATEGORY Hooks
 *
 * Hooks for managing category data, including fetching, creating,
 * updating, and deleting categories.
 * =================================
 */

/**
 * Fetches all categories and syncs them with the Zustand store.
 */
export const useGetCategories = () => {
  const setCategories = useTodoStore((state) => state.setCategories);
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: getCategories,
    onSuccess: (data) => {
      setCategories(data);
    },
  });
};

/**
 * Fetches a single category by its ID.
 * @param id The ID of the category to fetch.
 */
export const useGetCategoryById = (id: string) => {
  return useQuery({
    queryKey: categoryKeys.detail(id),
    queryFn: () => getCategoryById(id),
    enabled: !!id,
  });
};

/**
 * Creates a new category.
 */
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const addCategory = useTodoStore((state) => state.addCategory);

  return useMutation({
    mutationFn: (payload: CreateCategoryPayload) => createCategory(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
      addCategory(data);
    },
  });
};

/**
 * Updates an existing category.
 */
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const updateCategoryInStore = useTodoStore((state) => state.updateCategory);

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateCategoryPayload;
    }) => updateCategory(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
      queryClient.invalidateQueries({ queryKey: categoryKeys.detail(data.id) });
      updateCategoryInStore(data.id, data);
    },
  });
};

/**
 * Deletes a category.
 */
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const removeCategory = useTodoStore((state) => state.removeCategory);

  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: (data, id) => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
      removeCategory(id);
    },
  });
};
