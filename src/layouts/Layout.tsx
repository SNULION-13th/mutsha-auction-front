import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    const wsUrl = `${import.meta.env.VITE_API_BASE_URL.replace(
      "http",
      "ws"
    )}/ws/notifications/`;
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("Connected to notifications socket");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      alert(data.message);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Disconnected from notifications socket");
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
