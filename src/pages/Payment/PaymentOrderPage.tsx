import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { getPaymentOrder, PaymentOrderInfo } from "@/apis/api";
import { ROUTES } from "@/constants/router";

export default function PaymentOrderPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tid = useMemo(() => searchParams.get("tid"), [searchParams]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<PaymentOrderInfo | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!tid) {
        setError("tid가 없어 주문 정보를 조회할 수 없습니다.");
        setLoading(false);
        return;
      }
      try {
        const data = await getPaymentOrder(tid);
        if (data) {
          setOrder(data);
        } else {
          setError("주문 정보를 가져오지 못했습니다.");
        }
      } catch (e) {
        setError("주문 조회 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [tid]);

  const formatAmount = (amount: PaymentOrderInfo["amount"]) => {
    if (typeof amount === "number") return amount.toLocaleString();
    if (amount && typeof amount === "object" && "total" in amount) {
      const total = (amount as { total: number }).total;
      return Number(total).toLocaleString();
    }
    return String(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-scale-600 mb-2">
              주문 정보를 불러오는 중
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
              주문 조회 실패
            </h1>
            <p className="text-scale-500">{error}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outlined" onButtonClick={() => navigate(-1)}>
              이전으로
            </Button>
            <Button
              variant="primary"
              onButtonClick={() => navigate(ROUTES.HOME.ROOT)}
            >
              홈으로
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-default px-4">
      <div className="w-full max-w-xl bg-bg-white rounded-[16px] shadow p-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-scale-600">주문 조회</h1>
          <span className="text-sm text-scale-400">TID: {order?.tid}</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-scale-200 pb-3">
            <span className="text-scale-500">상품명</span>
            <span className="font-bold text-scale-700">{order?.item_name}</span>
          </div>
          <div className="flex items-center justify-between border-b border-scale-200 pb-3">
            <span className="text-scale-500">결제 금액</span>
            <span className="font-bold text-scale-700">
              ₩ {order ? formatAmount(order.amount) : "-"}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-scale-200 pb-3">
            <span className="text-scale-500">결제 수단</span>
            <span className="font-bold text-scale-700">
              {order?.payment_method_type}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-scale-500">승인 시간</span>
            <span className="font-bold text-scale-700">
              {order?.approved_at
                ? new Date(order.approved_at).toLocaleString()
                : "-"}
            </span>
          </div>
        </div>

        <div className="flex gap-3 justify-end pt-2">
          <Button variant="outlined" onButtonClick={() => navigate(-1)}>
            이전으로
          </Button>
          <Button
            variant="primary"
            onButtonClick={() => navigate(ROUTES.HOME.ROOT)}
          >
            홈으로
          </Button>
        </div>
      </div>
    </div>
  );
}
