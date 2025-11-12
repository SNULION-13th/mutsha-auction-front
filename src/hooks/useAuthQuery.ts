// hooks/useAuthQuery.ts

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserInfo, signOut, updateUserProfile } from "../apis/api";

/**
 * 유저 프로필 상태를 관리하는 쿼리 키
 * 이 키들로 상태를 식별하고 접근합니다.
 */
export const userQueryKey = ["user", "profile"] as const;

/**
 * 유저 프로필 데이터를 서버로부터 가져오고 관리하는 쿼리 훅
 */
export function useUserProfile(enabled: boolean = true) {
  return useQuery({
    queryKey: userQueryKey,

    // 유저 프로필 데이터를 서버로부터 가져오는 함수
    queryFn: getUserInfo,
    enabled, // 쿼리 활성화 여부
    staleTime: 5 * 60 * 1000, // 5분
    retry: false, // 실패 시 재시도 하지 않음
  });
}

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // 서버에 유저 프로필 업데이트를 요청하고, 서버 상태를 갱신(mutate)하는 함수
    mutationFn: async (data: { nickname: string; profilepicId: number }) => {
      const response = await updateUserProfile(
        data.nickname,
        data.profilepicId,
      );

      return response;
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.setQueryData(userQueryKey, data);
      }
    },
    onError: (error) => {
      console.error("updateUserProfile error:", error);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    // 뮤테이션이 성공 또는 실패 여부와 상관없이 실행
    onSettled: async () => {
      console.log("logout settled");
      queryClient.setQueryData(userQueryKey, null);
    },
  });
};
