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
import { useUser } from "@/contexts/UserContext";
import { PROFILE_IMAGES } from "@/contexts/UserContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const nicknameRegex =
  /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;

const profileFormSchema = z.object({
  nickname: z
    .string()
    .trim()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 최대 10자까지 가능합니다.")
    .regex(nicknameRegex, "한글, 숫자, 영문자만 사용할 수 있습니다."),
  profileImage: z
    .string()
    .refine(
      (value) => PROFILE_IMAGES.includes(value),
      "유효하지 않은 이미지입니다.",
    ),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImage: user?.profileImage ?? PROFILE_IMAGES[0],
    },
  });

  useEffect(() => {
    reset({
      nickname: user?.nickname ?? "",
      profileImage: user?.profileImage ?? PROFILE_IMAGES[0],
    });
  }, [user, reset]);

  const selectedProfileImage = watch("profileImage");

  const onSubmit = async (data: ProfileFormValues) => {
    const profileIndex = PROFILE_IMAGES.indexOf(data.profileImage) + 1;
    await updateProfile(data.nickname, profileIndex);
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      reset({
        nickname: user?.nickname ?? "",
        profileImage: user?.profileImage ?? PROFILE_IMAGES[0],
      });
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogPortal />
      <DialogTrigger asChild>
        <div className="flex items-center gap-2">
          <img
            src={selectedProfileImage}
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
          <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-12.5"
          >
            <div className="mx-auto relative w-28 h-28">
              <img
                src={selectedProfileImage}
                className="w-28 h-28 rounded-full object-cover"
              />

              <ProfileImageModal
                imageCandidates={PROFILE_IMAGES}
                selectedProfileImage={selectedProfileImage ?? ""}
                onSave={(selected) => {
                  setValue("profileImage", selected, {
                    shouldDirty: true,
                    shouldValidate: true,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <input
                {...register("nickname")}
                placeholder="닉네임(최대 10자)"
                className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
                maxLength={10}
              />
              {errors.nickname && (
                <p className="text-sm text-red-500">{errors.nickname.message}</p>
              )}
            </div>

            <DialogClose asChild>
              <Button
                type="submit"
                variant={isValid ? "primary" : "disabled"}
                disabled={!isValid || isSubmitting}
                className="h-14"
              >
                변경사항 저장하기
              </Button>
            </DialogClose>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
