import { Button } from "../Button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import ProfileImageModal from "./ProfileImageModal";

export default function ProfileSettingModal({
  imageSrc,
}: {
  imageSrc: string;
}) {
  const [nickname, setNickname] = useState("");

  const [selectedProfileImage, setSelectedProfileImage] = useState(imageSrc);

  const onlyAllowed = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;
  const tooLong = nickname.length > 10;
  const invalidChars = !onlyAllowed.test(nickname);
  const empty = nickname.length === 0;

  const showWarning = !empty && (tooLong || invalidChars);
  const canSubmit = !empty && !tooLong && !invalidChars;

  return (
    <Dialog>
      <DialogPortal />
      <DialogTrigger asChild>
        <div className="flex items-center gap-2">
          <img
            src={"https://via.placeholder.com/80"}
            alt="profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-lg font-bold text-scale-600">닉네임</div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-180">
        <div className="px-20 py-22.5 flex flex-col gap-20">
          <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
          <div className="flex flex-col gap-12.5">
            <div className="mx-auto relative w-28 h-28">
              <img
                src={imageSrc}
                className="w-28 h-28 rounded-full object-cover"
              />

              <ProfileImageModal
                selectedProfileImage={selectedProfileImage}
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
            <Button
              variant={canSubmit ? "primary" : "disabled"}
              disabled={!canSubmit}
              onClick={() => {}}
              className="h-14"
            >
              {"멋시장 시작하기"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
