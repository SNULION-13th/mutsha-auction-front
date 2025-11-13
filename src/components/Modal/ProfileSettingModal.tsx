import { Button } from "../Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import ProfileImageModal from "./ProfileImageModal";
import { PROFILE_IMAGES, useUser } from "@/contexts/UserContext";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileSettingSchema,
  ProfileSettingFormData,
} from "./profileSettingSchema";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();

  const methods = useForm<ProfileSettingFormData>({
    resolver: zodResolver(profileSettingSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImage: user?.profileImage ?? "",
    },
  });

  const { handleSubmit, formState, reset, watch, setValue } = methods;
  const selectedProfileImage = watch("profileImage");

  // 모달 열릴 때 닉네임과 프로필 이미지 동기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      reset({
        nickname: user?.nickname ?? "",
        profileImage: user?.profileImage ?? "",
      });
    }
  };

  const onSubmit = async (data: ProfileSettingFormData) => {
    const profileImageId = PROFILE_IMAGES.indexOf(data.profileImage) + 1;
    await updateProfile(data.nickname, profileImageId);
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
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-20 py-22.5 flex flex-col gap-20"
          >
            <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
            <div className="flex flex-col gap-12.5">
              <div className="mx-auto relative w-28 h-28">
                <img
                  src={selectedProfileImage}
                  className="w-28 h-28 rounded-full object-cover"
                  alt="profile"
                />

                <ProfileImageModal
                  imageCandidates={PROFILE_IMAGES}
                  selectedProfileImage={selectedProfileImage ?? ""}
                  onSave={(selected) => setValue("profileImage", selected)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  {...methods.register("nickname")}
                  placeholder="닉네임(최대 10자)"
                  className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
                />
                {formState.errors.nickname && (
                  <p className="text-sm text-red-500">
                    {formState.errors.nickname.message}
                  </p>
                )}
              </div>
              <DialogClose asChild>
                <Button
                  type="submit"
                  variant={formState.isValid ? "primary" : "disabled"}
                  disabled={!formState.isValid}
                  className="h-14"
                >
                  {"멋시장 시작하기"}
                </Button>
              </DialogClose>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
