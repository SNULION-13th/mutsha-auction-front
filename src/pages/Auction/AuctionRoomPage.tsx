import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuctionDetail, getAuctionDetail } from "@/apis/api";
import { Button } from "@/components/Button";
import { Cup, LogoWhite } from "@/assets/image";
import { getRemainingTime } from "@/utils/datetime";
import PointPayModal from "@/components/Modal/PointPayModal";

function AuctionRoomPage() {
  const { auctionId } = useParams<{ auctionId: string }>();
  const navigate = useNavigate();
  const [auction, setAuction] = useState<AuctionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [bidInput, setBidInput] = useState<string>("");
  const [isPayOpen, setIsPayOpen] = useState(false);
  const bid = useMemo(() => {
    const n = Number(bidInput.replace(/[^\d]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }, [bidInput]);

  const [remainingTime, setRemainingTime] = useState<string>("");

  useEffect(() => {
    async function fetchAuctionDetail() {
      try {
        setLoading(true);
        const data = await getAuctionDetail(auctionId ?? "");
        if (data) {
          setAuction(data);
          setRemainingTime(getRemainingTime(data.end_time));
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

  useEffect(() => {
    if (!auctionId) return;

    const wsUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(
      /^http/,
      "ws",
    );
    const ws = new WebSocket(`${wsUrl}/ws/auction/${auctionId}/`);

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      try {
        const updatedAuctionData = JSON.parse(event.data);
        if (updatedAuctionData && updatedAuctionData.id !== undefined) {
          console.log(
            "실시간 경매 상태 업데이트:",
            updatedAuctionData.current_price,
          );
          setAuction(updatedAuctionData);
        } else {
          console.warn("수신된 데이터 형식이 다릅니다: ", updatedAuctionData);
        }
      } catch (e) {
        console.error("메시지 처리 중 오류 발생:", e);
      }
    };

    ws.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    ws.onerror = (e) => {
      console.error("WebSocket error:", e);
    };

    return () => {
      ws.close();
    };
  }, [auctionId]);

  useEffect(() => {
    if (!auction) return;

    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(auction.end_time));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [auction]);

  const isValidBid = useMemo(() => {
    if (!auction) return false;
    const min = Math.max(
      auction.starting_price ?? 0,
      (auction.current_price ?? 0) + 1,
    );
    return bid >= min;
  }, [auction, bid]);

  const handleBidSuccess = (newAuction: AuctionDetail) => {
    setAuction(newAuction);
    setBidInput("");
  };

  const isEnded = useMemo(() => {
    if (!auction?.end_time) return false;
    return getRemainingTime(auction.end_time) === "00d 00h 00m";
  }, [auction?.end_time]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-scale-400 text-sm lg:text-base">
            불러오는 중...
          </div>
        </div>
      </div>
    );
  }

  if (error || !auction) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
        <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="text-xl lg:text-2xl font-bold text-scale-600 mb-4">
            {error}
          </div>
          <Button
            variant="primary"
            onClick={() => navigate("/auction")}
            className="w-full py-3 text-base font-semibold"
          >
            경매 목록으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8 lg:py-16">
      <div className="max-w-[1062px] mx-auto px-6 lg:px-8 flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 lg:gap-3">
          <h1 className="text-2xl lg:text-4xl font-bold text-scale-600 tracking-tight">
            경매 입찰하기
          </h1>
          <p className="text-sm lg:text-lg text-scale-400">
            멋사 구성원들의 애착템에 입찰해보세요!
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-[470px] lg:shrink-0 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="relative group">
              <img
                src={String(auction.image_file)}
                alt={auction.title}
                className="w-full h-64 lg:h-[392px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="px-6 lg:px-8 py-6 lg:py-8">
              <h2 className="text-lg lg:text-2xl font-bold text-scale-600 mb-3 leading-tight">
                {auction.title}
              </h2>
              <p className="text-sm lg:text-base text-scale-400 leading-relaxed line-clamp-3">
                {auction.description}
              </p>
            </div>
          </div>

          <div className="w-full rounded-2xl bg-white shadow-lg border border-gray-100 px-6 lg:px-10 py-8 lg:py-12 flex flex-col justify-center">
            <div className="flex flex-col gap-6 pb-8 border-b border-gray-100">
              <h3 className="text-xl lg:text-2xl font-bold text-scale-600">
                경매 정보
              </h3>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                <div className="text-sm lg:text-base font-semibold text-scale-500">
                  현재 입찰가
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <img
                    src={Cup}
                    className="w-6 lg:w-8 drop-shadow-sm"
                    alt="잔"
                  />
                  <div className="text-2xl lg:text-3xl font-bold text-brand-primary">
                    {auction.current_price}
                    <span className="text-lg lg:text-xl ml-1">잔</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="text-sm lg:text-base font-semibold text-scale-500">
                  남은 시간
                </div>
                <div className="text-lg lg:text-xl font-bold text-scale-600 font-mono">
                  {getRemainingTime(auction.end_time)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs lg:text-sm font-semibold text-scale-400">
                    최소 입찰가
                  </div>
                  <div className="text-base lg:text-lg font-bold text-scale-600">
                    {auction.starting_price}잔
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs lg:text-sm font-semibold text-scale-400">
                    판매자
                  </div>
                  <div className="text-base lg:text-lg font-bold text-scale-600 truncate">
                    {auction.seller_nickname}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 pt-8">
              <h3 className="text-xl lg:text-2xl font-bold text-scale-600">
                입찰하기
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 lg:gap-3">
                  <input
                    type="number"
                    inputMode="numeric"
                    disabled={isEnded}
                    min={Math.max(
                      auction.starting_price ?? 0,
                      (auction.current_price ?? 0) + 1,
                    )}
                    value={bidInput}
                    onChange={(e) => {
                      const v = e.target.value.replace(/[^\d]/g, "");
                      setBidInput(v.replace(/^0+(?=\d)/, ""));
                    }}
                    placeholder={isEnded ? "이미 종료된 경매" : "입찰가 입력"}
                    className={`flex-1 h-12 lg:h-14 rounded-xl border-2 px-4 lg:px-5 text-sm lg:text-base font-medium placeholder:text-scale-300 transition-all duration-200 ${
                      isEnded
                        ? "bg-gray-100 border-gray-200 text-scale-300 cursor-not-allowed"
                        : "bg-white border-gray-200 text-scale-600 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10"
                    }`}
                  />
                  <span className="text-base lg:text-lg font-semibold text-scale-500 min-w-[30px]">
                    잔
                  </span>
                  {isEnded ? (
                    <Button
                      variant="darkgray"
                      className="h-12 lg:h-14 w-32 lg:w-40 px-5 lg:px-6 flex items-center justify-center cursor-not-allowed text-sm lg:text-base font-semibold rounded-xl"
                    >
                      경매 종료
                    </Button>
                  ) : (
                    <PointPayModal
                      bid={bid}
                      auctionId={auction.id}
                      onBidSuccess={handleBidSuccess}
                      isOpen={isPayOpen}
                      onOpenChange={setIsPayOpen}
                    >
                      <Button
                        variant="primary"
                        disabled={!isValidBid}
                        onClick={() => setIsPayOpen(true)}
                        className={`h-12 lg:h-14 w-32 lg:w-40 px-5 lg:px-6 flex gap-2 items-center justify-center text-sm lg:text-base font-semibold rounded-xl transition-all duration-200 ${
                          isValidBid
                            ? "hover:shadow-lg hover:scale-105"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        <img
                          src={LogoWhite}
                          className="w-4 lg:w-5"
                          alt="로고"
                        />
                        입찰하기
                      </Button>
                    </PointPayModal>
                  )}
                </div>
                {!isEnded && !isValidBid && (
                  <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-xl">
                    <svg
                      className="w-5 h-5 text-red-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs lg:text-sm text-red-600 font-medium">
                      최소{" "}
                      {Math.max(
                        auction.starting_price ?? 0,
                        (auction.current_price ?? 0) + 1,
                      )}
                      잔 이상으로 입력해 주세요.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionRoomPage;
