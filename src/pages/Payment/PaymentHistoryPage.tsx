import { useEffect, useState } from "react";
import { getPaymentHistory, syncPaymentOrders } from "@/apis/api";

export default function PaymentHistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        // 실시간 동기화 먼저 수행
        await syncPaymentOrders();

        // 동기화 후 DB에 저장된 내역 불러오기
        const res = await getPaymentHistory();

        if (res.length === 0) {
          setError("결제 내역이 없습니다.");
        } else {
          setHistory(res);
        }
      } catch (e) {
        console.error(e);
        setError("결제 내역 조회 실패");
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">결제 내역</h2>
      <ul className="divide-y divide-gray-200">
        {history.map((item) => (
          <li key={item.tid} className="py-3">
            <p>
              <strong>상품 이름:</strong> {item.item_name}
            </p>
            <p>
              <strong>금액:</strong> {item.amount.toLocaleString()}원
            </p>
            <p>
              <strong>수단:</strong> {item.payment_method_type}
            </p>
            <p>
              <strong>승인 시간:</strong>{" "}
              {new Date(item.approved_at).toLocaleString("ko-KR")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
