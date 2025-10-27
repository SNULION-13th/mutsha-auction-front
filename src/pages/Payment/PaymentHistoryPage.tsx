import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { getPaymentHistory, type PaymentHistoryItem } from "@/apis/api";

export default function PaymentHistoryPage() {
  const navigate = useNavigate();
  const [payments, setPayments] = useState<PaymentHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const data = await getPaymentHistory();
        setPayments(data);
        setLoading(false);
      } catch (err) {
        console.error("결제 내역 조회 실패:", err);
        setError("결제 내역을 불러오는데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const formatAmount = (amount: number) => {
    return amount.toLocaleString("ko-KR");
  };

  const getPaymentMethodLabel = (method: string) => {
    const methodMap: { [key: string]: string } = {
      CARD: "카드",
      MONEY: "카카오머니",
      card: "카드",
      money: "카카오머니",
    };
    return methodMap[method] || method;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-scale-600 mb-2">
              결제 내역을 불러오는 중입니다
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
            <h1 className="text-2xl font-bold text-scale-600 mb-2">오류</h1>
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
    <div className="min-h-screen bg-bg-default">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-scale-600 mb-2">결제 내역</h1>
          <p className="text-scale-500">
            총 {payments.length}건의 결제 내역이 있습니다.
          </p>
        </div>

        {payments.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-scale-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📝</span>
            </div>
            <h2 className="text-xl font-semibold text-scale-600 mb-2">
              결제 내역이 없습니다
            </h2>
            <p className="text-scale-500 mb-6">아직 결제한 내역이 없습니다.</p>
            <Button
              variant="primary"
              size="large"
              onButtonClick={() => navigate("/")}
            >
              메인으로 돌아가기
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-scale-600 mb-1">
                      {payment.item_name}
                    </h3>
                    <p className="text-sm text-scale-400">
                      주문번호: {payment.partner_order_id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-primary">
                      {formatAmount(payment.amount)}원
                    </p>
                  </div>
                </div>

                <div className="border-t border-scale-200 pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-scale-400 mb-1">결제 수단</p>
                    <p className="text-base font-medium text-scale-600">
                      {getPaymentMethodLabel(payment.payment_method_type)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-scale-400 mb-1">
                      결제 승인 시간
                    </p>
                    <p className="text-base font-medium text-scale-600">
                      {formatDate(payment.approved_at)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Button
            variant="secondary"
            size="large"
            onButtonClick={() => navigate("/")}
          >
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}
