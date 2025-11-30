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
    <header className="w-full h-16 md:h-22 fixed flex justify-center bg-bg-white mx-auto z-50 shadow-lg">
      <div className="w-full max-w-[1680px] flex justify-between items-center px-4 md:px-8 pc:px-17.5 py-3 md:py-5">
        <Link to="/" className="cursor-pointer flex gap-2 md:gap-4.5 items-center">
          <img src={Logo} className="w-7 h-7 md:w-9 md:h-9" />
          <div className="text-3xl text-brand-primary font-bold max-pc:hidden">
            {t("header.title")}
          </div>
        </Link>
        
        <div className="flex gap-2 md:gap-6 lg:gap-10 items-center">
          <Link to="/auction" className="cursor-pointer">
            <div className="text-xs md:text-lg pc:text-xl font-bold text-scale-500 whitespace-nowrap">
              {t("header.auction")}
            </div>
          </Link>
          <Link to="/create" className="cursor-pointer">
            <div className="text-xs md:text-lg pc:text-xl font-bold text-scale-500 whitespace-nowrap">
              {t("header.auction.register")}
            </div>
          </Link>
          <Link to="/history" className="cursor-pointer">
            <div className="text-xs md:text-lg pc:text-xl font-bold text-scale-500 whitespace-nowrap">
              {t("header.auction.history")}
            </div>
          </Link>
          
          <div className="scale-75 md:scale-100 flex items-center">
             <LanguageSwitcher />
          </div>

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