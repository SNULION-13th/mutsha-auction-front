import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";
import { TransitionProvider } from "@/contexts/TransitionProvider";

export default function Layout() {
  return (
    <div className="w-full bg-bg-default">
      <Header />
      <TransitionProvider>
        <main className="min-h-screen pt-16 sm:pt-20 lg:pt-22">
          <ScrollToTop />
          <Outlet />
        </main>
      </TransitionProvider>
      <Footer />
    </div>
  );
}
