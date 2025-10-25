import { useMemo, useState } from "react";
import {
  getOrderDetailByTid,
  type OrderDetailResponse,
} from "../../apis/order"; // 경로는 네 프로젝트 구조에 맞춰 조정

function formatAmount(n: number | null) {
  if (typeof n !== "number") return "-";
  return `${n.toLocaleString("ko-KR")}원`;
}
function formatApprovedAt(iso: string | null) {
  if (!iso) return "-";
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(d);
  } catch {
    return iso;
  }
}

export default function Order() {
  const [tid, setTid] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string>("");
  const [detail, setDetail] = useState<OrderDetailResponse | null>(null);

  const disabled = useMemo(
    () => loading || tid.trim().length === 0,
    [loading, tid],
  );

  async function handleFetch() {
    setErr("");
    setDetail(null);
    const cleanTid = tid.trim();
    if (!cleanTid) {
      setErr("TID를 입력해주세요.");
      return;
    }
    setLoading(true);
    try {
      const data = await getOrderDetailByTid(cleanTid);
      if (!data) {
        setErr("조회 결과가 없습니다.");
        return;
      }
      setDetail(data);
    } catch (e: any) {
      setErr(e?.message ?? "조회 실패");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>카카오페이 결제 내역</h1>
      <p style={styles.subtitle}>
        TID를 입력하고 주문 조회 API에서 상세를 가져옵니다.
      </p>

      <div style={styles.controls}>
        <input
          value={tid}
          onChange={(e) => setTid(e.target.value)}
          placeholder="예) T1234567890123456789"
          style={styles.input}
        />
        <button
          onClick={handleFetch}
          disabled={disabled}
          style={disabled ? styles.buttonDisabled : styles.button}
        >
          {loading ? "조회 중..." : "조회"}
        </button>
      </div>

      {err && <div style={styles.error}>{err}</div>}

      {detail && (
        <section style={styles.card}>
          <Row label="상품 이름" value={detail.item_name ?? "-"} />
          <Row label="결제 금액" value={formatAmount(detail.amount)} />
          <Row label="결제 수단" value={detail.payment_method_type ?? "-"} />
          <Row label="승인 시간" value={formatApprovedAt(detail.approved_at)} />

          <details style={{ marginTop: 12 }}>
            <summary>원문 JSON 보기</summary>
            <pre style={styles.raw}>
              {JSON.stringify(detail.raw ?? detail, null, 2)}
            </pre>
          </details>
        </section>
      )}
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.row}>
      <div style={styles.rowLabel}>{label}</div>
      <div style={styles.rowValue}>{value}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 24,
    maxWidth: 760,
    margin: "0 auto",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  title: { marginBottom: 8 },
  subtitle: { color: "#6b7280", marginBottom: 16 },
  controls: { display: "flex", gap: 8, marginBottom: 16 },
  input: {
    flex: 1,
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: 8,
  },
  button: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #111827",
    background: "#111827",
    color: "#fff",
    cursor: "pointer",
  },
  buttonDisabled: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #9ca3af",
    background: "#9ca3af",
    color: "#fff",
    cursor: "not-allowed",
  },
  error: { color: "#b91c1c", marginBottom: 12 },
  card: { border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 },
  row: { display: "flex", gap: 12, alignItems: "center", marginBottom: 12 },
  rowLabel: { width: 96, color: "#374151" },
  rowValue: { fontWeight: 600, color: "#111827" },
  raw: {
    whiteSpace: "pre-wrap",
    background: "#f9fafb",
    border: "1px dashed #e5e7eb",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
};
