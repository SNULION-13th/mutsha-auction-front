// src/hooks/useCreateAuction.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createAuction, CreateAuctionRequest } from "@/apis/api";

export function useCreateAuction() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: CreateAuctionRequest) => createAuction(data),

    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["auctions"] });
        queryClient.invalidateQueries({ queryKey: ["recommended-auctions"] });

        navigate("/auction");

        console.log("경매 등록 성공:", data);
      }
    },

    onError: (error) => {
      console.error("경매 등록 실패:", error);
    },
  });
}
