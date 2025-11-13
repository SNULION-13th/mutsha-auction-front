import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createAuction,
  AuctionCreateRequest,
  AuctionCreateResponse,
} from "@/apis/api";

// AuctionRoomPage에서 사용하는 경매 상세 쿼리의 queryKey
export const auctionDetailQueryKey = (auctionId: number | string) => [
  "auctionDetail",
  auctionId,
];

export function useAuctionCreateMutation() {
  const queryClient = useQueryClient();
  return useMutation<AuctionCreateResponse, unknown, AuctionCreateRequest>({
    mutationFn: createAuction,
    onSuccess: (result) => {
      // 경매 등록 성공 시 해당 경매 상세 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: auctionDetailQueryKey(result.id),
      });
    },
  });
}
