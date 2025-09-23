import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    // 초기 버전: 아무것도 하지 않음 (인가 요청/코드 파싱 없음)
    // TODO: Step1에서 카카오 인가요청 후 리다이렉트되면 여기에서 code를 확인합니다.
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">카카오 인가코드 확인</h1>
      <p className="mt-4 text-gray-600">
        콘솔에서 인가코드를 확인하세요. (Step2에서 토큰 요청을 구현합니다.)
      </p>
    </div>
  );
}
