import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPaymentOrderDetail, type PaymentOrderDetail } from "@/apis/api";

function formatKRW(n?: number) {
  if (typeof n !== "number") return "-";
  return n.toLocaleString("ko-KR") + " 원";
}

function Field({ label, value }: { label: string; value: any }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

export default function PaymentReceiptPage() {
  const location = useLocation();
  const [data, setData] = useState<PaymentOrderDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // URL ?tid=... 읽기
  const tid = useMemo(() => {
    const sp = new URLSearchParams(location.search);
    return sp.get("tid") || "";
  }, [location.search]);

  useEffect(() => {
    if (!tid) return;
    (async () => {
      try {
        setLoading(true);
        const d = await getPaymentOrderDetail(tid); // GET /payment/order/?tid=...
        setData(d);
      } catch (e: any) {
        setError(e?.message || "조회 실패");
      } finally {
        setLoading(false);
      }
    })();
  }, [tid]);

  return (
    <div style={{ maxWidth: 720, margin: "24px auto", padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
        결제 내역
      </h1>

      {!tid && (
        <div style={{ fontSize: 14, color: "#666" }}>
          tid가 없습니다. 승인 페이지에서 버튼으로 들어오거나 URL에 tid를
          넣어주세요.
        </div>
      )}
      {loading && <div style={{ fontSize: 14 }}>불러오는 중…</div>}
      {error && (
        <div
          style={{
            background: "#fee2e2",
            color: "#991b1b",
            padding: 12,
            borderRadius: 8,
            marginTop: 12,
          }}
        >
          {error}
        </div>
      )}

      {data && (
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 16,
            marginTop: 16,
          }}
        >
          <Field label="상품 이름" value={data.item_name ?? "-"} />
          <Field
            label="결제 금액"
            value={
              typeof data.amount === "number"
                ? formatKRW(data.amount)
                : data.amount_total
                  ? formatKRW(Number(data.amount_total))
                  : data.amount
                    ? JSON.stringify(data.amount)
                    : "-"
            }
          />
          <Field label="결제 수단" value={data.payment_method_type ?? "-"} />
          <Field
            label="결제 승인 시간"
            value={
              data.approved_at
                ? new Date(data.approved_at).toLocaleString("ko-KR")
                : "-"
            }
          />
          <Field label="TID" value={data.tid ?? tid} />
        </div>
      )}
    </div>
  );
}
