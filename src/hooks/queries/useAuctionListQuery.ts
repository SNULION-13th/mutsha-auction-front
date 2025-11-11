import { useQuery } from "@tanstack/react-query";
import { getAllAuctions, AuctionListItem } from "@/apis/api";

// TanStack Query 훅
export const useAuctionList = (
  status: "active" | "ended" | "cancelled" = "active",
) => {
  return useQuery<AuctionListItem[]>({
    queryKey: ["auctionList", status], // ✅ 캐시 키: 상태별 분리
    queryFn: async () => {
      const data = await getAllAuctions({ status });
      return data;
    },
    staleTime: 1000 * 60 * 2, // 2분 동안 캐시 유지
    retry: 1,
  });
};
