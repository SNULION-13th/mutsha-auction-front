import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderTrack, Amount, OrderResponse } from "@/apis/api";

export default function Order() {
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      setError(null);
      try {
        const responses = await OrderTrack();
        console.log("OrderTrack response:", responses);
        if (Array.isArray(responses)) {
          console.log("First order:", responses[0]);
          setOrders([...responses]);
        } else {
          console.log(responses);
          throw new Error("잘못된 응답 형식");
        }
      } catch (err: any) {
        setError(err.message ?? "주문 내역을 가져오는 중 오류 발생");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  const formatAmount = (value: number) =>
    new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(value);

  const formatDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleString("ko-KR", { hour12: false }) : "-";

  if (loading) return <div className="p-6">로딩 중...</div>;
  if (error) return <div className="p-6 text-red-500">에러: {error}</div>;

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">내 주문</h1>

      {orders.length === 0 ? (
        <div className="text-scale-500">주문 내역이 없습니다.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 px-3">상품 이름</th>
                <th className="py-2 px-3">총 결제 금액</th>
                <th className="py-2 px-3">부가세</th>
                <th className="py-2 px-3">비과세</th>
                <th className="py-2 px-3">포인트 사용</th>
                <th className="py-2 px-3">할인 금액</th>
                <th className="py-2 px-3">환경보증금</th>
                <th className="py-2 px-3">결제 수단</th>
                <th className="py-2 px-3">결제 승인 시간</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.cid} className="border-b last:border-b-0">
                  <td className="py-3 px-3">{o.item_name}</td>
                  <td className="py-3 px-3">{formatAmount(o.amount.total)}</td>
                  <td className="py-3 px-3">{formatAmount(o.amount.vat)}</td>
                  <td className="py-3 px-3">
                    {formatAmount(o.amount.tax_free)}
                  </td>
                  <td className="py-3 px-3">{formatAmount(o.amount.point)}</td>
                  <td className="py-3 px-3">
                    {formatAmount(o.amount.discount)}
                  </td>
                  <td className="py-3 px-3">
                    {formatAmount(o.amount.green_deposit)}
                  </td>
                  <td className="py-3 px-3">{o.payment_method_type}</td>
                  <td className="py-3 px-3">{formatDate(o.approved_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
