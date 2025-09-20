import { useNavigate } from "react-router-dom";
import { YhFashion } from "../../../assets/dummy";
import { Button } from "../../../components/Button";
import { useState, useEffect } from "react";
import { getRecommendedAuctions } from "../../../apis/api";

function RecommendCard({ auction, onClick }) {
  // 이미지 파일 URL을 우선적으로 사용, 없으면 image_url, 마지막으로 기본 이미지 사용
  const imageUrl = auction.image_file_url || auction.image_url || YhFashion;

  const handleImageError = (e) => {
    console.log("이미지 로딩 실패:", imageUrl);
    e.target.src = YhFashion; // 기본 이미지로 대체
  };

  return (
    <div
      className="w-full flex flex-col items-start bg-bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => onClick(auction.id)}
    >
      <div className="h-72 w-full flex justify-center overflow-hidden">
        <img
          src={imageUrl}
          className="h-full w-full object-cover rounded-t-xl"
          alt={auction.title}
          onError={handleImageError}
        />
      </div>
      <div className="flex flex-col gap-1.5 w-full px-6 py-5">
        <div className="text-xl text-text-title font-bold">{auction.title}</div>
        <div className="text-base text-text-content w-full truncate">
          {auction.description}
        </div>

        {/* 판매자 정보 */}
        {auction.seller_nickname && (
          <div className="text-sm text-text-subtitle">
            판매자: {auction.seller_nickname}
          </div>
        )}

        {/* 가격 정보 */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-brand-primary">
              현재가:{" "}
              {auction.current_price?.toLocaleString() ||
                auction.starting_price?.toLocaleString()}
              원
            </div>
            <div className="text-sm text-text-subtitle">
              시작가: {auction.starting_price?.toLocaleString()}원
            </div>
          </div>
          <div className="text-sm text-text-subtitle">
            입찰 {auction.bid_count || 0}회
          </div>
        </div>

        {/* 경매 상태 */}
        <div className="flex justify-between items-center mt-2">
          <div
            className={`px-2 py-1 rounded text-xs ${
              auction.status === "active"
                ? "bg-green-100 text-green-800"
                : auction.status === "ended"
                  ? "bg-red-100 text-red-800"
                  : "bg-gray-100 text-gray-800"
            }`}
          >
            {auction.status === "active"
              ? "진행중"
              : auction.status === "ended"
                ? "종료"
                : "취소"}
          </div>
          <div className="text-xs text-text-subtitle">
            {auction.end_time
              ? new Date(auction.end_time).toLocaleDateString()
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecommendSection() {
  const navigate = useNavigate();
  const [recommendedAuctions, setRecommendedAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  // 추천 경매 데이터 가져오기
  useEffect(() => {
    const fetchRecommendedAuctions = async () => {
      try {
        setLoading(true);
        console.log("추천 경매 API 호출 시작...");
        const auctions = await getRecommendedAuctions();
        console.log("받아온 추천 경매 데이터:", auctions);
        console.log("데이터 타입:", typeof auctions);
        console.log("배열 길이:", auctions?.length);

        if (auctions && auctions.length > 0) {
          auctions.forEach((auction, index) => {
            console.log(`경매 ${index + 1}:`, {
              id: auction.id,
              title: auction.title,
              description: auction.description,
              image_url: auction.image_url,
              image_file_url: auction.image_file_url,
              seller_nickname: auction.seller_nickname,
              starting_price: auction.starting_price,
              current_price: auction.current_price,
            });
          });
        }

        setRecommendedAuctions(auctions || []);
      } catch (error) {
        console.error("추천 경매 데이터 로딩 실패:", error);
        setRecommendedAuctions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedAuctions();
  }, []);

  // 경매 카드 클릭 시 경매 상세 페이지로 이동
  const handleAuctionClick = (auctionId) => {
    navigate(`/auction/${auctionId}`);
  };

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

        {loading ? (
          <div className="w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-text-tertiary">
            <div className="w-full flex flex-col items-start bg-bg-white rounded-xl shadow-lg animate-pulse">
              <div className="h-72 w-full bg-gray-200 rounded-t-xl"></div>
              <div className="flex flex-col gap-1.5 w-full px-6 py-5">
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start bg-bg-white rounded-xl shadow-lg animate-pulse">
              <div className="h-72 w-full bg-gray-200 rounded-t-xl"></div>
              <div className="flex flex-col gap-1.5 w-full px-6 py-5">
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-text-tertiary">
            {recommendedAuctions.length > 0 ? (
              recommendedAuctions.map((auction) => (
                <RecommendCard
                  key={auction.id}
                  auction={auction}
                  onClick={handleAuctionClick}
                />
              ))
            ) : (
              <div className="col-span-2 text-center py-20">
                <div className="text-xl text-text-subtitle">
                  현재 추천할 경매가 없습니다.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
