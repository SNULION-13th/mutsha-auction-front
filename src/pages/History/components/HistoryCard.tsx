import { LogoWhite } from "@/assets/image";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  id: number;
  title: string;
  current_price: number;
  my_bid: number;
  duration: string;
  ended?: boolean;
  resultText?: string;
  win?: boolean;
  rightLabel?: string;
  buttonText?: string;
  onClick?: () => void;
};

export function HistoryCard({
  id,
  title,
  current_price,
  my_bid,
  duration,
  ended = false,
  resultText,
  win,
  rightLabel = "내 입찰가",
  buttonText = "입찰하기",
  onClick,
}: CardProps) {
  const navigate = useNavigate();

  const handleClick = onClick ?? (() => navigate(`/auction/${id}`));

  return (
    <div
      className={`w-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        ended
          ? "bg-gray-50 border border-gray-200"
          : "bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-0.5"
      } shadow-md`}
    >
      <div className="p-5 sm:p-6 flex flex-col gap-5">
        {/* 제목 + 상태 */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`text-base sm:text-lg font-bold line-clamp-2 flex-1 ${
              ended ? "text-gray-600" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          {ended && typeof resultText === "string" && (
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                win ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {resultText}
            </div>
          )}
          {ended && !resultText && (
            <div className="px-3 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-600 whitespace-nowrap">
              종료
            </div>
          )}
        </div>

        {ended ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between py-3 px-4 bg-white rounded-xl border border-gray-200">
              <span className="text-sm font-medium text-gray-500">
                경매 종료
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">
                  {current_price.toLocaleString()}
                </span>
                <span className="text-base font-semibold text-gray-600">
                  잔
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  현재가
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-brand-primary">
                    {current_price.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-brand-primary/70">
                    잔
                  </span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-xs font-medium text-gray-500 mb-2 truncate">
                  {rightLabel}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    {my_bid.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    잔
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-gray-500">
                남은 시간
              </span>
              <span className="text-base font-bold text-gray-900 font-mono">
                {duration}
              </span>
            </div>
          </div>
        )}

        <Button
          variant={ended ? "darkgray" : "primary"}
          className={`w-full h-11 sm:h-12 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm sm:text-base transition-all duration-200 ${
            !ended && "hover:scale-[1.02]"
          }`}
          onClick={handleClick}
        >
          {!ended && <img src={LogoWhite} className="w-4" alt="로고" />}
          <span>{ended ? "경매 보러가기" : buttonText}</span>
        </Button>
      </div>
    </div>
  );
}
