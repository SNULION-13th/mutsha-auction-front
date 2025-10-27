import { useState } from "react";
import { getPaymentDetails, PaymentDetailResponse } from "@/apis/api";

export default function PaymentDetailsPage() {
  const [tid, setTid] = useState("");
  const [paymentDetails, setPaymentDetails] =
    useState<PaymentDetailResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!tid.trim()) {
      setError("TID를 입력해주세요.");
      return;
    }
    setLoading(true);
    setError(null);
    setPaymentDetails(null);

    try {
      const details = await getPaymentDetails(tid);
      if (details) {
        setPaymentDetails(details);
      } else {
        setError("결제 정보를 찾을 수 없습니다.");
      }
    } catch (e) {
      setError("조회 중 오류가 발생했습니다.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>결제 상세 정보 조회 (개발용)</h1>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={tid}
          onChange={(e) => setTid(e.target.value)}
          placeholder="TID를 입력하세요"
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "300px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
          }}
        >
          {loading ? "조회 중..." : "조회"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {paymentDetails && (
        <div>
          <h2>조회 결과</h2>
          <pre
            style={{
              backgroundColor: "#f4f4f4",
              padding: "15px",
              border: "1px solid #ddd",
            }}
          >
            {JSON.stringify(paymentDetails, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
