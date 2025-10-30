import { Link } from "react-router-dom";
import { Logo } from "../assets/image";
import { Button } from "../components/Button";
import { RefObject } from "react";
import { MODALS, useModal } from "@/hooks/useModal";

type Props = {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onProfileClick?: () => void;
  profileBtnRef?: RefObject<HTMLDivElement | null>;
  showProfileMenu?: boolean;
  nickname?: string;
  imageSrc?: string;
  points?: number;
  onOpenCharge?: () => void;
  onLogout?: () => void;
};

export default function Header({
  isLoggedIn,
  onLoginClick,
  onProfileClick,
  profileBtnRef,
  showProfileMenu,
  nickname,
  imageSrc,
  points,
  onOpenCharge,
  onLogout,
}: Props) {
  const { open, isOpen } = useModal();
  const handleOpenProfile = () => {
    onProfileClick?.();
    open(MODALS.PROFILE);
  };

  return (
    <header className="w-full fixed flex justify-center bg-bg-white mx-auto z-50">
      <div className="w-full max-w-[1680px] flex justify-between px-17.5 py-5">
        <Link to="/" className="cursor-pointer flex gap-4.5 items-center">
          <img src={Logo} className="w-9 h-9" />
          <div className="text-3xl text-brand-primary font-bold">
            멋쟁이 시장처럼
          </div>
        </Link>
        <div className="flex gap-10 items-center">
          <Link to="/auction" className="cursor-pointer">
            <div className="text-xl text-scale-500">경매 입찰</div>
          </Link>
          <Link to="/create" className="cursor-pointer">
            <div className="text-xl text-scale-500">경매 등록</div>
          </Link>
          <Link to="/history" className="cursor-pointer">
            <div className="text-xl text-scale-500">내 경매</div>
          </Link>
          {isLoggedIn && (
            <Link to="/payment/history" className="cursor-pointer">
              <div className="text-xl text-scale-500">결제 내역</div>
            </Link>
          )}
          {isLoggedIn ? (
            <div
              ref={profileBtnRef as RefObject<HTMLDivElement>}
              className="flex items-center gap-3 text-xl text-scale-500 cursor-pointer select-none"
              onClick={handleOpenProfile}
              role="button"
              aria-haspopup="dialog"
              aria-expanded={isOpen(MODALS.PROFILE)}
              title={nickname ? `${nickname} 프로필 열기` : "프로필 열기"}
            >
              프로필
            </div>
          ) : (
            <Button
              variant="gray"
              className="w-27"
              onButtonClick={onLoginClick}
            >
              로그인
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
