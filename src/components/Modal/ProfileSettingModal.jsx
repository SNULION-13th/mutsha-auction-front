import { Button } from "../Button";
import ModalLayout from "./ModalLayout";
import { Kakao } from "../../assets/image";

export default function ProfileSettingModal({ onClose }) {
  return (
    <ModalLayout onClose={onClose}>
      <div className="px-20 py-22.5 flex flex-col gap-10 w-150">
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-bold text-text-title">프로필 세팅</div>
          <div className="text-lg text-text-content">
            처음이면 자동 회원가입 후 이용할 수 있어요.
          </div>
        </div>
        <Button
          variant="kakao"
          onButtonClick={onClose}
          className="flex items-center justify-center gap-2"
        >
          <img src={Kakao} className="w-8 h-8" />
          카카오로 시작하기
        </Button>
      </div>
    </ModalLayout>
  );
}
