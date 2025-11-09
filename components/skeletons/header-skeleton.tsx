import { Skeleton } from "@/components/ui/skeleton";

/**
 * =================================
 * Header Skeleton
 *
 * A skeleton loader that mimics the structure of the main header.
 * It provides a visual placeholder while the header content is loading,
 * improving the perceived performance and user experience.
 * =================================
 */
export function HeaderSkeleton() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex items-center gap-4">
        {/* Logo Skeleton */}
        <Skeleton className="h-8 w-8 rounded-full" />
        {/* Title Skeleton */}
        <Skeleton className="h-6 w-24" />
      </div>
      <div className="flex items-center gap-4">
        {/* Theme Toggle Skeleton */}
        <Skeleton className="h-8 w-8 rounded-md" />
        {/* User Profile Skeleton */}
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
}
