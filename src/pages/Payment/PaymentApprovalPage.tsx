import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { getUserInfo, paymentApproval } from "@/apis/api";

export default function PaymentApprovalPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasProcessed, setHasProcessed] = useState(false);

  useEffect(() => {
    if (hasProcessed) {
      return;
    }

    const processPayment = async () => {
      // read tokens
      const pgToken = searchParams.get("pg_token");
      const tid = localStorage.getItem("tid");

      if (!pgToken || !tid) {
        setError("결제 정보가 올바르지 않습니다.");
        setIsProcessing(false);
        return;
      }

      const processingKey = `processing_payment_${tid}`;

      // If another instance is already processing this tid, skip to avoid duplicate approve calls
      if (localStorage.getItem(processingKey)) {
        // mark processed to avoid re-entry in this mount
        setHasProcessed(true);
        return;
      }

      // mark as processing (persisted) and in-memory
      try {
        localStorage.setItem(processingKey, "1");
        setHasProcessed(true);

        const approvalSuccess = await paymentApproval({
          pg_token: pgToken,
          tid: tid,
        });

        if (approvalSuccess) {
          localStorage.removeItem("tid");

          try {
            const latestUserInfo = await getUserInfo();
            if (latestUserInfo) {
              localStorage.setItem(
                "userProfile",
                JSON.stringify(latestUserInfo),
              );
            }
          } catch (userInfoError) {
            console.error("사용자 정보 가져오기 실패:", userInfoError);
          }

          setIsProcessing(false);
          setTimeout(() => navigate("/"), 3000);
        } else {
          setError("결제 승인에 실패했습니다.");
          setIsProcessing(false);
        }
      } catch (error: any) {
        console.error("결제 승인 실패:", error);
        setError("결제 승인 중 오류가 발생했습니다.");
        setIsProcessing(false);
      } finally {
        // remove processing flag so retries are possible on real errors
        try {
          localStorage.removeItem(processingKey);
        } catch (e) {
          // ignore
        }
      }
    };

    processPayment();
  }, [searchParams, navigate, hasProcessed]);

  if (isProcessing) {
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

  if (error) {
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
            <p className="text-scale-500">{error}</p>
          </div>
          <Button
            variant="primary"
            size="large"
            onButtonClick={() => navigate("/")}
          >
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
            잠시 후 메인 페이지로 이동합니다...
          </p>
        </div>
        <Button
          variant="primary"
          size="large"
          onButtonClick={() => navigate("/")}
        >
          바로 이동하기
        </Button>
      </div>
    </div>
  );
}
