import { Button } from "../../Button";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../../ui/dialog";
import ProfileImageModal from "../ProfileImageModal";
import { useUser } from "@/contexts/UserContext";
import { PROFILE_IMAGES } from "@/contexts/UserContext";
import { ProfileSettingSchema } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import NicknameField from "./components/NicknameField";
import ProfileImageField from "./components/ProfileImageField";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();

  // react-hook-form + zod 연결
  // resolver: zod의 유효성 검사 결과를 formState.errors로 자동 전달
  const form = useForm({
    resolver: zodResolver(ProfileSettingSchema),
    defaultValues: {
      nickname: user?.nickname || "", // 초기값: 현재 유저 닉네임
      profileImage: user?.profileImage || "", // 초기값: 현재 유저 프로필 이미지
    },
    mode: "onChange", // 입력할 때마다 유효성 검사 실행
  });

  //watch를 제거하면 이미지가 선택되어도 즉시 반영되지 않음
  const selectedProfileImage = form.watch("profileImage"); // 현재 값 감시

  // form 제출 시 실행
  const onSubmit = async (data: z.infer<typeof ProfileSettingSchema>) => {
    await updateProfile(
      data.nickname,
      PROFILE_IMAGES.indexOf(data.profileImage ?? "") + 1,
    );
    form.reset(data);
  };

  // 모달 열릴 때 form과 이미지 상태를 현재 유저 정보로 초기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      form.reset({
        nickname: user?.nickname ?? "",
        profileImage: user?.profileImage ?? "",
      });
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      {/* react-hook-form에서 handleSubmit(onSubmit)을 form onSubmit에 연결 */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogPortal />

          {/* 모달 트리거 (프로필 영역 클릭 시 열림) */}
          <DialogTrigger asChild>
            <div className="flex items-center gap-2">
              <img
                src={user?.profileImage}
                alt="profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="text-lg font-bold text-scale-600">
                {user?.nickname}
              </div>
            </div>
          </DialogTrigger>

          <DialogContent className="w-180">
            <div className="px-20 py-22.5 flex flex-col gap-20">
              <div className="text-4xl font-bold text-scale-600">
                프로필 설정
              </div>

              <div className="flex flex-col gap-12.5">
                {/* 프로필 이미지 선택 필드 */}
                <ProfileImageField />
                {/* 닉네임 입력 필드 */}
                <NicknameField />
                {/* 버튼: form 유효성 통과 시에만 활성화 */}
                <DialogClose asChild>
                  <Button
                    type="submit"
                    variant={form.formState.isValid ? "primary" : "disabled"}
                    disabled={!form.formState.isValid}
                    className="h-14"
                  >
                    {"멋시장 시작하기"}
                  </Button>
                </DialogClose>
              </div>
            </div>
          </DialogContent>
        </form>
      </FormProvider>
    </Dialog>
  );
}
