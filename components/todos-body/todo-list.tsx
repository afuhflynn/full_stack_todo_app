"use client";
import { useTodoStore } from "@/lib/store";
import { TodoListSkeleton } from "../skeletons/todo-list-skeleton";
import { TodoItem } from "./todo-item";
import { useGetTodos } from "@/hooks";

export const TodoList = () => {
  const { todos, isLoading } = useTodoStore();
  const { isPending } = useGetTodos();

  if (isLoading || isPending) {
    return <TodoListSkeleton />;
  }

  if ((!todos || todos.length === 0) && !isLoading && !isPending) {
    return (
      <div className="w-full flex items-center justify-center py-4 bg-popover">
        <p className="dark:text-gray-400 text-gray-500 font-light text-center">
          No todo items found. <br />
          Start tracking your life today...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col max-h-[550px] overflow-y-auto overflow-x-hidden bg-popover">
      {todos &&
        todos.length > 0 &&
        todos.map((item, index) => (
          <TodoItem
            key={`${item.id}-${index}`}
            todo={item}
            className="shrink-0"
          />
        ))}
    </div>
  );
};
