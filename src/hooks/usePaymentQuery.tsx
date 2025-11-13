import { paymentApproval, paymentReady } from "@/apis/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userQueryKey } from "./useAuthQuery";

// 카카오페이 페이지로 이동
export const usePaymentReady = () => {
  return useMutation({
    mutationFn: paymentReady,
  });
};

// 결제 승인 후 redirect page에서의 네트워크 요청
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
