// src/pages/PaymentHistoryPage.tsx

import React, { useEffect, useState } from "react";
// API 파일에서 PaymentHistory 타입과 함수를 가져옵니다.
import { getPaymentHistory, PaymentHistory } from "@/apis/api";

export default function PaymentHistoryPage() {
  const [history, setHistory] = useState<PaymentHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPaymentHistory = async () => {
    setLoading(true);
    setError(null);
    try {
      // API 함수를 호출하여 토큰 처리를 위임하고 데이터를 가져옵니다.
      const data = await getPaymentHistory();

      setHistory(data);
    } catch (err: any) {
      // API 함수에서 던져진 에러를 처리합니다.
      if (
        err.response &&
        (err.response.status === 401 || err.response.status === 403)
      ) {
        setError(
          "접근 권한이 없거나 인증이 만료되었습니다. 다시 로그인해주세요.",
        );
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("결제 내역을 불러오는 중 알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center text-lg">
        <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        결제 내역을 불러오는 중입니다...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center text-red-500 border border-red-300 rounded-lg bg-red-50">
        <h2 className="font-bold mb-2">데이터 로드 오류</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-extrabold mb-8 text-scale-700">
        포인트 충전 내역
      </h1>

      {history.length === 0 ? (
        <div className="text-center py-16 text-xl text-gray-500 border border-dashed rounded-lg">
          아직 결제 내역이 없습니다.
        </div>
      ) : (
        <div className="overflow-x-auto shadow-xl rounded-lg border border-brand-secondary">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-brand-primary/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-scale-600 uppercase tracking-wider">
                  상품 이름
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-scale-600 uppercase tracking-wider">
                  결제 금액
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-scale-600 uppercase tracking-wider">
                  결제 수단
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-scale-600 uppercase tracking-wider">
                  결제 승인 시간
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-scale-700">
                    {item.item_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-bold text-brand-primary">
                    {item.amount.toLocaleString()}원
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-scale-500">
                    {item.payment_method_type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-scale-500">
                    {/* ISO 8601 문자열을 로컬 시간으로 변환 */}
                    {new Date(item.approved_at).toLocaleString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
