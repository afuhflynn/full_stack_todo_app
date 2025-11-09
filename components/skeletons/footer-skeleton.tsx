import { Skeleton } from "@/components/ui/skeleton";

/**
 * =================================
 * Footer Skeleton
 *
 * A skeleton loader for the application footer. It mimics the layout of
 * the footer's content, such as copyright text and social media links,
 * providing a placeholder while the page is loading.
 * =================================
 */
export function FooterSkeleton() {
  return (
    <footer className="flex items-center justify-between p-4 border-t">
      <Skeleton className="h-5 w-48" />
      <div className="flex items-center gap-4">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </footer>
  );
}
