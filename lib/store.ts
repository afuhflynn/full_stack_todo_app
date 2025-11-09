import { create } from "zustand";
import { TodoStore, TodoState } from "../types";

/**
 * =================================
 * Zustand Store
 *
 * This file defines the Zustand store for managing the application's state.
 * It includes state for todos and categories, as well as actions for
 * creating, updating, and deleting them. The store is designed to be
 * type-safe and consistent with the global type definitions.
 * =================================
 */

// Define the initial state of the store
const initialState: TodoState = {
  todos: [],
  categories: [],
  isLoading: false,
  error: null,
};

// Create the Zustand store with the initial state and actions
export const useTodoStore = create<TodoStore>((set) => ({
  // todo input
  input: "",
  setInput(input) {
    set({ input });
  },
  ...initialState,

  /**
   * =================================
   * TODO Actions
   * =================================
   */

  // Set all todos in the store
  setTodos: (todos) => set({ todos }),

  // Add a new todo to the store
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),

  // Update an existing todo in the store
  updateTodo: (id, updatedTodo) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo,
      ),
    }));
  },

  // Remove a todo from the store
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  /**
   * =================================
   * CATEGORY Actions
   * =================================
   */

  // Set all categories in the store
  setCategories: (categories) => set({ categories }),

  // Add a new category to the store
  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),

  // Update an existing category in the store
  updateCategory: (id, updatedCategory) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === id ? { ...category, ...updatedCategory } : category,
      ),
    })),

  // Remove a category from the store
  removeCategory: (id) =>
    set((state) => ({
      categories: state.categories.filter((category) => category.id !== id),
    })),

  /**
   * =================================
   * ASYNC State Actions
   * =================================
   */

  // Set the loading state
  setLoading: (loading) => set({ isLoading: loading }),

  // Set the error state
  setError: (error) => set({ error }),
}));
