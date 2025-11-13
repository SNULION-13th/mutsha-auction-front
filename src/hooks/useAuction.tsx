import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction } from "@/apis/api";
import { auctionCreateSchema } from "@/pages/AuctionCreate/schema";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

type AuctionCreateInput = z.infer<typeof auctionCreateSchema>;

interface UseCreateAuctionOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useCreateAuction(options?: UseCreateAuctionOptions) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createAuction,
    onSuccess: (data) => {
      if (!data) {
        console.error("경매 등록 실패: 응답 데이터 없음");
        alert("경매 등록에 실패했습니다.");
        return;
      }

      queryClient.invalidateQueries({ queryKey: ["auctions"] });
      queryClient.invalidateQueries({ queryKey: ["recommendedAuctions"] });

      // 성공 콜백 실행
      options?.onSuccess?.(data);

      // 등록된 경매 상세 페이지로 이동
      navigate(`/auction/${data.id}`);
    },
    onError: (error: Error) => {
      console.error("경매 등록 실패:", error);
      options?.onError?.(error);

      // 에러 토스트 표시 등 추가 처리
      alert("경매 등록에 실패했습니다.");
    },
  });
}
