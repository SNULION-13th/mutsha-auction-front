import { Button } from "../Button";
import { useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import ProfileImageModal from "./ProfileImageModal";
import { PROFILE_IMAGES, useUser } from "@/contexts/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileSettingSchema,
  ProfileSettingFormData,
} from "@/pages/Profile/schema";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    reset,
  } = useForm<ProfileSettingFormData>({
    resolver: zodResolver(profileSettingSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImageIndex: PROFILE_IMAGES.indexOf(user?.profileImage ?? "") || 0,
    },
  });

  const selectedProfileImageIndex = watch("profileImageIndex");
  const selectedProfileImage = PROFILE_IMAGES[selectedProfileImageIndex];

  // user 정보가 변경되면 폼 값 업데이트
  useEffect(() => {
    if (user) {
      reset({
        nickname: user.nickname,
        profileImageIndex: PROFILE_IMAGES.indexOf(user.profileImage ?? "") || 0,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: ProfileSettingFormData) => {
    await updateProfile(data.nickname, data.profileImageIndex + 1);
  };

  // 모달 열릴 때 폼 초기화
  const handleOpenChange = (open: boolean) => {
    if (open && user) {
      reset({
        nickname: user.nickname,
        profileImageIndex: PROFILE_IMAGES.indexOf(user.profileImage ?? "") || 0,
      });
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogPortal />
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-20 py-22.5 flex flex-col gap-20"
        >
          <div className="text-4xl font-bold text-scale-600">프로필 설정</div>

          <div className="flex flex-col gap-12.5">
            {/* 프로필 이미지 선택 */}
            <div className="mx-auto relative w-28 h-28">
              <img
                src={selectedProfileImage}
                className="w-28 h-28 rounded-full object-cover"
                alt="selected profile"
              />

              <ProfileImageModal
                imageCandidates={PROFILE_IMAGES}
                selectedProfileImage={selectedProfileImage}
                onSave={(selected) => {
                  const index = PROFILE_IMAGES.indexOf(selected);
                  setValue("profileImageIndex", index, {
                    shouldValidate: true,
                  });
                }}
              />
            </div>

            {/* 닉네임 입력 */}
            <div className="flex flex-col gap-3">
              <input
                {...register("nickname")}
                placeholder="닉네임(최대 10자)"
                className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
              />
              {errors.nickname && (
                <p className="text-sm text-red-500">
                  *{errors.nickname.message}
                </p>
              )}
            </div>

            <DialogClose asChild>
              <Button
                type="submit"
                variant={isValid ? "primary" : "disabled"}
                disabled={!isValid}
                className="h-14"
              >
                멋시장 시작하기
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
