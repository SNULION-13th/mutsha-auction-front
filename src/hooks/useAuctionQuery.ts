import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createAuction } from "../apis/api";

// A new query key for auctions list to invalidate it upon creation
export const auctionKeys = {
  all: ["auctions"] as const,
  lists: () => [...auctionKeys.all, "list"] as const,
  list: (filters: string) => [...auctionKeys.lists(), { filters }] as const,
  details: () => [...auctionKeys.all, "detail"] as const,
  detail: (id: number) => [...auctionKeys.details(), id] as const,
};

export const useCreateAuction = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createAuction,
    onSuccess: (data) => {
      if (data) {
        // Invalidate the auctions list query to refetch and show the new auction
        queryClient.invalidateQueries({ queryKey: auctionKeys.lists() });
        // Navigate to the auction list page as requested
        navigate("/auction");
      }
    },
    onError: (error) => {
      console.error("경매 생성에 실패했습니다:", error);
      // Here you could add logic to show an error message to the user
      alert("경매 생성에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
