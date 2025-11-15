import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  //TODO: 글로벌 알림 useEffect 구현
  useEffect(() => {
    const wsUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(
      /^http/,
      "ws",
    );
    const ws = new WebSocket(`${wsUrl}/ws/notifications/`);

    ws.onopen = () => {
      console.log("Notification WebSocket connection established");
    };

    ws.onmessage = (event) => {
      try {
        const notificationData = JSON.parse(event.data);
        console.log("수신된 알림:", notificationData);
        alert(notificationData.message);
      } catch (e) {
        console.error("알림 메시지 처리 중 오류 발생:", e);
      }
    };
    ws.onclose = (event) => {
      console.log("Notification WebSocket connection closed:", event);
    };
    ws.onerror = (e) => {
      console.error("Notification WebSocket error:", e);
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
