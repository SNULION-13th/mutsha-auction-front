import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="w-full bg-bg-default">
      <Header />
      <main className="min-h-screen pt-22">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
