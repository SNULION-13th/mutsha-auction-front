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
    <div className="w-full pc:h-109 flex flex-col bg-white shadow-lg rounded-xl">
      <img src={img} className="w-full h-48 pc:h-68 object-cover rounded-t-xl" />
      <div className="w-full flex flex-col gap-1.5 px-4 md:px-5 lg:px-6 py-3 md:py-4 lg:py-5">
        <div className="text-sm md:text-base lg:text-base pc:text-lg font-bold text-scale-600">{title}</div>
        <div className="text-xs md:text-sm lg:text-sm pc:text-base text-scale-400 truncate max-w-70">
          {description}
        </div>
      </div>
      <div className="w-full flex px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 justify-between items-center gap-2 md:gap-3">
        <div className="flex flex-col gap-1">
          <div className="text-xs md:text-sm lg:text-sm pc:text-base font-bold text-scale-400">현재 입찰가</div>
          <div className="flex gap-1 items-center">
            <img src={Cup} className="w-4 md:w-5 lg:w-5 pc:w-6" />
            <div className="text-base md:text-lg lg:text-lg pc:text-xl font-bold text-brand-primary">
              {current_price}잔
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          className="flex gap-1 md:gap-1.5 lg:gap-2 p-1 md:p-1.5 lg:p-2 w-18 md:w-20 lg:w-22 pc:w-27.5 h-7 md:h-8 lg:h-9 pc:h-9.5 items-center justify-center shrink-0"
          onClick={() => navigate(`/auction/${id}`)}
        >
          <img src={LogoWhite} className="w-3 md:w-3.5 lg:w-3.5 pc:w-4 shrink-0" />
          <div className="font-bold text-bg-white text-[10px] md:text-xs lg:text-sm pc:text-base whitespace-nowrap">입찰</div>
        </Button>
      </div>
    </div>
  );
}
