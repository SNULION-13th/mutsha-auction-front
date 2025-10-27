import { paymentHistory, PaymentHistoryResponse } from "@/apis/api";
import { useEffect, useState } from "react";

function PaymentHistoryPage() {
  const [histories, setHistories] = useState<PaymentHistoryResponse[] | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        setLoading(true);
        const data = await paymentHistory();
        if (data) {
          const sortedData = [...data].sort(
            (a, b) =>
              new Date(b.approved_at).getTime() -
              new Date(a.approved_at).getTime(),
          );
          setHistories(sortedData);
        } else {
          setHistories(null);
        }
        setError(null);
      } catch (error) {
        console.error("주문 내역 가져오기 실패:", error);
        setError("결제 내역을 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []);
  console.log(histories);

  if (loading) {
    return <div className="p-4 text-center">로딩 중...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">결제 내역</h1>
      {histories && histories.length > 0 ? (
        <ul className="space-y-4">
          {histories.map((history) => (
            <li key={history.tid} className="rounded-lg border p-4 shadow-sm">
              <div className="flex justify-between">
                <span className="font-semibold">{history.item_name}</span>
                <span className="text-lg font-bold text-blue-600">
                  {history.amount.total.toLocaleString()}원
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                <span>결제 방법: {history.payment_method_type}</span>
                <span className="mx-2">|</span>
                <span>
                  결제일: {new Date(history.approved_at).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-center text-gray-500">
          결제 내역이 없습니다.
        </div>
      )}
    </div>
  );
}

export default PaymentHistoryPage;
