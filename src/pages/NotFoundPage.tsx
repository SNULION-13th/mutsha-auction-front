import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import lonelyAnimation from "@/assets/Lonely 404.json"; // 여러분의 Lottie 파일을 불러오세요

function NotFoundPage() {
  const param = useParams();
  const pathName = param["*"];

  return (
    <div className="w-full h-full py-10 flex flex-col items-center justify-center text-center gap-9">
      <div className="text-5xl font-bold text-scale-600">404 ERROR</div>
      <div className="text-xl text-scale-400">
        앗, 없는 페이지를 찾다니...
        <br />
        {pathName}의 탐험심은 대단하다!
        <br />
        <br />이 곳에서는 뭘 배울 거냐면요...
      </div>
      <Lottie animationData={lonelyAnimation} loop={true} />
    </div>
  );
}

export default NotFoundPage;
