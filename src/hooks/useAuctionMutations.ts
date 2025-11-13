import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createAuction,
  AuctionCreateRequest,
  AuctionCreateResponse,
} from "@/apis/api";

/**
 * 경매 생성 뮤테이션 훅
 */
export function useCreateAuction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AuctionCreateRequest) => {
      const response = await createAuction(data);
      if (!response) {
        throw new Error("경매 등록에 실패했습니다.");
      }
      return response;
    },
    onSuccess: (data: AuctionCreateResponse) => {
      // 경매 목록 쿼리를 무효화하여 새로고침
      queryClient.invalidateQueries({ queryKey: ["auctions"] });
      queryClient.invalidateQueries({ queryKey: ["recommended-auctions"] });
      console.log("경매가 성공적으로 등록되었습니다:", data);
    },
    onError: (error) => {
      console.error("경매 등록 오류:", error);
    },
  });
}
