import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  //글로벌 알림 useEffect 구현
  useEffect(() => {
    const ws = new WebSocket(`ws://${window.location.host}/ws/notifications/`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      alert(`새 알림: ${data.message}`);
    };
    ws.onopen = () => {
      console.log("WebSocket 연결이 열렸습니다.");
    };
    ws.onerror = (error) => {
      console.error("WebSocket 오류:", error);
    };
    ws.onclose = () => {
      console.log("WebSocket 연결이 닫혔습니다.");
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
