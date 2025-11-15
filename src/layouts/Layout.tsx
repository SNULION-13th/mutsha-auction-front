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
        console.log("Parsed notification data:", notificationData);
        if (notificationData.title) {
          alert(
            `새 경매가 등록되었습니다: ${notificationData.title}, 시작가 ${notificationData.current_price}`,
          );
        } else {
          console.log(
            "Notification data is missing 'message' property:",
            notificationData,
          );
        }
      } catch (error) {
        console.error("Error parsing notification data:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error observed:", error);
    };

    ws.onclose = (event) => {
      console.log("Notification WebSocket connection closed:", event);
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
