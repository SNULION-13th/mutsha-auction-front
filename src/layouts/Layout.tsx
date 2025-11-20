import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  // -----------------------------
  // 🔔 글로벌 알림 WebSocket 연결
  // -----------------------------
  useEffect(() => {
    // API URL → WebSocket URL로 변환
    // http://localhost:8000 → ws://localhost:8000
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const wsUrl = baseUrl.replace("http", "ws") + "/ws/notifications/";

    // WebSocket 연결
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("[WebSocket Connected] 글로벌 알림 연결됨");
    };

    ws.onclose = () => {
      console.log("[WebSocket Closed] 글로벌 알림 연결 종료");
    };

    ws.onerror = (err) => {
      console.error("[WebSocket Error]", err);
    };

    // 서버에서 메시지 받은 경우
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data?.message) {
          alert(data.message); // 🔔 팝업 알림
        }
      } catch (e) {
        console.error("WebSocket 메시지 파싱 오류:", e);
      }
    };

    // Layout이 언마운트되면 WebSocket 닫기
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="w-full bg-bg-default">
      <Header />
      <main className="min-h-screen pt-22">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
