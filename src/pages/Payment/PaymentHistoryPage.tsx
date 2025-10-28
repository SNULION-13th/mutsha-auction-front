import { useEffect, useState } from "react";
import { getPaymentHistory } from "../../apis/api";

interface Payment {
  item_name: string;
  amount: number;
  payment_method_type: string;
  approved_at: string;
}

function PaymentHistoryPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await getPaymentHistory();
        setPayments(response);
      } catch (err) {
        setError("결제 내역을 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        로딩 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full py-20">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-10">
        <h1 className="text-4xl font-bold">결제 내역</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-lg font-semibold">상품 이름</th>
                <th className="p-4 text-lg font-semibold">결제 금액</th>
                <th className="p-4 text-lg font-semibold">결제 수단</th>
                <th className="p-4 text-lg font-semibold">결제 승인 시간</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{payment.item_name}</td>
                  <td className="p-4">{payment.amount.toLocaleString()}원</td>
                  <td className="p-4">{payment.payment_method_type}</td>
                  <td className="p-4">
                    {new Date(payment.approved_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistoryPage;
