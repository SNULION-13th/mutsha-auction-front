import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    const wsUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(
      /^http/,
      "ws",
    );
    const ws = new WebSocket(`${wsUrl}/ws/notifications/`);

    ws.onopen = () => {
      console.log("글로벌 알림 WebSocket 연결 성공");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.message) {
          alert(data.message); // 팝업으로 띄움
        }
      } catch (e) {
        console.error("알림 메시지 처리 중 오류 발생:", e);
      }
    };

    ws.onclose = (event) => {
      console.log("글로벌 알림 WebSocket 연결 종료:", event);
    };

    ws.onerror = (e) => {
      console.error("글로벌 알림 WebSocket 오류:", e);
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
