import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPaymentHistory, PaymentHistoryItem } from "@/apis/api";
import { Button } from "@/components/Button";

export default function PaymentHistoryPage() {
  const navigate = useNavigate();
  const [payments, setPayments] = useState<PaymentHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const data = await getPaymentHistory();
        setPayments(data);
        setIsLoading(false);
      } catch (err) {
        console.error("결제 내역 조회 실패:", err);
        setError("결제 내역을 불러오는데 실패했습니다.");
        setIsLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatPaymentMethod = (method: string) => {
    const methods: { [key: string]: string } = {
      CARD: "카드",
      MONEY: "현금",
      POINT: "포인트",
    };
    return methods[method] || method;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-scale-500">결제 내역을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-scale-600">{error}</p>
          <Button
            variant="primary"
            size="medium"
            onButtonClick={() => navigate("/")}
          >
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-default py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-scale-600">결제 내역</h1>
          <Button
            variant="secondary"
            size="medium"
            onButtonClick={() => navigate("/")}
          >
            메인으로
          </Button>
        </div>

        {payments.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-scale-500 text-lg">결제 내역이 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.tid}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-scale-600 mb-1">
                      {payment.item_name}
                    </h2>
                    <p className="text-sm text-scale-400">
                      주문번호: {payment.partner_order_id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-primary">
                      {payment.amount.total.toLocaleString()}원
                    </p>
                  </div>
                </div>

                <div className="border-t border-scale-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-scale-500">결제 수단</span>
                    <span className="text-scale-600 font-medium">
                      {formatPaymentMethod(payment.payment_method_type)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-scale-500">결제 승인 시간</span>
                    <span className="text-scale-600 font-medium">
                      {formatDate(payment.approved_at)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-scale-500">상태</span>
                    <span className="text-green-600 font-medium">
                      {payment.status === "READY"
                        ? "준비"
                        : payment.status === "SEND_TMS"
                          ? "승인 요청"
                          : payment.status === "AUTH_PASSWORD"
                            ? "비밀번호 인증"
                            : payment.status === "ISSUED_SID"
                              ? "SID 발급 완료"
                              : payment.status === "SUCCESS_PAYMENT"
                                ? "결제 완료"
                                : payment.status === "PART_CANCEL_PAYMENT"
                                  ? "부분 취소"
                                  : payment.status === "CANCEL_PAYMENT"
                                    ? "결제 취소"
                                    : payment.status === "FAIL_AUTH_PASSWORD"
                                      ? "비밀번호 인증 실패"
                                      : payment.status === "QUIT_PAYMENT"
                                        ? "사용자 결제 중단"
                                        : payment.status === "FAIL_PAYMENT"
                                          ? "결제 실패"
                                          : payment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
