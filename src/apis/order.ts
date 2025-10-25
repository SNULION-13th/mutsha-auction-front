import { isAxiosError } from "axios";
import { api } from "./axios";

// --- 주문 조회 타입 ---
export type OrderDetailResponse = {
  tid: string;
  item_name: string | null;
  amount: number | null; // amount.total
  payment_method_type: string | null; // e.g. "CARD" | "MONEY" ...
  approved_at: string | null; // ISO string
  raw?: unknown; // 필요 시 원문 확인용
};

// --- 주문 조회 호출: POST /api/order/detail/ ---
export async function getOrderDetailByTid(
  tid: string,
): Promise<OrderDetailResponse | null> {
  try {
    const res = await api.post<OrderDetailResponse>("/order/detail/", { tid });
    if (res.status === 200) return res.data;
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "getOrderDetailByTid error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("getOrderDetailByTid unknown error:", e);
    }
    return null;
  }
}
