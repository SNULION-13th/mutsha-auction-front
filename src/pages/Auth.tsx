import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoSignIn, getUserInfo, type UserProfile } from "@/apis/api";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (!code) {
        console.error("카카오 code 없음");
        navigate("/");
        return;
      }
      try {
        const res = await kakaoSignIn(code);
        if (res) {
          localStorage.setItem("isLoggedIn", "true");

          // 카카오 로그인 성공 후 백엔드에서 최신 사용자 정보 가져오기
          try {
            const latestUserInfo = await getUserInfo();
            if (latestUserInfo) {
              localStorage.setItem(
                "userProfile",
                JSON.stringify(latestUserInfo),
              );
              console.log("로그인 후 최신 사용자 정보 저장:", latestUserInfo);
            } else {
              // getUserInfo 실패 시 카카오 로그인 결과라도 저장
              localStorage.setItem("userProfile", JSON.stringify(res));
              console.log("getUserInfo 실패, 카카오 로그인 결과 저장:", res);
            }
          } catch (userInfoError) {
            console.error("사용자 정보 가져오기 실패:", userInfoError);
            // getUserInfo 실패 시 카카오 로그인 결과라도 저장
            localStorage.setItem("userProfile", JSON.stringify(res));
          }

          // 메인 페이지로 이동
          window.location.href = "/";
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
        navigate("/");
      }
    })();
  }, [navigate]);

  return null;
}
