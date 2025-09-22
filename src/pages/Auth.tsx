import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoSignIn, type UserProfile } from "@/apis/api";

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
          localStorage.setItem("userProfile", JSON.stringify(res));
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
