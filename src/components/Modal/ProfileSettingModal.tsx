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

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const [nickname, setNickname] = useState(user?.nickname ?? "");
  const [selectedProfileImage, setSelectedProfileImage] = useState(
    user?.profileImage,
  );

  const onlyAllowed = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;
  const tooLong = nickname.length > 10;
  const invalidChars = !onlyAllowed.test(nickname);
  const empty = nickname.length === 0;

  const showWarning = !empty && (tooLong || invalidChars);
  const canSubmit = !empty && !tooLong && !invalidChars;

  const handleSubmit = async () => {
    if (canSubmit) {
      await updateProfile(
        nickname,
        PROFILE_IMAGES.indexOf(selectedProfileImage ?? "") + 1,
      );
    }
  };

  // 모달 열릴 때 닉네임과 프로필 이미지 동기화
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setNickname(user?.nickname ?? "");
      setSelectedProfileImage(user?.profileImage ?? "");
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
                onSave={(selected) => setSelectedProfileImage(selected)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <input
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
                placeholder="닉네임(최대 10자)"
                className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
              />
              {showWarning && (
                <p className="text-sm text-red-500">
                  *10자 이내의 한글, 숫자, 영문자를 입력해주세요.
                </p>
              )}
            </div>

            <DialogClose asChild>
              <Button
                variant={canSubmit ? "primary" : "disabled"}
                disabled={!canSubmit}
                onClick={handleSubmit}
                className="h-14"
              >
                {"멋시장 시작하기"}
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
