import { Button } from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSettingSchema } from "./schema";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProfileImageModal from "@/components/Modal/ProfileImageModal";
import { useUser } from "@/contexts/UserContext";
import { PROFILE_IMAGES } from "@/contexts/UserContext";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const methods = useForm({
    resolver: zodResolver(profileSettingSchema),
    mode: "onTouched",
    defaultValues: {
      nickname: user?.nickname ?? "",
      image: user?.profileImage ?? "",
    },
  });

  const selectedProfileImage = methods.watch("image");

  const onSubmit = async (data: { nickname: string; image: string }) => {
    await updateProfile(
      data.nickname,
      PROFILE_IMAGES.indexOf(data.image ?? "") + 1,
    );
  };

  // 모달 열릴 때 닉네임과 프로필 이미지 동기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      methods.reset({
        nickname: user?.nickname ?? "",
        image: user?.profileImage ?? "",
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
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="px-20 py-22.5 flex flex-col gap-20"
          >
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
                    methods.setValue("image", selected, {
                      shouldValidate: true,
                    })
                  }
                />
              </div>

              <div className="flex flex-col gap-3">
                <input
                  {...methods.register("nickname")}
                  placeholder="닉네임(최대 10자)"
                  className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
                />
                {methods.formState.errors.nickname && (
                  <p className="text-sm text-red-500">
                    {methods.formState.errors.nickname.message}
                  </p>
                )}
              </div>

              <DialogClose asChild>
                <Button
                  type="submit"
                  variant={methods.formState.isValid ? "primary" : "disabled"}
                  disabled={!methods.formState.isValid}
                  className="h-14"
                >
                  멋시장 시작하기
                </Button>
              </DialogClose>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
