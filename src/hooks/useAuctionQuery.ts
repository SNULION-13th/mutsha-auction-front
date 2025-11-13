import { useMutation } from "@tanstack/react-query";
import { createAuction, CreateAuctionPayload } from "@/apis/api";
import { useNavigate } from "react-router-dom";

export const useCreateAuctionMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: CreateAuctionPayload) => createAuction(data),
    onSuccess: (data) => {
      if (data) {
        // 성공 시 경매 상세 페이지 이동
        navigate(`/auction/${data.id}`);
      } else {
        // 응답 데이터가 없을 경우 (API null 반환)
        alert("경매 등록에 실패했습니다.");
      }
    },
    onError: (error) => {
      // 네트워크 오류 등 요청 실패 시
      console.error("경매 등록 중 오류 발생:", error);
      alert("경매 등록 중 오류가 발생했습니다.");
    },
  });
};
