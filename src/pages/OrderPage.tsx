import React, { useState, useEffect } from "react";
import { getAllOrders } from "@/apis/api";
import { Order } from "@/apis/api";

export default function OrderPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await getAllOrders();
        if (res && Array.isArray(res)) setOrders(res);
      } catch (error) {
        console.error("주문 내역 조회 실패:", error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>🧾 주문 내역</h2>
      {orders.length === 0 ? (
        <p>주문 내역이 없습니다.</p>
      ) : (
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #ddd",
          }}
        >
          <thead style={{ backgroundColor: "#f5f5f5" }}>
            <tr>
              <th style={thStyle}>No.</th>
              <th style={thStyle}>상품명</th>
              <th style={thStyle}>가격</th>
              <th style={thStyle}>결제수단</th>
              <th style={thStyle}>승인일시</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>{idx + 1}</td>
                <td style={tdStyle}>{order.item_name}</td>
                <td style={tdStyle}>
                  {Number(order.price).toLocaleString()}원
                </td>
                <td style={tdStyle}>{order.payment_method_type}</td>
                <td style={tdStyle}>
                  {order.approved_at
                    ? new Date(order.approved_at).toLocaleString("ko-KR")
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "center",
  fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "center",
};
