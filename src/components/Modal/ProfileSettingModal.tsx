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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  //유저 값으로 모달의 초기값 설정
  const nicknameRegex =
    /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;

  const profileSchema = z.object({
    nickname: z
      .string()
      .min(1, "닉네임을 입력해주세요.")
      .max(10, "10자 이내의 한글, 숫자, 영문자를 입력해주세요.")
      .regex(nicknameRegex, "10자 이내의 한글, 숫자, 영문자를 입력해주세요."),
    profileImage: z.string(),
  });

  type ProfileFormValues = z.infer<typeof profileSchema>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profileImage: user?.profileImage ?? PROFILE_IMAGES[0],
    },
  });

  const profileImage =
    watch("profileImage") ?? user?.profileImage ?? PROFILE_IMAGES[0];

  const onSubmit = async (values: ProfileFormValues) => {
    const idx = PROFILE_IMAGES.indexOf(values.profileImage);
    const imageIndex = idx === -1 ? 1 : idx + 1;

    await updateProfile(values.nickname, imageIndex);
    // DialogClose로 감싸져 있어서 여기서 모달 닫을 필요 X
  };

  const handleOpenChange = (open: boolean) => {
    if (open && user) {
      reset({
        nickname: user.nickname ?? "",
        profileImage: user.profileImage ?? PROFILE_IMAGES[0],
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
            {/* 프로필 이미지 */}
            <div className="mx-auto relative w-28 h-28">
              <img
                src={profileImage}
                className="w-28 h-28 rounded-full object-cover"
              />

              <ProfileImageModal
                imageCandidates={PROFILE_IMAGES}
                selectedProfileImage={profileImage}
                onSave={(selected) => {
                  setValue("profileImage", selected, {
                    shouldDirty: true,
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

            {/* 제출 버튼 */}
            <DialogClose asChild>
              <Button
                type="submit"
                variant={isValid ? "primary" : "disabled"}
                disabled={!isValid || isSubmitting}
                className="h-14"
              >
                {isSubmitting ? "저장 중..." : "멋시장 시작하기"}
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
