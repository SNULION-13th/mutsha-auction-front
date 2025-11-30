// src/pages/Auction/AuctionSearchPage.tsx

import { AuctionListItem, getAllAuctions } from "@/apis/api";
import { useEffect, useMemo, useState } from "react";
import { AuctionCard } from "./components/AuctionCard";
import { AuctionCardSkeleton } from "./components/AuctionCardSkeleton";
import Pagination from "@/components/Pagination";
import { toAbsoluteUrl } from "@/utils/url";

const PAGE_SIZE = 6;

function pickImage(a: AuctionListItem) {
  const raw = a.image_file || a.image_file_url || a.image_url || "";
  return toAbsoluteUrl(raw);
}

function AuctionSearchPage() {
  const [auctions, setAuctions] = useState<AuctionListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getAllAuctions({ status: "active" });
        setAuctions(data);
      } catch (e) {
        console.error(e);
        setError("경매 목록 불러오기 실패");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const total = auctions.length;
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return auctions.slice(start, start + PAGE_SIZE);
  }, [auctions, page]);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (page > totalPages) setPage(totalPages);
  }, [total, page]);

  return (
    // [변경] 패딩 반응형 적용
    <div className="w-full px-6 py-10 md:px-20 md:py-20 lg:px-50 lg:py-30">
      <div className="max-w-[1062px] flex flex-col mx-auto gap-12 lg:gap-25">
        <div className="flex flex-col gap-3 lg:gap-5 text-center lg:text-left">
          <div className="text-3xl lg:text-5xl font-bold text-scale-600">경매 입찰하기</div>
          <div className="text-lg lg:text-2xl text-scale-400">
            멋사 구성원들의 애착템에 입찰해보세요!
          </div>
        </div>
        {loading ? (
          // [변경] 그리드 컬럼 반응형 적용
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px] lg:min-h-[900px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <AuctionCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-point-warning py-20">{error}</div>
        ) : total === 0 ? (
          <div className="text-center text-scale-400 py-20">
            아직 진행 중인 경매가 없어요.
          </div>
        ) : (
          <>
            {/* [변경] 그리드 컬럼 반응형 적용 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px] lg:min-h-[900px]">
              {pageItems.map((a) => (
                <AuctionCard
                  key={a.id}
                  id={a.id}
                  img={pickImage(a)}
                  title={a.title}
                  description={a.description}
                  current_price={a.current_price}
                />
              ))}
            </div>
            <Pagination
              totalItems={total}
              pageSize={PAGE_SIZE}
              currentPage={page}
              onPageChange={setPage}
              className="mt-8"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AuctionSearchPage;
