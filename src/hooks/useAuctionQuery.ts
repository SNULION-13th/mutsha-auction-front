import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction, CreateAuctionRequest } from "@/apis/api";

/**
 * 경매 생성 mutation hook
 * 경매를 등록하고 성공 시 경매 목록을 갱신합니다.
 */
export function useCreateAuction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateAuctionRequest) => {
      const response = await createAuction(data);
      if (!response) {
        throw new Error("경매 등록에 실패했습니다.");
      }
      return response;
    },
    onSuccess: () => {
      // 경매 목록 쿼리를 무효화하여 최신 데이터 가져오기
      queryClient.invalidateQueries({ queryKey: ["auctions"] });
    },
    onError: (error) => {
      console.error("경매 등록 실패:", error);
    },
  });
}
