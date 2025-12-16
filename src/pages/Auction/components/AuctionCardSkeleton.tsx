import { Skeleton } from "@/components/Skeleton";

export function AuctionCardSkeleton() {
  return (
    <div className="w-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
      <div className="relative aspect-[4/3] bg-gray-200"></div>

      <div className="flex flex-col p-5 lg:p-6 gap-4">
        <div className="h-6 lg:h-7 bg-gray-200 rounded-lg w-3/4"></div>

        <div className="flex flex-col gap-2 min-h-[40px]">
          <div className="h-4 lg:h-5 bg-gray-100 rounded w-full"></div>
          <div className="h-4 lg:h-5 bg-gray-100 rounded w-5/6"></div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-col gap-2">
            <div className="h-3 bg-gray-100 rounded w-12"></div>
            <div className="h-8 lg:h-10 bg-gray-200 rounded w-24 lg:w-28"></div>
          </div>
          <div className="h-10 lg:h-12 bg-gray-200 rounded-xl w-20 lg:w-24"></div>
        </div>
      </div>
    </div>
  );
}
