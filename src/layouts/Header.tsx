import { Link } from "react-router-dom";
import { Logo } from "../assets/image";

import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import LoginModal from "@/components/Modal/LoginModal";
import ProfileModal from "@/components/Modal/ProfileModal";
import { useUserInfo } from "@/contexts/UserInfoProvider";
import { useState } from "react";
import ProfileSettingModal from "@/components/Modal/ProfileSettingModal";

export default function Header() {
  const { t } = useTranslation();
  const { isLoggedIn, nickname } = useUserInfo();
  const [isProfileSettingModalOpen, setIsProfileSettingModalOpen] = useState(
    () => isLoggedIn && !nickname,
  );

  return (
    <header className="w-full h-16 md:h-18 lg:h-20 pc:h-22 fixed flex justify-center bg-bg-white mx-auto z-50 shadow-lg">
      <div className="w-full max-w-[1680px] flex justify-between items-center px-3 md:px-6 lg:px-12 pc:px-17.5 py-2 md:py-3 lg:py-4 pc:py-5">
        <Link to="/" className="cursor-pointer flex gap-1.5 md:gap-2.5 lg:gap-3.5 pc:gap-4.5 items-center shrink-0">
          <img src={Logo} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 pc:w-9 pc:h-9" />
          <div className="text-base md:text-xl lg:text-2xl pc:text-3xl text-brand-primary font-bold max-pc:hidden">
            {t("header.title")}
          </div>
        </Link>
        <div className="flex gap-2 md:gap-6 lg:gap-8 pc:gap-10 items-center min-w-0">
          <Link to="/auction" className="cursor-pointer shrink-0">
            <div className="text-sm md:text-base lg:text-lg pc:text-xl text-scale-500 whitespace-nowrap">
              {t("header.auction")}
            </div>
          </Link>
          <Link to="/create" className="cursor-pointer shrink-0">
            <div className="text-sm md:text-base lg:text-lg pc:text-xl text-scale-500 whitespace-nowrap">
              {t("header.auction.register")}
            </div>
          </Link>
          <Link to="/history" className="cursor-pointer shrink-0">
            <div className="text-sm md:text-base lg:text-lg pc:text-xl text-scale-500 whitespace-nowrap">
              {t("header.auction.history")}
            </div>
          </Link>
          <div className="shrink-0">
            <LanguageSwitcher />
          </div>
          <div className="shrink-0">
            {isLoggedIn ? <ProfileModal /> : <LoginModal />}
          </div>
          <ProfileSettingModal
            isOpen={isProfileSettingModalOpen}
            onOpenChange={setIsProfileSettingModalOpen}
          />
        </div>
      </div>
    </header>
  );
}
