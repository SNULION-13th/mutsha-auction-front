import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function CreateLayout() {
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
