import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
// JSON 파일 import
import lonelyAnimation from "@/assets/lotties/notFound.json";

function NotFoundPage() {
  const param = useParams();
  const pathName = param["*"];

  return (
    <div className="w-full h-full py-10 flex flex-col items-center justify-center text-center gap-9">
      <div className="text-5xl font-bold text-scale-600">404 ERROR</div>
      {/* 오타 수정: text-scale-400 */}
      <div className="text-xl text-scale-400">
        앗, 없는 페이지를 찾다니...
        <br />
        {pathName}의 탐험심은 대단하다!
        <br />
        <br />이 곳에서는 뭘 배울 거냐면요...
      </div>
      {/* 수정됨: 문자열이 아닌 import한 변수를 전달 */}
      <Lottie animationData={lonelyAnimation} loop={true} />
    </div>
  );
}

export default NotFoundPage;
