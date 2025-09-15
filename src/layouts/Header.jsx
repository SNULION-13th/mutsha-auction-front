import { Link } from "react-router-dom";
import { Logo } from "../assets/image";
import { Button } from "../components/Button";

export default function Header() {
  return (
    <header className="w-full fixed flex justify-center bg-bg-white mx-auto">
      <div className="w-full max-w-[1680px] flex justify-between px-17.5 py-5">
        <Link to="/" className="cursor-pointer flex gap-4.5 items-center">
          <img src={Logo} className="w-9 h-9" />
          <div className="text-3xl text-brand-primary font-bold">
            멋쟁이 시장처럼
          </div>
        </Link>
        <div className="flex gap-10 items-center">
          <Link to="/auction" className="cursor-pointer">
            <div className="text-xl text-text-subtitle">경매 입찰</div>
          </Link>
          <Link to="/create" className="cursor-pointer">
            <div className="text-xl text-text-subtitle">경매 등록</div>
          </Link>
          <Link to="/history" className="cursor-pointer">
            <div className="text-xl text-text-subtitle">내 경매</div>
          </Link>
          <Button variant="gray" className="w-27">
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
