import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MODALS, useModal } from "../hooks/useModal";
import LoginModal from "../components/Modal/LoginModal";
import ProfileSettingModal from "../components/Modal/ProfileSettingModal";

import { Profile1 } from "../assets/image";
import { useRef, useState, useEffect } from "react";
import ProfileImageModal from "../components/Modal/ProfileImageModal";
import PointChargeModal from "../components/Modal/PointChargeModal";

export default function Layout() {
  const { openModal, open, close } = useModal();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(Profile1);
  const [nickname, setNickname] = useState("닉네임");
  const [points, setPoints] = useState(0);

  // 로컬 스토리지에서 로그인 상태 확인
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("isLoggedIn");
      const userProfile = localStorage.getItem("userProfile");

      if (loginStatus === "true" && userProfile) {
        const profile = JSON.parse(userProfile);
        setIsLoggedIn(true);
        setNickname(profile.nickname || "닉네임");
        setPoints(profile.remaining_points || 0);

        // 프로필 이미지 설정 (profilepic_id에 따라)
        if (profile.profilepic_id) {
          const profileImages = [
            Profile1,
            Profile1,
            Profile1,
            Profile1,
            Profile1,
            Profile1,
          ]; // 실제 이미지로 교체 필요
          setProfileImage(profileImages[profile.profilepic_id - 1] || Profile1);
        }
      }
    };

    checkLoginStatus();
  }, []);

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
          // 로컬 스토리지 정리
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
      {openModal === MODALS.POINT_CHARGE && (
        <PointChargeModal onClose={closeCharge} onCharge={handleCharge} />
      )}
    </div>
  );
}
