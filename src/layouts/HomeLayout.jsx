import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
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
