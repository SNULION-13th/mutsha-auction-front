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
      <div className="w-full py-40 text-center text-scale-400">
        불러오는 중 ...
      </div>
    );
  }

  if (error || !auction) {
    return (
      <div className="w-full px-30 pc:px-50 pt-20 pc:pt-40">
        <div className="max-w-[1160px] mx-auto text-center">
          <div className="text-lg pc:text-2xl text-scale-500 mb-4">{error}</div>
          <Button variant="primary" onClick={() => navigate("/auction")}>
            경매 목록으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-6 md:px-12 lg:px-24 pc:px-50 py-12 md:py-16 lg:py-20 pc:py-30">
      <div className="max-w-[1062px] mx-auto flex flex-col gap-10 md:gap-15 lg:gap-20 pc:gap-25">
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 pc:gap-5 max-pc:items-center">
          <div className="text-2xl md:text-3xl lg:text-4xl pc:text-5xl font-bold text-scale-600 text-center pc:text-left">
            경매 입찰하기
          </div>
          <div className="text-base md:text-lg lg:text-xl pc:text-2xl text-scale-400 text-center pc:text-left">
            멋사 구성원들의 애착템에 입찰해보세요!
          </div>
        </div>
        <div className="w-full h-full flex flex-col pc:flex-row gap-6 pc:gap-9">
          <div className="w-full pc:w-[470px] pc:shrink-0 min-h-[400px] pc:min-h-[577px] rounded-2xl bg-bg-white flex flex-col gap-5 shadow-xl">
            <img
              src={String(auction.image_file)}
              className="w-full h-[300px] pc:h-[392px] object-cover rounded-t-2xl"
            />
            <div className="px-4 md:px-5 lg:px-6 pc:px-7 py-3 md:py-4 lg:py-5 pc:py-5 pb-6 md:pb-8 lg:pb-10 pc:pb-12 flex flex-col gap-3 md:gap-4 lg:gap-5 pc:gap-6">
              <div className="text-lg md:text-xl lg:text-xl pc:text-2xl font-bold text-scale-600">
                {auction.title}
              </div>
              <div className="text-sm md:text-base lg:text-base pc:text-lg text-scale-400">
                {auction.description}
              </div>
            </div>
          </div>
          <div className="w-full min-h-[400px] pc:min-h-[577px] rounded-2xl bg-bg-white flex flex-col gap-10 pc:gap-14 shadow-xl px-6 pc:px-12.5 py-12 pc:py-20 justify-center">
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-4 pc:gap-4">
              <div className="text-lg md:text-xl lg:text-2xl pc:text-3xl font-bold text-scale-600">경매 정보</div>
              <div className="flex items-center justify-between">
                <div className="text-sm md:text-base lg:text-lg pc:text-xl font-bold text-scale-500">
                  현재 입찰가
                </div>
                <div className="flex items-center gap-2 pc:gap-3">
                  <img src={Cup} className="w-6 md:w-7 lg:w-8 pc:w-10" />
                  <div className="text-lg md:text-xl lg:text-2xl pc:text-3xl font-bold text-brand-primary">
                    {auction.current_price}잔
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm md:text-base lg:text-lg pc:text-xl font-bold text-scale-500">
                  남은 시간
                </div>
                <div className="text-base md:text-lg lg:text-xl pc:text-2xl font-bold text-scale-500">
                  {getRemainingTime(auction.end_time)}
                </div>
              </div>
              <div className="flex flex-col max-pc:gap-3 pc:flex-row pc:items-center w-full py-2.5">
                <div className="w-full pc:w-1/2 flex flex-col gap-1.5">
                  <div className="text-sm md:text-base lg:text-lg pc:text-xl font-bold text-scale-500">
                    최소 입찰가
                  </div>
                  <div className="text-sm md:text-base lg:text-lg pc:text-xl text-scale-400">
                    {auction.starting_price}
                  </div>
                </div>
                <div className="w-full pc:w-1/2 flex flex-col gap-1.5">
                  <div className="text-sm md:text-base lg:text-lg pc:text-xl font-bold text-scale-500">판매자</div>
                  <div className="text-sm md:text-base lg:text-lg pc:text-xl text-scale-400">
                    {auction.seller_nickname}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 pc:gap-7">
              <div className="text-lg md:text-xl lg:text-2xl pc:text-3xl font-bold text-scale-600">입찰하기</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 pc:gap-3">
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
                    className={`flex-1 h-11 md:h-12 rounded-sm border border-scale-200 px-3 md:px-3 lg:px-4 placeholder:text-scale-300 focus:outline-none text-sm md:text-base ${
                      isEnded
                        ? "bg-scale-100 text-scale-300 cursor-not-allowed"
                        : "text-scale-600 focus:ring-2 focus:ring-brand-primary/40"
                    }`}
                  />
                  <span className="text-base md:text-lg lg:text-lg pc:text-xl text-scale-600 whitespace-nowrap">잔</span>
                  {isEnded ? (
                    <Button
                      variant="darkgray"
                      className="h-11 md:h-12 w-36 md:w-40 lg:w-44 pc:w-50 px-3 md:px-4 lg:px-5 pc:px-6 flex gap-2 md:gap-2.5 items-center justify-center cursor-not-allowed text-xs md:text-sm lg:text-sm pc:text-base"
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
                        className="h-11 md:h-12 w-36 md:w-40 lg:w-44 pc:w-50 px-3 md:px-4 lg:px-5 pc:px-6 flex gap-2 md:gap-2.5 items-center justify-center text-xs md:text-sm lg:text-sm pc:text-base"
                      >
                        <img src={LogoWhite} className="w-3.5 md:w-4 lg:w-4 pc:w-5" />
                        입찰하기
                      </Button>
                    </PointPayModal>
                  )}
                </div>
                {!isEnded && !isValidBid && (
                  <div className="text-xs md:text-sm lg:text-sm pc:text-base px-2 text-point-warning">
                    최소{" "}
                    {Math.max(
                      auction.starting_price ?? 0,
                      (auction.current_price ?? 0) + 1,
                    )}
                    잔 이상으로 입력해 주세요.
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
