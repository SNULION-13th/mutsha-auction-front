import { createAuction } from "@/apis/api";
import { buildEndTimeISO } from "@/utils/auction";
import { useMutation } from "@tanstack/react-query";

export type CreateAuctionPayload = {
  title: string;
  description: string;
  startPrice: number;
  duration: {
    days: number;
    hours: number;
    minutes: number;
  };
  image: File;
};

export function useCreateAuction() {
  return useMutation({
    mutationFn: async (payload: CreateAuctionPayload) => {
      return createAuction({
        title: payload.title,
        description: payload.description,
        startingPrice: payload.startPrice,
        endTime: buildEndTimeISO(payload.duration),
        image: payload.image,
      });
    },
  });
}
