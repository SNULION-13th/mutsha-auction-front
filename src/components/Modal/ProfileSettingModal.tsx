import { Button } from "../Button";
import ModalLayout from "./ModalLayout";
import { Edit } from "../../assets/image";
import { useState } from "react";

type Props = {
  imageSrc: string;
  onEditImage: () => void;
  onSubmitSuccess: (nickname: string) => void;
  onClose: () => void;
};

export default function ProfileSettingModal({
  imageSrc,
  onEditImage,
  onSubmitSuccess,
  onClose,
}: Props) {
  const [nickname, setNickname] = useState("");

  const onlyAllowed = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;
  const tooLong = nickname.length > 10;
  const invalidChars = !onlyAllowed.test(nickname);
  const empty = nickname.length === 0;

  const showWarning = !empty && (tooLong || invalidChars);
  const canSubmit = !empty && !tooLong && !invalidChars;

  return (
    <ModalLayout onClose={onClose}>
      <div className="px-20 py-22.5 flex flex-col gap-20 w-180">
        <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
        <div className="flex flex-col gap-12.5">
          <div className="mx-auto relative w-28 h-28">
            <img
              src={imageSrc}
              className="w-28 h-28 rounded-full object-cover"
            />
            <button
              onClick={onEditImage}
              className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
              aria-label="edit profile image"
            >
              <img src={Edit} className="w-9 h-9" />
            </button>
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
            onButtonClick={() => canSubmit && onSubmitSuccess(nickname)}
            className="h-14"
          >
            멋사주 시작하기
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
}
