import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  //TODO: 글로벌 알림 useEffect 구현

  useEffect(() => {
    const wsUrl = import.meta.env.VITE_API_BASE_URL.replace(/^http/, "ws");
    const notificationWs = new WebSocket(`${wsUrl}/ws/notifications/`);

    notificationWs.onopen = () => {
      console.log("🔔 글로벌 알림 WebSocket 연결 성공");
    };

    notificationWs.onclose = () => {
      console.log("🔔 글로벌 알림 WebSocket 연결 종료");
    };

    notificationWs.onerror = (error) => {
      console.error("🔔 글로벌 알림 WebSocket 에러:", error);
    };

    notificationWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("🔔 알림 수신:", data);

      if (data.message) {
        alert(data.message);
      }
    };

    return () => {
      notificationWs.close();
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
