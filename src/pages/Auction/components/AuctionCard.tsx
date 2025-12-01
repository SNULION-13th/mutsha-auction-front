import { Cup, LogoWhite } from "@/assets/image";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  id: number;
  img: string;
  title: string;
  description: string;
  current_price: number;
};

export function AuctionCard({
  id,
  img,
  title,
  description,
  current_price,
}: CardProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[27.25rem] flex flex-col bg-white shadow-lg rounded-xl overflow-hidden">
      <img src={img} className="w-full aspect-[4/3] object-cover rounded-t-xl flex-shrink-0" />
      <div className="w-full flex flex-col gap-1.5 px-4 sm:px-6 py-4 sm:py-5 flex-grow">
        <div className="text-base sm:text-lg font-bold text-scale-600 line-clamp-1">{title}</div>
        <div className="text-sm sm:text-base text-scale-400 line-clamp-2">
          {description}
        </div>
      </div>
      <div className="w-full flex px-4 sm:px-6 pb-4 sm:pb-5 justify-between items-center gap-2 flex-shrink-0">
        <div className="flex flex-col gap-1 min-w-0">
          <div className="text-sm sm:text-base font-bold text-scale-400">현재 입찰가</div>
          <div className="flex gap-1 items-center">
            <img src={Cup} className="w-5 sm:w-6 flex-shrink-0" />
            <div className="text-lg sm:text-xl font-bold text-brand-primary whitespace-nowrap">
              {current_price}잔
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          className="flex gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 items-center justify-center flex-shrink-0"
          onClick={() => navigate(`/auction/${id}`)}
        >
          <img src={LogoWhite} className="w-3 sm:w-4" />
          <div className="text-sm sm:text-base font-bold text-bg-white">입찰</div>
        </Button>
      </div>
    </div>
  );
}
