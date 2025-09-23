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
import ProfileModal from "@/components/Modal/ProfileModal";
import PointChargeModal from "@/components/Modal/PointChargeModal";
import { updateUserProfile, getUserInfo } from "@/apis/api";

export default function Layout() {
  const { openModal, open, close, isOpen } = useModal();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(Profile1);
  const [nickname, setNickname] = useState("닉네임");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    const userProfile = localStorage.getItem("userProfile");
    const isFirstLogin = localStorage.getItem("isFirstLogin");

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

        if (!profile.nickname || profile.nickname.trim() === "") {
          open(MODALS.PROFILE_SETTING);
        }

        // 페이지 로드 시마다 최신 사용자 정보 가져오기 (포인트 업데이트 등)
        const fetchLatestUserInfo = async () => {
          try {
            const latestUserInfo = await getUserInfo();
            if (latestUserInfo) {
              localStorage.setItem(
                "userProfile",
                JSON.stringify(latestUserInfo),
              );
              setNickname(latestUserInfo.nickname || "프로필 설정");
              setPoints(latestUserInfo.remaining_points ?? 0);

              if (latestUserInfo.profilepic_id) {
                const profileImages = [
                  Profile1,
                  Profile2,
                  Profile3,
                  Profile4,
                  Profile5,
                  Profile6,
                ];
                setProfileImage(
                  profileImages[(latestUserInfo.profilepic_id - 1) as number] ??
                    Profile1,
                );
              }
            }
          } catch (error) {
            console.error("사용자 정보 가져오기 실패:", error);
          }
        };
        fetchLatestUserInfo();
      } catch {}
    }
  }, [open]);

  const profileBtnRef = useRef<HTMLDivElement | null>(null);

  const openCharge = () => open(MODALS.POINT_CHARGE);
  const closeCharge = () => close();
  const handleCharge = async (amount: number) => {
    // 임시로 포인트 업데이트 (UI 반응성)
    setPoints((p) => p + amount);
    closeCharge();

    // 백엔드에서 최신 포인트 정보 가져와서 업데이트
    try {
      const latestUserInfo = await getUserInfo();
      if (latestUserInfo) {
        localStorage.setItem("userProfile", JSON.stringify(latestUserInfo));
        setPoints(latestUserInfo.remaining_points ?? 0);
      }
    } catch (error) {
      console.error("포인트 충전 후 사용자 정보 가져오기 실패:", error);
    }
  };

  return (
    <div className="w-full bg-bg-default">
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={() => open(MODALS.LOGIN)}
        onProfileClick={() => open(MODALS.PROFILE)}
        profileBtnRef={profileBtnRef}
        showProfileMenu={false}
        nickname={nickname}
        imageSrc={profileImage}
        points={points}
        onOpenCharge={openCharge}
        onLogout={() => {
          setIsLoggedIn(false);
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userProfile");
          localStorage.removeItem("isFirstLogin");
          localStorage.removeItem("access_token");
          close();
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
          onSubmitSuccess={async (newNickname) => {
            try {
              // 현재 선택된 프로필 이미지 ID 찾기
              const profileImages = [
                Profile1,
                Profile2,
                Profile3,
                Profile4,
                Profile5,
                Profile6,
              ];
              const profilepicId = profileImages.indexOf(profileImage) + 1;

              // 백엔드에 프로필 업데이트 요청
              const updatedProfile = await updateUserProfile(
                newNickname,
                profilepicId,
              );

              if (updatedProfile) {
                // 성공 시 상태 업데이트
                setNickname(newNickname);
                setIsLoggedIn(true);

                // localStorage 업데이트
                const currentProfile = JSON.parse(
                  localStorage.getItem("userProfile") || "{}",
                );
                const newProfile = {
                  ...currentProfile,
                  nickname: newNickname,
                  profilepic_id: profilepicId,
                };
                localStorage.setItem("userProfile", JSON.stringify(newProfile));

                // 모달 닫기
                close();
              } else {
                console.error("프로필 업데이트 실패");
              }
            } catch (error) {
              console.error("프로필 업데이트 중 오류:", error);
            }
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
      {openModal === MODALS.PROFILE && (
        <ProfileModal
          onClose={close}
          anchorRef={profileBtnRef}
          nickname={nickname}
          imageSrc={profileImage}
          points={points}
          onOpenCharge={openCharge}
          onLogout={() => {
            setIsLoggedIn(false);
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userProfile");
            localStorage.removeItem("isFirstLogin");
            localStorage.removeItem("access_token");
            close();
          }}
        />
      )}
      {openModal === MODALS.POINT_CHARGE && (
        <PointChargeModal onClose={close} onCharge={handleCharge} />
      )}
    </div>
  );
}
