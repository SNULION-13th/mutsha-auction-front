// PaymentHistoryPage.js
import React, { useState, useEffect } from "react";
import { api } from "@/apis/axios";

// Define a proper TypeScript interface so `useState` gets a correct type
interface PaymentHistoryItem {
  item_name: string;
  amount: number;
  payment_method_type: string;
  approved_at: string;
}

export default function PaymentHistoryPage() {
  const [history, setHistory] = useState<PaymentHistoryItem[]>([]); // typed empty array... 타입스크립트는 뭐 이렇게 해야한대;;
  const [loading, setLoading] = useState<boolean>(true); // explicit boolean

  useEffect(() => {
    // 3. 페이지가 처음 렌더링될 때 딱 한 번 실행 ( [] 의존성 배열 덕분)
    const fetchHistory = async () => {
      try {
        setLoading(true);
        // axios 인스턴스 사용: baseURL과 withCredentials가 이미 설정되어 있어 프록시/쿠키 문제가 해결됩니다.
        const res = await api.get<PaymentHistoryItem[]>("/payment/history/");

        if (res.status !== 200) {
          console.warn(
            "Failed to load payment history",
            res.status,
            res.statusText,
          );
          setHistory([]);
          return;
        }

        const data = res.data;
        console.log(data);
        setHistory(Array.isArray(data) ? data : []); // 혹시 배열 아니면 튕기도록
      } catch (error) {
        console.error("결제 내역 로딩 실패:", error);
        setHistory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []); // [] : 빈 배열은 "컴포넌트가 처음 마운트될 때"를 의미

  // ... (다음 단계: 렌더링) ...

  return (
    <div>
      <h2>내 결제 내역</h2>
      {history.length === 0 ? (
        <p>결제 내역이 없습니다.</p>
      ) : (
        // 7. state(history)에 담긴 데이터를 map으로 "단순 나열"
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <p>
                <strong>상품명:</strong> {item.item_name}
              </p>
              <p>
                <strong>결제 금액:</strong> {item.amount}원
              </p>
              <p>
                <strong>결제 수단:</strong> {item.payment_method_type}
              </p>
              <p>
                <strong>결제 승인 시간:</strong> {item.approved_at}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
