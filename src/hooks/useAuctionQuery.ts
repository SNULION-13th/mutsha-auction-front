// useAuctionQuery.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction, AuctionDetail, CreateAuctionRequest } from "@/apis/api";

export const useCreateAuction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateAuctionRequest): Promise<AuctionDetail> => {
      const result = await createAuction(data);
      if (!result) {
        throw new Error("경매 등록에 실패했습니다.");
      }
      return result;
    },
    // 경매 생성 성공 시 경매 목록 캐시 무효화
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auctions"] });
    },
  });
};
