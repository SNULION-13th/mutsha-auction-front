import { useNavigate } from "react-router-dom";
import { YhFashion } from "../../../assets/dummy";
import { Button } from "../../../components/Button";

function RecommendCard({ image, title, description }) {
  return (
    <div className="w-full flex flex-col items-start bg-bg-white rounded-xl shadow-lg">
      <div className="h-72 w-full flex justify-center overflow-hidden">
        <img src={image} className="h-full w-full object-cover rounded-t-xl" />
      </div>
      <div className="flex flex-col gap-1.5 w-full px-6 py-5">
        <div className="text-xl text-text-title font-bold">{title}</div>
        <div className="text-base text-text-content w-full truncate">
          {description}
        </div>
      </div>
    </div>
  );
}

export function RecommendSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-50 pt-25">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-15">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <div className="text-5xl font-bold text-text-title">
              오늘의 추천 경매
            </div>
            <div className="text-2xl text-text-content">
              멋사 구성원들의 애착템에 입찰해보세요!
            </div>
          </div>
          <Button
            variant="primary"
            isRounded={true}
            className="w-62.5"
            onButtonClick={() => navigate("/auction")}
          >
            전체 경매 보러가기
          </Button>
        </div>
        <div className="w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-text-tertiary">
          <RecommendCard
            image={YhFashion}
            title="최윤희의 패션쇼 1번 착장"
            description="무려 50만원의 돈과 100시간의 손바느질을 들인 작품입니다. 어ㅇㅇㅇㅇㅇㅇㅇㅇㅇ쩌구저쩌구"
          />
          <RecommendCard
            image={YhFashion}
            title="최윤희의 패션쇼 1번 착장"
            description="무려 50만원의 돈과 100시간의 손바느질을 들인 작품입니다. 어쩌구저쩌구"
          />
        </div>
      </div>
    </div>
  );
}
