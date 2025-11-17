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
      console.log("Global notification WebSocket connection established");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.message) {
          alert(data.message);
        }
      } catch (e) {
        console.error("Error parsing notification message:", e);
      }
    };

    ws.onclose = (event) => {
      console.log("Global notification WebSocket connection closed:", event);
    };

    ws.onerror = (e) => {
      console.error("Global notification WebSocket error:", e);
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
