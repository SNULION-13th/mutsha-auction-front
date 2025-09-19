import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MODALS, useModal } from "../hooks/useModal";
import LoginModal from "../components/Modal/LoginModal";
import ProfileSettingModal from "../components/Modal/ProfileSettingModal";

import { Profile1 } from "../assets/image";
import { useState } from "react";
import ProfileImageModal from "../components/Modal/ProfileImageModal";

export default function HomeLayout() {
  const { openModal, open, close } = useModal();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(Profile1);

  return (
    <div className="w-full bg-bg-default">
      <Header isLoggedIn={isLoggedIn} onLoginClick={() => open(MODALS.LOGIN)} />
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
          onSubmitSuccess={() => {
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
    </div>
  );
}
