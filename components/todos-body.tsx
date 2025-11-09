import { ActionBar } from "./todos-body/action-bar";
import { MobileActionBar } from "./todos-body/mobile-action-bar";
import { TodoList } from "./todos-body/todo-list";

export const TodosBody = () => {
  return (
    <div className="  w-full shadow-2xl h-auto rounded-[5px] overflow-hidden">
      <TodoList />
      <ActionBar />
      <MobileActionBar />
    </div>
  );
};
