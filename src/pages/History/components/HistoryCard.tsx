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
      className={`w-full min-h-[200px] flex flex-col rounded-xl shadow-lg px-4 sm:px-8 md:px-15 py-5 sm:py-6 md:py-7.5 gap-4 sm:gap-5 md:gap-6 ${ended ? "bg-scale-100" : "bg-bg-white"}`}
    >
      <div
        className={`text-base sm:text-lg font-bold line-clamp-2 ${ended ? "text-scale-400" : "text-scale-600"}`}
      >
        {title}
      </div>
      {ended ? (
        <div className="w-full flex flex-col gap-2 sm:gap-2.5 flex-grow">
          <div className="w-full flex justify-between items-center gap-2">
            <div className="text-sm sm:text-base font-bold text-scale-400">경매 종료</div>
            <div className="text-lg sm:text-xl font-bold text-scale-600 whitespace-nowrap">
              {current_price}잔
            </div>
          </div>
          {typeof resultText === "string" && (
            <div className="w-full flex justify-between items-center gap-2">
              <div className="text-sm sm:text-base font-bold text-scale-400">결과</div>
              <div
                className={`text-base sm:text-lg font-bold whitespace-nowrap ${win ? "text-[#39A058]" : "text-[#CF5951]"}`}
              >
                {resultText}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 sm:gap-2.5 flex-grow">
          <div className="w-full flex justify-between items-center gap-2">
            <div className="flex gap-1 sm:gap-2 items-center min-w-0">
              <div className="text-xs sm:text-sm md:text-base font-bold text-scale-400 whitespace-nowrap">
                현재 입찰가
              </div>
              <div className="text-base sm:text-lg md:text-xl font-bold text-brand-primary whitespace-nowrap">
                {current_price}잔
              </div>
            </div>
            <div className="text-scale-300 hidden sm:inline">|</div>
            <div className="flex gap-1 sm:gap-2 items-center min-w-0">
              <div className="text-xs sm:text-sm md:text-base font-bold text-scale-400 whitespace-nowrap">
                {rightLabel}
              </div>
              <div className="text-base sm:text-lg font-bold text-scale-600 whitespace-nowrap">{my_bid}잔</div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <div className="text-sm sm:text-base font-bold text-scale-400">남은 시간</div>
            <div className="text-base sm:text-lg font-bold text-scale-600 whitespace-nowrap">{duration}</div>
          </div>
        </div>
      )}
      <Button
        variant={`${ended ? "darkgray" : "primary"}`}
        className="w-full flex gap-2 sm:gap-2.5 rounded-sm p-2 sm:p-2.5 items-center justify-center flex-shrink-0"
        onClick={handleClick}
      >
        {ended ? "" : <img src={LogoWhite} className="w-3 sm:w-4" />}
        <div
          className={`text-sm sm:text-base font-bold ${ended ? "text-scale-300" : "text-bg-white"}`}
        >
          {ended ? "경매 보러가기" : buttonText}
        </div>
      </Button>
    </div>
  );
}
