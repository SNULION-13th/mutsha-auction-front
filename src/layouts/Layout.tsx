import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    // WebSocket URL 생성
    const wsUrl = (import.meta.env.VITE_API_BASE_URL || "http://localhost:8000").replace(
      /^https?/,
      (match: string) => match === "https" ? "wss" : "ws",
    );
    const ws = new WebSocket(`${wsUrl}/ws/notifications/`);

    ws.onopen = () => {
      console.log("글로벌 알림 WebSocket 연결 성공");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.message) {
          alert(data.message);
        }
      } catch (e) {
        console.error("알림 메시지 처리 중 오류:", e);
      }
    };

    ws.onclose = () => {
      console.log("글로벌 알림 WebSocket 연결 종료");
    };

    ws.onerror = (error) => {
      console.error("글로벌 알림 WebSocket 에러:", error);
    };

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
