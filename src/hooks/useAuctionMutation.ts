import { useMutation } from "@tanstack/react-query";
import { createAuction } from "@/apis/api";

export const useCreateAuction = () => {
  return useMutation({
    mutationFn: createAuction,
  });
};
