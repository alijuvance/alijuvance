'use client';

import { cn } from '@/utils/cn';

/**
 * Skeleton Component
 * A shimmering loading placeholder for content.
 * Principle 8: Streaming UI / Skeleton Loading
 */

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-zinc-800",
        className
      )}
    />
  );
}

/**
 * Skeleton Layout for Projects
 * Mockup of what the project cards look like while loading
 */
export function ProjectSkeleton() {
  return (
    <div className="pt-8 pb-8 border-t border-gray-100 dark:border-gray-800 first:border-t-0">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="md:col-span-3 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex gap-4 mt-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
