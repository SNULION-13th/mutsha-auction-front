import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction, AuctionCreateRequest } from "@/apis/api";

export const auctionListQueryKey = ["auction", "list"] as const;

/**
 * 경매 생성 mutation 훅
 */
export function useCreateAuction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AuctionCreateRequest) => createAuction(data),
    onSuccess: () => {
      // 경매 목록 캐시 무효화하여 새로고침
      queryClient.invalidateQueries({ queryKey: auctionListQueryKey });
    },
    onError: (error) => {
      console.error("경매 등록 실패:", error);
    },
  });
}
