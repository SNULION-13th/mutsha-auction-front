import { Link } from "react-router-dom";
import { Logo } from "../assets/image";

import LoginModal from "@/components/Modal/LoginModal";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/Button";
import ProfileDropdown from "@/components/Modal/ProfileDropdown";

export default function Header() {
  const { user, logout } = useUser();

  return (
    <header className="w-full h-22 fixed flex justify-center bg-bg-white mx-auto z-50">
      <div className="w-full max-w-[1680px] flex justify-between px-17.5 py-5">
        <Link to="/" className="cursor-pointer flex gap-4.5 items-center">
          <img src={Logo} className="w-9 h-9" />
          <div className="text-3xl text-brand-primary font-bold">
            {"멋쟁이 시장처럼"}
          </div>
        </Link>
        <div className="flex gap-10 items-center">
          <Link to="/auction" className="cursor-pointer">
            <div className="text-xl text-scale-500">{"경매 입찰"}</div>
          </Link>
          <Link to="/create" className="cursor-pointer">
            <div className="text-xl text-scale-500">{"경매 등록"}</div>
          </Link>
          <Link to="/history" className="cursor-pointer">
            <div className="text-xl text-scale-500">{"내 경매"}</div>
          </Link>
          {user ? <ProfileDropdown /> : <LoginModal />}
        </div>
      </div>
    </header>
  );
}
