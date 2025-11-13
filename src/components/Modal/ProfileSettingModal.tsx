import { Button } from "../Button";
import { useState } from "react";
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
import { profileSettingSchema, profileSettingFormData } from "./schema";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "react-router-dom";
import { NicknameField } from "./components/NicknameField";
import { ProfileImageField } from "./components/ProfileImageField";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  //유저 값으로 모달의 초기값 설정
  const methods = useForm({
    resolver: zodResolver(profileSettingSchema),
    mode: "onTouched",
    defaultValues: {
      nickname: user?.nickname || "",
      image: user?.profileImage || "",
    },
  });

  return (
    <Dialog>
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
        <div className="px-20 py-22.5 flex flex-col gap-20">
          <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) =>
                updateProfile(
                  data.nickname,
                  PROFILE_IMAGES.indexOf(data.image ?? "") + 1,
                ),
              )}
            >
              <div className="flex flex-col gap-12.5">
                <div className="mx-auto relative w-28 h-28">
                  <img
                    src={methods.getValues("image")}
                    className="w-28 h-28 rounded-full object-cover"
                  />
                  <ProfileImageField />
                </div>
                <div className="flex flex-col gap-3">
                  <NicknameField />
                </div>
                <DialogClose asChild>
                  <Button
                    variant={methods.formState.isValid ? "primary" : "disabled"}
                    disabled={!methods.formState.isValid}
                    className="h-14"
                  >
                    {"멋시장 시작하기"}
                  </Button>
                </DialogClose>
              </div>
            </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
