import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function HistoryLayout() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
