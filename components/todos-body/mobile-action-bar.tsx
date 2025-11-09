"use client";

import { tabs } from "@/constants";
import { useClearCompletedTodos, useGetTodos } from "@/hooks";
import { useTodoStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { ActiveTab } from "@/types";
import { filterTodos } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const MobileActionBar = () => {
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
    <div className="flex bg-popover md:hidden justify-center items-center gap-4 w-full h-16 mt-5 rounded-t-[5px] overflow-hidden">
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
  );
};
