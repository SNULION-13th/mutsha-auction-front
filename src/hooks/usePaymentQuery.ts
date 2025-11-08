import { paymentApproval, paymentReady } from "@/apis/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userQueryKey } from "./useAuthQuery";

export const usePaymentReady = () => {
  return useMutation({
    mutationFn: paymentReady,
  });
};

export const usePaymentApproval = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: paymentApproval,
    // 결제 승인 성공 시 유저 정보 캐시 갱신
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKey });
    },
  });
};
