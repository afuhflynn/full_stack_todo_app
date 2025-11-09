import { cn } from "@/lib/utils";

type props = {};

export const ActionBar = ({}: props) => {
  const isActive = false;
  return (
    <div className="h-16 px-6 overflow-hidden flex items-center justify-between w-full border-border border border-b-0 border-x-0">
      <p className="dark:text-gray-600 text-gray-400 font-light">
        5 items left
      </p>
      <div className="flex items-center gap-4">
        <button
          className={cn(
            "dark:text-gray-600 text-gray-400 hover:text-black hover:dark:text-white transition-all duration-100 text-sm font-bold",
            isActive ? "text-primary dark:text-primary" : ""
          )}
        >
          All
        </button>
        <button
          className={cn(
            "dark:text-gray-600 text-gray-400 hover:text-black hover:dark:text-white transition-all duration-100 text-sm font-bold",
            isActive ? "text-primary dark:text-primary" : ""
          )}
        >
          Active
        </button>
        <button
          className={cn(
            "dark:text-gray-600 text-gray-400 hover:text-black hover:dark:text-white transition-all duration-100 text-sm font-bold",
            isActive ? "text-primary dark:text-primary" : ""
          )}
        >
          Completed
        </button>
      </div>
      <button className="dark:text-gray-600 text-gray-400 hover:text-black hover:dark:text-white transition-all duration-100 text-sm font-bold">
        Clear completed
      </button>
    </div>
  );
};
