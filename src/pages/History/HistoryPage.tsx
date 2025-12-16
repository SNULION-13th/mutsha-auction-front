import { getRemainingTime } from "@/utils/datetime";
import { HistoryCard } from "./components/HistoryCard";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  getMyAuctions,
  getMyBids,
  MyAuctionHistory,
  MyBidHistory,
} from "@/apis/api";
import { ROUTES } from "@/constants/router";
import { useTransition } from "@/contexts/TransitionProvider";

const PAGE_SIZE = 6;
type Tab = "bids" | "mine";

function isEnded(end_time: string) {
  return getRemainingTime(end_time) === "00d 00h 00m";
}

function scenarioFromBid(
  b: MyBidHistory,
): "not-highest" | "highest" | "win" | "lose" {
  const ended = b.status === "ended";
  if (ended) return b.is_winner ? "win" : "lose";
  return b.my_bid >= b.current_price ? "highest" : "not-highest";
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 sm:py-24 md:py-32">
      <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 text-sm sm:text-base">불러오는 중...</p>
    </div>
  );
}

function EmptyState({ tab }: { tab: Tab }) {
  const messages = {
    bids: {
      title: "입찰한 경매가 없습니다",
      description: "경매에 참여하고 멋진 애착템을 만나보세요",
    },
    mine: {
      title: "등록한 경매가 없습니다",
      description: "당신의 애착템을 경매에 등록해보세요",
    },
  };

  const { title, description } = messages[tab];

  return (
    <div className="flex flex-col items-center justify-center py-20 sm:py-24 md:py-32">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 sm:mb-6">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-500">{description}</p>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`relative pb-4 sm:pb-5 md:pb-6 text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-200 ${
        active ? "text-brand-primary" : "text-gray-400 hover:text-gray-600"
      }`}
      onClick={onClick}
    >
      {children}
      {active && (
        <span className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-brand-primary rounded-t-full transition-all duration-300" />
      )}
    </button>
  );
}

function HistoryPage() {
  const [tab, setTab] = useState<Tab>("bids");
  const [myBids, setMyBids] = useState<MyBidHistory[]>([]);
  const [myAuctions, setMyAuctions] = useState<MyAuctionHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleBids, setVisibleBids] = useState(PAGE_SIZE);
  const [visibleMine, setVisibleMine] = useState(PAGE_SIZE);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const { playTransition } = useTransition();

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [bids, mine] = await Promise.all([getMyBids(), getMyAuctions()]);
      setMyBids(bids);
      setMyAuctions(mine);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [tab]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        if (tab === "bids") {
          setVisibleBids((v) => Math.min(v + PAGE_SIZE, myBids.length));
        } else {
          setVisibleMine((v) => Math.min(v + PAGE_SIZE, myAuctions.length));
        }
      },
      { rootMargin: "200px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [tab, myBids.length, myAuctions.length]);

  const listBids = useMemo(
    () => myBids.slice(0, visibleBids),
    [myBids, visibleBids],
  );

  const listMine = useMemo(
    () => myAuctions.slice(0, visibleMine),
    [myAuctions, visibleMine],
  );

  const currentList = tab === "bids" ? listBids : listMine;
  const isEmpty = currentList.length === 0;

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
        <header className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            내 경매
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500">
            나의 입찰과 등록 현황을 한눈에 확인하세요
          </p>
        </header>

        <nav className="flex gap-8 sm:gap-12 border-b-2 border-gray-100 mb-8 sm:mb-10 md:mb-12 relative">
          <TabButton active={tab === "bids"} onClick={() => setTab("bids")}>
            입찰 중
          </TabButton>
          <TabButton active={tab === "mine"} onClick={() => setTab("mine")}>
            내 등록
          </TabButton>
        </nav>

        {loading ? (
          <LoadingState />
        ) : isEmpty ? (
          <EmptyState tab={tab} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {tab === "bids"
                ? listBids.map((b) => {
                    const ended = isEnded(b.end_time) || b.status === "ended";
                    const duration = ended
                      ? "00d 00h 00m"
                      : getRemainingTime(b.end_time);
                    const resultText = ended
                      ? b.is_winner
                        ? "낙찰 성공"
                        : "낙찰 실패"
                      : undefined;

                    return (
                      <HistoryCard
                        key={b.auction_id}
                        id={b.auction_id}
                        title={b.title}
                        current_price={b.current_price}
                        my_bid={b.my_bid}
                        duration={duration}
                        ended={ended}
                        rightLabel="내 입찰가"
                        resultText={resultText}
                        win={b.is_winner}
                        buttonText="입찰하기"
                        onClick={() =>
                          playTransition({
                            scenario: scenarioFromBid(b),
                            to: ROUTES.AUCTION.ROOM.replace(
                              ":auctionId",
                              String(b.auction_id),
                            ),
                          })
                        }
                      />
                    );
                  })
                : listMine.map((m) => {
                    const ended =
                      isEnded(m.end_time) ||
                      m.status === "ended" ||
                      m.status === "cancelled";
                    const duration = ended
                      ? "00d 00h 00m"
                      : getRemainingTime(m.end_time);

                    return (
                      <HistoryCard
                        key={m.auction_id}
                        id={m.auction_id}
                        title={m.title}
                        current_price={m.current_price}
                        my_bid={m.start_price}
                        duration={duration}
                        ended={ended}
                        rightLabel="최소 입찰가"
                        buttonText="경매 보러가기"
                      />
                    );
                  })}
            </div>
            <div ref={sentinelRef} className="h-8" />
          </>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;
