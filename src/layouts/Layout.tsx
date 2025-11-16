import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  // 글로벌 알림 WebSocket 연결
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "";

    if (!baseUrl) {
      console.warn(
        "[Notification WS] VITE_API_BASE_URL 이 설정되어 있지 않습니다.",
      );
      return;
    }

    // http / https 로 시작하는 부분을 ws / wss 로 변경
    const wsUrl = baseUrl.replace(/^http/, "ws");
    const fullUrl = `${wsUrl}/ws/notifications/`;

    console.log("[Notification WS] connecting to:", fullUrl);

    const ws = new WebSocket(fullUrl);

    ws.onopen = () => {
      console.log("[Notification WS] connection established");
    };

    ws.onmessage = (event) => {
      console.log("[Notification WS] raw message:", event.data);
      try {
        const data = JSON.parse(event.data);

        if (data && typeof data.message === "string") {
          alert(data.message);
        } else {
          console.warn("[Notification WS] Unexpected message format:", data);
          alert("새로운 경매가 등록되었습니다!");
        }
      } catch (error) {
        console.error("[Notification WS] Failed to parse message:", error);
      }
    };

    ws.onclose = (event) => {
      console.log("[Notification WS] connection closed:", event);
    };

    ws.onerror = (event) => {
      console.error("[Notification WS] error:", event);
    };

    // Layout 이 언마운트될 때 WebSocket 정리
    return () => {
      console.log("[Notification WS] closing connection");
      // React StrictMode 개발 모드에서 effect가 두 번 실행되면서
      // 이미 닫힌 소켓에 close()를 다시 호출하는 경고를 방지
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close();
      }
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
