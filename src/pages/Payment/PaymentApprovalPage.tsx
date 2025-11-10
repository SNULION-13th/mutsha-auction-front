import { useEffect, useRef, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "@/components/Button";
import { usePaymentApproval } from "@/hooks/usePaymentQuery";

export default function PaymentApprovalPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const hasProcessedRef = useRef(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "pending" | "success" | "error"
  >("pending");
  const { mutateAsync: paymentApprovalMutation, error } = usePaymentApproval();

  // 결제 성공 시 효과 적용
  usePaymentSuccessEffect(paymentStatus === "success");

  useEffect(() => {
    // 이미 처리 중이거나 완료된 경우 중복 실행 방지
    if (hasProcessedRef.current) {
      return;
    }

    hasProcessedRef.current = true;

    const processPayment = async () => {
      try {
        setPaymentStatus("pending");
        const pgToken = searchParams.get("pg_token");
        const tid = localStorage.getItem("tid");

        if (!pgToken || !tid) {
          throw new Error("결제 정보가 올바르지 않습니다.");
        }

        await paymentApprovalMutation({
          pg_token: pgToken,
          tid: tid,
        });
        setPaymentStatus("success");
      } catch (error) {
        setPaymentStatus("error");
      }
    };

    processPayment();
  }, []);

  if (paymentStatus === "pending") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-scale-600 mb-2">
              결제를 처리하고 있습니다
            </h1>
            <p className="text-scale-500">잠시만 기다려주세요...</p>
          </div>
        </div>
      </div>
    );
  }

  if (paymentStatus === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">❌</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-scale-600 mb-2">
              결제 실패
            </h1>
            <p className="text-scale-500">{error?.message}</p>
          </div>
          <Button variant="primary" size="large" onClick={() => navigate("/")}>
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-default">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-4xl">✅</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-scale-600 mb-2">
            결제가 완료되었습니다!
          </h1>
          <p className="text-scale-500 mb-1">
            포인트가 성공적으로 충전되었습니다.
          </p>
          <p className="text-sm text-scale-400">
            잠시 후 이전 페이지로 이동합니다...
          </p>
        </div>
        <Button variant="primary" size="large" onClick={() => navigate(-1)}>
          바로 이전 페이지로
        </Button>
      </div>
    </div>
  );
}

const usePaymentSuccessEffect = (success: boolean) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!success) return;
    localStorage.removeItem("tid");

    const returnTo = sessionStorage.getItem("returnTo") || "/";
    sessionStorage.removeItem("returnTo");

    setTimeout(() => {
      navigate(returnTo, { replace: true });
    }, 3000);
  }, [success]);
};
