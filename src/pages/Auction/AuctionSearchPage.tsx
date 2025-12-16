import { AuctionListItem, getAllAuctions } from "@/apis/api";
import { useEffect, useMemo, useState } from "react";
import { AuctionCard } from "./components/AuctionCard";
import Pagination from "@/components/Pagination";
import { toAbsoluteUrl } from "@/utils/url";
import { AuctionCardSkeleton } from "./components/AuctionCardSkeleton";

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
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 lg:px-20 py-12 lg:py-20">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            경매 입찰하기
          </h1>
          <p className="text-base lg:text-lg text-gray-500">
            멋사 구성원들의 애착템에 입찰해보세요
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <AuctionCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 lg:py-32">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {error}
            </h3>
            <p className="text-gray-500">잠시 후 다시 시도해주세요</p>
          </div>
        ) : total === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 lg:py-32">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              진행 중인 경매가 없습니다
            </h3>
            <p className="text-gray-500">곧 새로운 경매가 시작될 예정입니다</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
            <div className="mt-12 lg:mt-16">
              <Pagination
                totalItems={total}
                pageSize={PAGE_SIZE}
                currentPage={page}
                onPageChange={setPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuctionSearchPage;
