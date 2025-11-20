// src/hooks/useAuctionMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction as api } from "@/apis/api";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

export const useCreateAuction = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      // createAuction (imported as `api`) is a function that performs the request,
      // so call it directly with the form data.
      const res = await api(formData as any);
      return res;
    },
    onSuccess: (data) => {
      // ✅ 등록 성공 시 리스트 캐시 무효화 → 최신 데이터 강제 refetch
      queryClient.invalidateQueries({ queryKey: ["auctionList"] });

      console.log("status:");
      console.log("Auction created successfully:", data);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.error("createAuction error:", error.response?.data);
        alert("경매 등록에 실패했습니다.");
      } else {
        console.error("createAuction unknown error:", error);
      }
    },
  });
};
