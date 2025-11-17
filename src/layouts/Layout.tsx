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
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      try {
        const messageData = JSON.parse(event.data);
        alert(messageData.message);
      } catch (e) {
        console.error("메시지 처리 중 오류 발생:", e);
      }
    };

    ws.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    ws.onerror = (e) => {
      console.error("WebSocket error:", e);
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
