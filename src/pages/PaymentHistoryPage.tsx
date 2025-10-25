import { useState, useEffect } from "react";
import { getPaymentHistory, getPaymentDetails } from "../apis/api";

interface Payment {
  id: number;
  tid: string;
  partner_order_id: string;
  partner_user_id: string;
  point: number;
  price: number;
  pay_status: string;
  user: number;
}

interface DetailedPayment extends Payment {
  details: any; // Details from KakaoPay
}

const PaymentHistoryPage = () => {
  const [detailedPaymentHistory, setDetailedPaymentHistory] = useState<
    DetailedPayment[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistoryAndDetails = async () => {
      setIsLoading(true);
      const history = await getPaymentHistory();
      if (history) {
        try {
          const detailedHistory = await Promise.all(
            history.map(async (payment) => {
              const details = await getPaymentDetails(payment.tid);
              return { ...payment, details };
            }),
          );
          setDetailedPaymentHistory(detailedHistory);
        } catch (err) {
          setError("Failed to fetch payment details for all items.");
        }
      } else {
        setError("Failed to fetch payment history.");
      }
      setIsLoading(false);
    };

    fetchHistoryAndDetails();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Payment History</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading ? (
        <p>Loading payment history...</p>
      ) : (
        <div>
          {detailedPaymentHistory.length > 0 ? (
            <ul>
              {detailedPaymentHistory.map((payment) => (
                <li
                  key={payment.id}
                  style={{
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    padding: "10px",
                  }}
                >
                  <p>
                    <strong>상품 이름 (Item Name):</strong>{" "}
                    {payment.details?.item_name || "N/A"}
                  </p>
                  <p>
                    <strong>결제 금액 (Amount):</strong>{" "}
                    {payment.details?.amount?.total || "N/A"}
                  </p>
                  <p>
                    <strong>결제 수단 (Payment Method):</strong>{" "}
                    {payment.details?.payment_method_type || "결제 미완료"}
                  </p>
                  <p>
                    <strong>결제 승인 시간 (Approved At):</strong>{" "}
                    {payment.details?.approved_at || "결제 미완료"}
                  </p>
                  <p>
                    <strong>주문 번호 (Order ID):</strong>{" "}
                    {payment.partner_order_id}
                  </p>
                  <p>
                    <strong>상태 (Status):</strong> {payment.pay_status}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No payment history found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentHistoryPage;
