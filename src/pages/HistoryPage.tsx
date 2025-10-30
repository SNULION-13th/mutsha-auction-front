import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getPaymentHistory,
  getPaymentDetail,
  type PaymentHistoryItem,
  type PaymentDetail,
} from "../apis/api";
import { Button } from "../components/Button";
import { ROUTES } from "../constants/router";

function HistoryPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tidFromUrl = searchParams.get("tid");

  const [paymentHistory, setPaymentHistory] = useState<PaymentHistoryItem[]>(
    [],
  );
  const [selectedPayment, setSelectedPayment] = useState<PaymentDetail | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPaymentHistory();
  }, []);

  useEffect(() => {
    if (tidFromUrl) {
      loadPaymentDetail(tidFromUrl);
    }
  }, [tidFromUrl]);

  const loadPaymentHistory = async () => {
    setIsLoading(true);
    const history = await getPaymentHistory();
    setPaymentHistory(history);
    setIsLoading(false);
  };

  const loadPaymentDetail = async (tid: string) => {
    const detail = await getPaymentDetail(tid);
    setSelectedPayment(detail);
  };

  const handlePaymentClick = (tid: string) => {
    navigate(`${ROUTES.HISTORY.ROOT}?tid=${tid}`);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "정보 없음";
    const date = new Date(dateString);
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatAmount = (amount: number | null) => {
    if (amount === null || amount === undefined) return "정보 없음";
    return amount.toLocaleString("ko-KR") + "원";
  };

  const getPaymentMethodName = (type: string | null) => {
    if (!type) return "정보 없음";
    const methods: Record<string, string> = {
      CARD: "카드",
      MONEY: "현금",
    };
    return methods[type] || type;
  };

  const getStatusLabel = (status: string) => {
    const statusMap: Record<string, string> = {
      ready: "대기중",
      approved: "승인완료",
      cancel_payment: "결제취소",
      fail_payment: "결제실패",
    };
    return statusMap[status] || status;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-scale-400">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-scale-600">결제 내역</h1>
          <Button onButtonClick={() => navigate(ROUTES.HOME.ROOT)}>
            홈으로 돌아가기
          </Button>
        </div>

        {/* 결제 내역 목록 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-scale-600">결제 목록</h2>
          {paymentHistory.length === 0 ? (
            <div className="text-center py-8 text-scale-400">
              결제 내역이 없습니다.
            </div>
          ) : (
            <div className="space-y-3">
              {paymentHistory.map((payment) => (
                <div
                  key={payment.tid}
                  onClick={() => handlePaymentClick(payment.tid)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    tidFromUrl === payment.tid
                      ? "border-primary-500 bg-primary-50"
                      : "border-scale-200 hover:border-primary-300"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-scale-600">
                      {payment.item_name || `${payment.point}잔 충전`}
                    </h3>
                    <span className="text-sm px-2 py-1 bg-scale-100 rounded">
                      {getStatusLabel(payment.pay_status)}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm text-scale-500">
                    <div className="flex justify-between">
                      <span>결제 금액:</span>
                      <span className="font-medium text-scale-600">
                        {formatAmount(payment.amount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>결제 수단:</span>
                      <span>
                        {getPaymentMethodName(payment.payment_method_type)}
                      </span>
                    </div>
                    <div className="text-xs text-scale-400 mt-2">
                      {formatDate(payment.approved_at)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
