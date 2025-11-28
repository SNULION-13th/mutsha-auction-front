import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
