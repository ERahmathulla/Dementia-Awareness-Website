import { cn } from '@/lib/utils/cn'

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-skeleton rounded-lg bg-warmgray-200',
        className
      )}
      aria-hidden="true"
    />
  )
}

export function ResourceCardSkeleton() {
  return (
    <div className="card-base p-5 space-y-3" aria-hidden="true">
      <div className="flex items-start justify-between gap-3">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <div className="flex gap-2 pt-1">
        <Skeleton className="h-4 w-20 rounded-full" />
        <Skeleton className="h-4 w-16 rounded-full" />
      </div>
      <div className="flex gap-3 pt-2 border-t border-warmgray-100">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  )
}

export function EventCardSkeleton() {
  return (
    <div className="card-base p-5 space-y-3" aria-hidden="true">
      <Skeleton className="h-4 w-24 rounded-full" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="container-main pt-header section-padding" aria-hidden="true">
      <div className="space-y-4 mb-12">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-5 w-1/2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <ResourceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
