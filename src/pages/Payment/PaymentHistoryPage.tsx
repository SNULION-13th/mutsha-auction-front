import { useEffect, useState } from "react";
import { getPaymentHistory, PaymentHistory } from "../../apis/api";

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState<PaymentHistory[]>([]);
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
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-scale-600 mb-2">
              결제 내역을 불러오고 있습니다
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
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">결제 내역</h1>
      {payments.length === 0 ? (
        <div className="text-center text-scale-500">결제 내역이 없습니다.</div>
      ) : (
        <ul className="space-y-4">
          {payments.map((payment) => (
            <li key={payment.tid} className="p-4 border rounded-md shadow-sm">
              <div className="flex justify-between">
                <p className="font-semibold text-lg">
                  포인트 충전 {payment.point}점
                </p>
                <p className="text-lg font-bold text-brand-primary">
                  {payment.price.toLocaleString()}원
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistoryPage;
