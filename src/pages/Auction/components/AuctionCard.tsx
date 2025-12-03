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
    <div className="w-full flex flex-col bg-white shadow-lg rounded-xl pb-4">
      <img
        src={img}
        className="w-full h-48 md:h-68 object-cover rounded-t-xl"
      />
      <div className="w-full flex flex-col gap-1 md:gap-1.5 px-4 py-3 md:px-6 md:py-5">
        <div className="text-base md:text-lg font-bold text-scale-600 truncate">
          {title}
        </div>
        <div className="text-sm md:text-base text-scale-400 truncate">
          {description}
        </div>
      </div>
      <div className="w-full flex px-4 md:px-6 justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-sm md:text-base font-bold text-scale-400">
            현재 입찰가
          </div>
          <div className="flex gap-1 items-center">
            <img src={Cup} className="w-5 md:w-6" />
            <div className="text-lg md:text-xl font-bold text-brand-primary">
              {current_price}잔
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          className="flex gap-2 p-2 w-24 h-9 md:gap-2.5 md:p-2.5 md:w-27.5 md:h-9.5 items-center justify-center"
          onClick={() => navigate(`/auction/${id}`)}
        >
          <img src={LogoWhite} className="w-3 md:w-4" />
          <div className="text-sm md:text-base font-bold text-bg-white">
            입찰
          </div>
        </Button>
      </div>
    </div>
  );
}
