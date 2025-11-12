import { createAuction } from "@/apis/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const auctionQueryKey = ["auctions"];

export const useCreateAuction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAuction,
    // 경매 생성 성공 시 경매 리스트 캐시 갱신
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: auctionQueryKey });
    },
  });
};
