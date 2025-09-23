import { Button } from "../Button";
import ModalLayout from "./ModalLayout";
import { Kakao } from "../../assets/image";

type Props = {
  onClose: () => void;
  onLogin?: () => void;
};

export default function LoginModal({ onLogin, onClose }: Props) {
  const handleKakaoLogin = () => {
    // 초기 버전: 아직 구현되지 않은 상태
    // TODO: 카카오 로그인 연동 예정
    alert("카카오 로그인은 준비 중입니다.");
    onLogin?.(); // 있으면 외부 콜백만 호출
  };

  return (
    <ModalLayout onClose={onClose}>
      <div className="px-20 py-22.5 flex flex-col gap-10 w-150">
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-bold text-scale-600">로그인</div>
          <div className="text-lg text-scale-400">
            처음이면 자동 회원가입 후 이용할 수 있어요.
          </div>
        </div>
        <Button
          variant="kakao"
          onButtonClick={handleKakaoLogin}
          className="flex items-center justify-center gap-2"
        >
          <img src={Kakao} className="w-8 h-8" alt="Kakao" />
          카카오로 시작하기
        </Button>
      </div>
    </ModalLayout>
  );
}
