import { useDeleteTodo, useUpdateTodo } from "@/hooks";
import { cn } from "@/lib/utils";
import { Todo } from "@/types";
import Image from "next/image";

type props = {
  todo: Todo;
  className?: string;
};
export const TodoItem = ({ todo, className }: props) => {
  const { mutate } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  return (
    <div
      className={cn(
        "h-18 px-6 overflow-hidden flex items-center justify-between text-xl cursor-pointer border-border border border-x-0 border-t-0 last:border-0 group",
        className,
      )}
    >
      <div className="flex items-center gap-5">
        {todo.completed ? (
          <div
            className="h-6 w-6 rounded-full border-none check flex items-center justify-center"
            onClick={() =>
              mutate({ id: todo.id, payload: { completed: !todo.completed } })
            }
          >
            <Image
              src="/images/icon-check.svg"
              alt="check icon"
              height={6}
              width={8.7}
              className="w-[8.7px] h-2.5"
            />
          </div>
        ) : (
          <div
            className="h-6 w-6 rounded-full border-border border hover:border-2 check-border"
            onClick={() =>
              mutate({ id: todo.id, payload: { completed: !todo.completed } })
            }
          ></div>
        )}
        <p
          className={cn(
            todo.completed
              ? "line-through dark:text-gray-600 text-gray-400"
              : "",
          )}
        >
          {todo.content}
        </p>
      </div>

      <Image
        src="/images/icon-cross.svg"
        alt="cross icon"
        height={17.68}
        width={17.68}
        className="w-[17.68px] h-[17.68px] hidden group-hover:block transition-all duration-75"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};
