import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoSignIn, getUserInfo } from "@/apis/api";
import { useUserInfo } from "@/contexts/UserInfoProvider";

export default function Auth() {
  const navigate = useNavigate();
  const { login } = useUserInfo();

  useEffect(() => {
    (async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (!code) {
        console.error("카카오 code 없음");
        navigate("/");
        return;
      }
      try {
        const loginSuccess = await kakaoSignIn(code);
        if (loginSuccess) {
          // 카카오 로그인 성공 후 사용자 프로필 정보 가져오기
          const userInfo = await getUserInfo();
          login(userInfo);
          navigate("/");
        }
      } catch (error) {
        console.error("로그인 중 오류 발생:", error);
        navigate("/");
      }
    })();
  }, [navigate, login]);

  return null;
}
