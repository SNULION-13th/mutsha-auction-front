import { useQuery } from "@tanstack/react-query";
import {
  getAllAuctions,
  getRecommendedAuctions,
  AuctionListParams,
} from "@/apis/api";

export function useAuctions(params: AuctionListParams = {}) {
  return useQuery({
    queryKey: ["auctions", params],
    queryFn: () => getAllAuctions(params),
  });
}

export function useRecommendedAuctions() {
  return useQuery({
    queryKey: ["recommended-auctions"],
    queryFn: () => getRecommendedAuctions(),
  });
}
