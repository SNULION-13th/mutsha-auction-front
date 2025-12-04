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
    <header className="w-full h-16 sm:h-20 lg:h-22 fixed flex justify-center bg-bg-white mx-auto z-50 shadow-lg">
      <div className="w-full max-w-[1680px] flex justify-between px-4 sm:px-6 md:px-8 lg:px-17.5 py-3 sm:py-4 lg:py-5">
        <Link
          to="/"
          className="cursor-pointer flex gap-2 sm:gap-3 lg:gap-4.5 items-center"
        >
          <img src={Logo} className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
          <div className="text-xl sm:text-2xl lg:text-3xl text-brand-primary font-bold hidden sm:block">
            {t("header.title")}
          </div>
        </Link>
        <div className="flex gap-3 sm:gap-5 md:gap-7 lg:gap-10 items-center">
          <Link to="/auction" className="cursor-pointer">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-scale-500 whitespace-nowrap">
              {t("header.auction")}
            </div>
          </Link>
          <Link to="/create" className="cursor-pointer hidden sm:block">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-scale-500 whitespace-nowrap">
              {t("header.auction.register")}
            </div>
          </Link>
          <Link to="/history" className="cursor-pointer hidden md:block">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-scale-500 whitespace-nowrap">
              {t("header.auction.history")}
            </div>
          </Link>
          <LanguageSwitcher />
          {isLoggedIn ? <ProfileModal /> : <LoginModal />}
          <ProfileSettingModal
            isOpen={isProfileSettingModalOpen}
            onOpenChange={setIsProfileSettingModalOpen}
          />
        </div>
      </div>
    </header>
  );
}
