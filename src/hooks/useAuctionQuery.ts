import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createAuction, AuctionCreatePayload } from "@/apis/api";
import { ROUTE_PATH } from "@/constants/router";

export const useCreateAuctionMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AuctionCreatePayload) => createAuction(payload),
    onSuccess: (data) => {
      if (data) {
        // Invalidate and refetch all auctions to include the new one
        queryClient.invalidateQueries({ queryKey: ["auctions"] });
        // Navigate to the newly created auction's page
        navigate(`${ROUTE_PATH.AUCTION_ROOM}/${data.id}`);
      }
    },
    onError: (error) => {
      console.error("경매 생성에 실패했습니다.", error);
      // TODO: Display error message to the user
    },
  });
};
