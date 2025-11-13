import { Button } from "../Button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import ProfileImageModal from "./ProfileImageModal";
import { useUser } from "@/contexts/UserContext";
import { PROFILE_IMAGES } from "@/contexts/UserContext";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSettingSchema, ProfileSettingFormData } from "./schemas";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
    watch,
  } = useForm<ProfileSettingFormData>({
    resolver: zodResolver(profileSettingSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImage: user?.profileImage ?? "",
    },
  });

  const selectedProfileImage = watch("profileImage");

  // 모달 열릴 때 폼 초기화
  useEffect(() => {
    if (open && user) {
      reset({
        nickname: user.nickname,
        profileImage: user.profileImage,
      });
    }
  }, [open, user, reset]);

  const onSubmit = async (data: ProfileSettingFormData) => {
    const profileImageId = PROFILE_IMAGES.indexOf(data.profileImage) + 1;
    await updateProfile(data.nickname, profileImageId);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal />
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
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
                  onSave={(selected) => setValue("profileImage", selected)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Controller
                  name="nickname"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="닉네임(최대 10자)"
                      className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
                    />
                  )}
                />
                {errors.nickname && (
                  <p className="text-sm text-red-500">
                    *{errors.nickname.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant={isValid ? "primary" : "disabled"}
                disabled={!isValid}
                className="h-14"
              >
                {"멋시장 시작하기"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
