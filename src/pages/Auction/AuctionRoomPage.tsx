import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuctionDetail, getAuctionDetail } from "@/apis/api";
import { Button } from "@/components/Button";

function AuctionRoomPage() {
  const { auctionId } = useParams<{ auctionId: string }>();
  const navigate = useNavigate();
  const [auction, setAuction] = useState<AuctionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAuctionDetail() {
      try {
        setLoading(true);
        const data = await getAuctionDetail(auctionId ?? "");
        if (data) {
          setAuction(data);
        } else {
          setError("경매를 찾을 수 없습니다.");
        }
      } catch (err) {
        console.error("경매 상세 정보 로딩 실패:", err);
        setError("경매 정보를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    }

    if (auctionId) {
      fetchAuctionDetail();
    }
  }, [auctionId]);

  if (loading) {
    return (
      <div className="w-full px-50 pt-25">
        <div className="max-w-[1160px] mx-auto">
          <div className="animate-pulse">
            <div className="h-8 w-1/3 bg-gray-200 rounded mb-4"></div>
            <div className="grid grid-cols-2 gap-10">
              <div className="h-96 bg-gray-200 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !auction) {
    return (
      <div className="w-full px-50 pt-25">
        <div className="max-w-[1160px] mx-auto text-center">
          <div className="text-2xl text-scale-500 mb-4">{error}</div>
          <Button variant="primary" onButtonClick={() => navigate("/auction")}>
            경매 목록으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-50 pt-25">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-6">
          <Button
            variant="gray"
            onButtonClick={() => navigate("/auction")}
            className="mb-4"
          >
            ← 경매 목록으로 돌아가기
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="w-full">
            <div className="h-96 w-full flex justify-center overflow-hidden rounded-xl shadow-lg">
              <img
                src={
                  auction.image_file_url ||
                  auction.image_url ||
                  "https://via.placeholder.com/400x400?text=No+Image"
                }
                className="h-full w-full object-cover"
                alt={auction.title}
                onError={(e) => {
                  const img = e.currentTarget;
                  img.src = "https://via.placeholder.com/400x400?text=No+Image";
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold text-scale-600 mb-2">
                {auction.title}
              </h1>
              <div className="text-lg text-scale-500">
                판매자: {auction.seller_nickname}
              </div>
            </div>

            <div className="bg-bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-brand-primary mb-2">
                현재가: {auction.current_price.toLocaleString()}원
              </div>
              <div className="text-sm text-scale-500 mb-4">
                시작가: {auction.starting_price.toLocaleString()}원
              </div>
              <div className="text-sm text-scale-500">
                입찰 수: {auction.bid_count}회
              </div>
            </div>

            <div className="bg-bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-scale-600 mb-3">
                경매 설명
              </h3>
              <p className="text-scale-400 leading-relaxed">
                {auction.description}
              </p>
            </div>

            <div className="bg-bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-scale-600 mb-3">
                경매 정보
              </h3>
              <div className="space-y-2 text-scale-400">
                <div>
                  시작 시간: {new Date(auction.start_time).toLocaleString()}
                </div>
                <div>
                  종료 시간: {new Date(auction.end_time).toLocaleString()}
                </div>
                <div>
                  상태:
                  <span
                    className={`ml-2 px-2 py-1 rounded text-sm ${
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
                  </span>
                </div>
              </div>
            </div>

            {auction.is_active && (
              <Button
                variant="primary"
                className="w-full py-4 text-xl"
                onButtonClick={() => {
                  // TODO: 입찰 모달 또는 입찰 기능 구현
                  alert("입찰 기능은 추후 구현 예정입니다.");
                }}
              >
                입찰하기
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionRoomPage;
