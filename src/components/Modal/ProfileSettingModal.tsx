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
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSettingSchema, ProfileSettingFormData } from "./schema";

function getProfileImageById(id: number): string {
  if (!id || id < 1 || id > PROFILE_IMAGES.length) return PROFILE_IMAGES[0];
  return PROFILE_IMAGES[id - 1] ?? PROFILE_IMAGES[0];
}

function getProfileIdByImage(image: string | null | undefined): number {
  if (!image) return 1;
  const index = PROFILE_IMAGES.indexOf(image);
  return index === -1 ? 1 : index + 1;
}

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();

  const methods = useForm<ProfileSettingFormData>({
    resolver: zodResolver(profileSettingSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImageId: getProfileIdByImage(user?.profileImage),
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = methods;

  const onSubmit = (data: ProfileSettingFormData) => {
    updateProfile(data.nickname, data.profileImageId);
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      reset({
        nickname: user?.nickname ?? "",
        profileImageId: getProfileIdByImage(user?.profileImage),
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
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-20 py-22.5 flex flex-col gap-20">
              <div className="text-4xl font-bold text-scale-600">
                프로필 설정
              </div>
              <div className="flex flex-col gap-12.5">
                <Controller
                  name="profileImageId"
                  control={control}
                  render={({ field }) => (
                    <div className="mx-auto relative w-28 h-28">
                      <img
                        src={getProfileImageById(field.value)}
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <ProfileImageModal
                        imageCandidates={PROFILE_IMAGES}
                        selectedProfileImage={getProfileImageById(field.value)}
                        onSave={field.onChange}
                      />
                    </div>
                  )}
                />
                <div className="flex flex-col gap-3">
                  <input
                    {...methods.register("nickname")}
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
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
