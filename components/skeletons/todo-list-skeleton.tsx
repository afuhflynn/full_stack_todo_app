import { Skeleton } from "@/components/ui/skeleton";

/**
 * =================================
 * Todos Body Skeleton
 *
 * A skeleton loader for the main content area where todos are displayed.
 * It simulates the layout of the todo list, including the input form and
 * several todo items, to provide a smooth loading experience.
 * =================================
 */
export function TodoListSkeleton() {
  return (
    <div className="p-4 space-y-6">
      {/* Add Todo Form Skeleton */}

      {/* Todo List Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 border rounded-md"
          >
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-6 rounded-sm " />
              <Skeleton className="h-5 w-48 " />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-md " />
              <Skeleton className="h-8 w-8 rounded-md " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
