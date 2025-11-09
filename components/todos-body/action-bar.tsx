"use client";
import { useTodoStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import { ActiveTab } from "@/types/index";
import { tabs } from "@/constants";
import { Skeleton } from "../ui/skeleton";
import { filterTodos } from "@/utils";
import { useClearCompletedTodos, useGetTodos } from "@/hooks";
import { toast } from "sonner";

type props = {};

export const ActionBar = ({}: props) => {
  const { isLoading, setTodos } = useTodoStore();
  const { todos, isPending, error } = useGetTodos();
  const { mutate, isPending: clearing } = useClearCompletedTodos();
  const params = useSearchParams();
  const tab = params.get("tab");

  const [activeTab, setActiveTab] = useState<ActiveTab>(tab || "all");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (activeTab && todos) {
      const filteredTodos = filterTodos(todos, activeTab);

      setTodos(filteredTodos);
    }
  }, [activeTab, todos]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <Suspense fallback={null}>
      <div className="h-16 px-6 overflow-hidden flex items-center justify-between w-full border-border border border-b-0 border-x-0 ">
        {isLoading || isPending ? (
          <Skeleton className="h-2 w-8 rounded-full" />
        ) : (
          <p className="dark:text-gray-600 text-gray-400 font-light">
            {(todos && todos.length) || 0} items left
          </p>
        )}
        <div className="flex absolute md:relative items-center gap-4 w-full md:w-auto h-16 md:h-auto top-8 md:top-0 z-80 md:z-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "dark:text-gray-600 text-gray-400 hover:text-black/90 transition-all duration-75 text-sm font-bold",
                activeTab === tab.value
                  ? "text-primary dark:text-primary"
                  : "hover:dark:text-white",
              )}
              onClick={() => {
                setActiveTab(tab.value);
                router.push(`${pathname}?tab=${tab.value}`);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          className="dark:text-gray-600 text-gray-400 hover:text-black/90 hover:dark:text-white transition-all duration-75 text-sm font-bold"
          onClick={() => mutate()}
          disabled={clearing}
        >
          Clear completed
        </button>
      </div>
    </Suspense>
  );
};
