import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoSignIn } from "../apis/api";

function Auth() {
  const navigate = useNavigate();

  const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get("code");
    if (token) {
      try {
        const res = await kakaoSignIn({ code: token });

        if (res) {
          // 로그인 성공 시 로컬 스토리지에 사용자 정보 저장
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userProfile", JSON.stringify(res));

          // 페이지 새로고침하여 상태 업데이트
          window.location.href = "/";
        }
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
        // 에러 처리
        navigate("/");
      }
    } else {
      // 코드가 없으면 메인 페이지로 이동
      navigate("/");
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <></>;
}

export default Auth;
