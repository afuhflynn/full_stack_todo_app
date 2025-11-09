import { ActionBar } from "./todos-body/action-bar";
import { TodoList } from "./todos-body/todo-list";

export const TodosBody = () => {
  return (
    <div className="bg-popover  w-full shadow-2xl h-auto rounded-[5px]">
      <TodoList />
      <ActionBar />
    </div>
  );
};
