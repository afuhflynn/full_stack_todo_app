import { ActiveTab, Todo } from "@/types";

export const filterTodos = (todos: Todo[], activeTab: ActiveTab) => {
  let newTodos: Todo[] = [];
  switch (activeTab) {
    case "active":
      newTodos = todos.filter((item) => !item.completed);
      break;
    case "completed":
      newTodos = todos.filter((item) => item.completed);
      break;
    default:
      newTodos = todos;
      break;
  }
  return newTodos;
};
