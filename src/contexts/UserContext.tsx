import {
  Profile1,
  Profile6,
  Profile5,
  Profile2,
  Profile3,
  Profile4,
} from "@/assets/image";
import { UserProfile, signOut, updateUserProfile } from "../apis/api";
import { createContext, useState, useContext, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useUpdateUserProfile,
  useLogout,
  useUserProfile,
  userQueryKey,
} from "@/hooks/useAuthQuery";

//유저 정보
type UserInfo = {
  profileImage: string;
  nickname: string;
  points: number;
} | null;

//인증 및 유저 정보 관리 메서드
type AuthMethod = {
  login: (profile: UserProfile) => void;
  logout: () => Promise<void>;
  updateProfile: (nickname: string, profilepicId: number) => void;
};

type UserContextType = {
  user: UserInfo;
} & AuthMethod;

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: userProfile } = useUserProfile();
  const queryClient = useQueryClient();
  const { mutateAsync: updateUserProfile } = useUpdateUserProfile();
  const { mutateAsync: logoutMutation } = useLogout();

  const user = useMemo(() => {
    if (!userProfile) return null;
    return {
      profileImage: getProfileImageById(userProfile.profilepic_id),
      nickname: userProfile.nickname ?? "",
      points: userProfile.remaining_points,
    };
  }, [userProfile]);

  const login = (profile: UserProfile) => {
    // 로그인 시 유저 정보 데이터 캐싱
    queryClient.setQueryData(userQueryKey, profile);
  };

  const logout = async () => {
    await logoutMutation();
  };

  const updateProfile = async (nickname: string, profilepicId: number) => {
    await updateUserProfile({ nickname, profilepicId });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const PROFILE_IMAGES = [
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
];

function getProfileImageById(id: number | null | undefined): string {
  if (!id) return Profile1;
  return PROFILE_IMAGES[(id - 1) % PROFILE_IMAGES.length] ?? Profile1;
}
