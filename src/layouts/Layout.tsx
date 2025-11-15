import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useRef } from "react";

export default function Layout() {
  const wsRef = useRef<WebSocket | null>(null);
  //TODO: 글로벌 알림 useEffect 구현
  useEffect(() => {
    if (wsRef.current) return;

    const wsUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(
      /^http/,
      "ws",
    );
    const ws = new WebSocket(`${wsUrl}/ws/notifications/`);

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };
    ws.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };
    ws.onerror = (e) => {
      console.error("WebSocket error:", e);
    };

    ws.onmessage = (event) => {
      try {
        const jsonData = JSON.parse(event.data);
        alert(`${jsonData}`);
      } catch (e) {
        console.error("메시지 처리 중 오류 발생:", e);
      }
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
