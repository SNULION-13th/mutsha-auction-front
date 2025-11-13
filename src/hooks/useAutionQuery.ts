import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction } from "../apis/api";

export const auctionQueryKey = ["auctions"] as const;

export const useCreateAuction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      title: string;
      description: string;
      starting_price: number;
      image_url?: string | null;
      image_file?: File | null;
      end_time: string;
    }) => {
      const response = await createAuction(data);
      return response;
    },
    onSuccess: (data) => {
      if (data) {
        // 경매 목록 캐시 무효화
        queryClient.invalidateQueries({
          queryKey: auctionQueryKey,
        });
      }
    },
    onError: (error) => {
      console.error("createAuction error:", error);
    },
  });
};
