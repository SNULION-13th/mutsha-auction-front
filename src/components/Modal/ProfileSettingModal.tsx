//ProfileSettingModal.tsx
import { Button } from "../Button";
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
import {
  profileSchema,
  ProfileFormValues,
} from "../Modal/ProfileSettingSchema";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImage: user?.profileImage ?? "",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    updateProfile(data.nickname, PROFILE_IMAGES.indexOf(data.profileImage) + 1);
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setValue("nickname", user?.nickname ?? "");
      setValue("profileImage", user?.profileImage ?? "");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-20 py-22.5 flex flex-col gap-20">
            <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
            <div className="flex flex-col gap-12.5">
              <div className="mx-auto relative w-28 h-28">
                <img
                  src={watch("profileImage")}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <ProfileImageModal
                  imageCandidates={PROFILE_IMAGES}
                  selectedProfileImage={watch("profileImage") ?? ""}
                  onSave={(selected) => setValue("profileImage", selected)}
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
                    {errors.nickname.message}
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
                  {"멋시장 시작하기"}
                </Button>
              </DialogClose>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
