import { todoData } from "@/constants";
import { TodoItem } from "./todo-item";

export const TodoList = () => {
  return (
    <div className="w-full flex flex-col max-h-[550px] overflow-y-auto overflow-x-hidden">
      {todoData.map((item, index) => (
        <TodoItem
          key={`${item.id}-${index}`}
          id={item.id}
          content={item.content}
          completed={item.completed}
          className="shrink-0"
        />
      ))}
    </div>
  );
};
