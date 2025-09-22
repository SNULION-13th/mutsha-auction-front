import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MODALS, useModal } from "../hooks/useModal";
import LoginModal from "../components/Modal/LoginModal";
import ProfileSettingModal from "../components/Modal/ProfileSettingModal";

import {
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
} from "../assets/image";
import { useRef, useState, useEffect } from "react";
import ProfileImageModal from "../components/Modal/ProfileImageModal";

export default function Layout() {
  const { openModal, open, close } = useModal();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(Profile1);
  const [nickname, setNickname] = useState("닉네임");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    const userProfile = localStorage.getItem("userProfile");

    if (loginStatus === "true" && userProfile) {
      try {
        const profile = JSON.parse(userProfile) as {
          profilepic_id?: number | null;
          nickname?: string | null;
          remaining_points?: number;
        };
        setIsLoggedIn(true);
        setNickname(profile.nickname ?? "닉네임");
        setPoints(profile.remaining_points ?? 0);

        if (profile.profilepic_id) {
          const profileImages = [
            Profile1,
            Profile2,
            Profile3,
            Profile4,
            Profile5,
            Profile6,
          ];
          setProfileImage(
            profileImages[(profile.profilepic_id - 1) as number] ?? Profile1,
          );
        }
      } catch {}
    }
  }, []);

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileBtnRef = useRef<HTMLDivElement | null>(null);

  const openCharge = () => open(MODALS.POINT_CHARGE);
  const closeCharge = () => close();
  const handleCharge = (amount: number) => {
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
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userProfile");
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
    </div>
  );
}
