import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MODALS, useModal } from "../hooks/useModal";
import LoginModal from "../components/Modal/LoginModal";
import ProfileSettingModal from "../components/Modal/ProfileSettingModal";

import { Profile1 } from "../assets/image";
import { useRef, useState } from "react";
import ProfileImageModal from "../components/Modal/ProfileImageModal";
import PointChargeModal from "../components/Modal/PointChargeModal";

export default function Layout() {
  const { openModal, open, close } = useModal();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(Profile1);
  const [nickname, setNickname] = useState("닉네임");
  const [points, setPoints] = useState(0);

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileBtnRef = useRef(null);

  const openCharge = () => open(MODALS.POINT_CHARGE);
  const closeCharge = () => close();
  const handleCharge = (amount) => {
    setPoints((p) => p + amount);
    closeCharge();
  };

  return (
    <div className="w-full bg-bg-default">
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={() => open(MODALS.LOGIN)}
        onProfileClick={() => setShowProfileMenu((v) => !v)}
        profileBtnRef={profileBtnRef}
        showProfileMenu={showProfileMenu}
        nickname={nickname}
        imageSrc={profileImage}
        points={points}
        onOpenCharge={openCharge}
        onLogout={() => {
          setIsLoggedIn(false);
          setShowProfileMenu(false);
        }}
      />
      <main className="min-h-screen pt-22">
        <Outlet />
      </main>
      <Footer />

      {openModal === MODALS.LOGIN && (
        <LoginModal
          onLogin={() => {
            open(MODALS.PROFILE_SETTING);
          }}
          onClose={close}
        />
      )}
      {openModal === MODALS.PROFILE_SETTING && (
        <ProfileSettingModal
          imageSrc={profileImage}
          onEditImage={() => open(MODALS.PROFILE_IMAGE)}
          onSubmitSuccess={(newNickname) => {
            setNickname(newNickname);
            setIsLoggedIn(true);
            close();
          }}
          onClose={close}
        />
      )}
      {openModal === MODALS.PROFILE_IMAGE && (
        <ProfileImageModal
          current={profileImage}
          onSave={(img) => {
            setProfileImage(img);
            open(MODALS.PROFILE_SETTING);
          }}
          onClose={close}
        />
      )}
      {openModal === MODALS.POINT_CHARGE && (
        <PointChargeModal onClose={closeCharge} onCharge={handleCharge} />
      )}
    </div>
  );
}
