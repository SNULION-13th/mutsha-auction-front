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
      className={`w-full h-full flex flex-col rounded-xl shadow-lg p-4 md:p-6 lg:px-15 lg:py-7.5 gap-4 md:gap-6 ${
        ended ? "bg-scale-100" : "bg-bg-white"
      }`}
    >
      <div
        className={`text-base md:text-lg font-bold truncate ${
          ended ? "text-scale-400" : "text-scale-600"
        }`}
      >
        {title}
      </div>
      {ended ? (
        <div className="w-full h-full flex flex-col gap-2.5">
          <div className="w-full flex justify-between items-center">
            <div className="text-sm md:text-base font-bold text-scale-400">
              경매 종료
            </div>
            <div className="text-base md:text-xl font-bold text-scale-600">
              {current_price}잔
            </div>
          </div>
          {typeof resultText === "string" && (
            <div className="w-full flex justify-between items-center">
              <div className="text-sm md:text-base font-bold text-scale-400">
                결과
              </div>
              <div
                className={`text-base md:text-lg font-bold ${
                  win ? "text-[#39A058]" : "text-[#CF5951]"
                }`}
              >
                {resultText}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2.5">
          <div className="w-full flex flex-wrap justify-between items-center gap-x-4">
            <div className="flex gap-2 items-center">
              <div className="text-sm md:text-base font-bold text-scale-400">
                현재 입찰가
              </div>
              <div className="text-base md:text-xl font-bold text-brand-primary">
                {current_price}잔
              </div>
            </div>
            <div className="hidden sm:block text-scale-300">|</div>
            <div className="flex gap-2 items-center">
              <div className="text-sm md:text-base font-bold text-scale-400">
                {rightLabel}
              </div>
              <div className="text-base md:text-lg font-bold text-scale-600">
                {my_bid}잔
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="text-sm md:text-base font-bold text-scale-400">
              남은 시간
            </div>
            <div className="text-base md:text-lg font-bold text-scale-600">
              {duration}
            </div>
          </div>
        </div>
      )}
      <Button
        variant={`${ended ? "darkgray" : "primary"}`}
        className="w-full flex gap-2.5 rounded-sm p-2.5 items-center justify-center mt-auto"
        onClick={handleClick}
      >
        {ended ? null : <img src={LogoWhite} className="w-4" />}
        <div
          className={`text-sm md:text-base font-bold ${
            ended ? "text-scale-300" : "text-bg-white"
          }`}
        >
          {ended ? "경매 보러가기" : buttonText}
        </div>
      </Button>
    </div>
  );
}