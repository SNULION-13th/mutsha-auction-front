import { useNavigate } from "react-router-dom";
import { YhFashion } from "@/assets/dummy";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";
import { type AuctionListItem, getRecommendedAuctions } from "@/apis/api";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

function RecommendCard({ image, title, description }: CardProps) {
  return (
    <div className="w-full flex flex-col items-start bg-bg-white rounded-xl shadow-lg">
      <div className="h-72 w-full flex justify-center overflow-hidden">
        <img
          src={image}
          className="h-full w-full object-cover rounded-t-xl"
          alt={title}
          onError={(e) => {
            e.currentTarget.src = YhFashion;
          }}
        />
      </div>
      <div className="flex flex-col gap-1.5 w-full px-6 py-5">
        <div className="text-xl text-scale-600 font-bold">{title}</div>
        <div className="text-base text-scale-400 w-full truncate">
          {description}
        </div>
      </div>
    </div>
  );
}

export function RecommendSection() {
  const navigate = useNavigate();
  const [recommendedAuctions, setRecommendedAuctions] = useState<
    AuctionListItem[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const auctions = await getRecommendedAuctions();
        setRecommendedAuctions(auctions ?? []);
      } catch (error) {
        console.error("추천 경매 데이터 로딩 실패:", error);
        setRecommendedAuctions([]);
      }
    })();
  }, []);

  return (
    <div className="w-full px-50 pt-25">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-15">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <div className="text-5xl font-bold text-scale-600">
              오늘의 추천 경매
            </div>
            <div className="text-2xl text-scale-400">
              멋사 구성원들의 애착템에 입찰해보세요!
            </div>
          </div>
          <Button
            variant="primary"
            isRounded
            className="w-62.5"
            onButtonClick={() => navigate("/auction")}
          >
            전체 경매 보러가기
          </Button>
        </div>

        <div className="w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-scale-200">
          {recommendedAuctions.length > 0 ? (
            recommendedAuctions.map((auction) => (
              <RecommendCard
                key={auction.id}
                image={auction.image_file_url || auction.image_url || YhFashion}
                title={auction.title}
                description={auction.description}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-20">
              <div className="text-xl text-scale-500">
                현재 추천할 경매가 없습니다.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
