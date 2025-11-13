import { Button } from "../Button";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import ProfileImageModal from "./ProfileImageModal";
import { useUser } from "@/contexts/UserContext";
import { PROFILE_IMAGES } from "@/contexts/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const onlyAllowed = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;

const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "10자 이내로 입력해주세요.")
    .regex(onlyAllowed, "한글, 숫자, 영문자만 입력해주세요."),
  profileImage: z.string(),
});

type ProfileSettingFormValues = z.infer<typeof profileSettingSchema>;

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
    setValue,
  } = useForm<ProfileSettingFormValues>({
    resolver: zodResolver(profileSettingSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImage: user?.profileImage ?? "",
    },
  });

  const selectedProfileImage = watch("profileImage");

  const onSubmit = async (data: ProfileSettingFormValues) => {
    await updateProfile(
      data.nickname,
      PROFILE_IMAGES.indexOf(data.profileImage ?? "") + 1,
    );
  };

  // 모달 열릴 때 닉네임과 프로필 이미지 동기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      reset({
        nickname: user?.nickname ?? "",
        profileImage: user?.profileImage ?? "",
      });
    }
  };

  useEffect(() => {
    if (user) {
      reset({
        nickname: user.nickname ?? "",
        profileImage: user.profileImage ?? "",
      });
    }
  }, [user, reset]);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-20 py-22.5 flex flex-col gap-20">
            <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
            <div className="flex flex-col gap-12.5">
              <div className="mx-auto relative w-28 h-28">
                <img
                  src={selectedProfileImage}
                  className="w-28 h-28 rounded-full object-cover"
                />

                <ProfileImageModal
                  imageCandidates={PROFILE_IMAGES}
                  selectedProfileImage={selectedProfileImage ?? ""}
                  onSave={(selected) =>
                    setValue("profileImage", selected, { shouldValidate: true })
                  }
                />
              </div>
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
            </div>

            <DialogClose asChild>
              <Button
                type="submit"
                variant={isValid ? "primary" : "disabled"}
                disabled={!isValid}
                // onClick={handleSubmit}
                className="h-14"
              >
                {"멋시장 시작하기"}
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
