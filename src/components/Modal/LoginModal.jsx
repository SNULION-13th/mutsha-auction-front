import { Button } from "../Button";
import ModalLayout from "./ModalLayout";
import { Kakao } from "../../assets/image";

export default function LoginModal({ onLogin, onClose }) {
  const handleKakaoLogin = () => {
    try {
      // 환경 변수에서 카카오 설정 가져오기
      const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
      const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

      window.location.href = kakaoAuthUrl;
    } catch (error) {
      console.error("카카오 로그인 오류:", error);
    }
  };
  return (
    <ModalLayout onClose={onClose}>
      <div className="px-20 py-22.5 flex flex-col gap-10 w-150">
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-bold text-text-title">로그인</div>
          <div className="text-lg text-text-content">
            처음이면 자동 회원가입 후 이용할 수 있어요.
          </div>
        </div>
        <Button
          variant="kakao"
          onButtonClick={handleKakaoLogin}
          className="flex items-center justify-center gap-2"
        >
          <img src={Kakao} className="w-8 h-8" />
          카카오로 시작하기
        </Button>
      </div>
    </ModalLayout>
  );
}
