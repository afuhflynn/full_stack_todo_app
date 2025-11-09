import { HeaderSkeleton } from "./header-skeleton";
import { FooterSkeleton } from "./footer-skeleton";
import { TodoListSkeleton } from "./todo-list-skeleton";

/**
 * =================================
 * Page Skeleton
 *
 * This component assembles the individual skeleton loaders into a complete
 * page layout. It's used to provide a consistent loading state across
 * the application, improving the user experience during initial page loads
 * and client-side navigations.
 * =================================
 */
export function PageSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSkeleton />
      <main className="flex-1">
        <TodoListSkeleton />
      </main>
      <FooterSkeleton />
    </div>
  );
}
