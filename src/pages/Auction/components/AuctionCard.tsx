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
    <div className="w-full flex flex-col bg-white shadow-lg rounded-xl">
      <img
        src={img}
        className="w-full aspect-video object-cover rounded-t-xl"
      />
      <div className="w-full flex flex-col gap-1.5 px-4 pc:px-6 py-4 pc:py-5">
        <div className="text-base pc:text-lg font-bold text-scale-600">
          {title}
        </div>
        <div className="text-sm pc:text-base text-scale-400 truncate max-w-full">
          {description}
        </div>
      </div>
      <div className="w-full flex px-4 pc:px-6 pb-4 justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-sm pc:text-base font-bold text-scale-400">
            현재 입찰가
          </div>
          <div className="flex gap-1 items-center">
            <img src={Cup} className="w-5 pc:w-6" />
            <div className="text-lg pc:text-xl font-bold text-brand-primary">
              {current_price}잔
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          className="flex gap-2 p-2 pc:p-2.5 items-center justify-center"
          onClick={() => navigate(`/auction/${id}`)}
        >
          <img src={LogoWhite} className="w-3 pc:w-4" />
          <div className="text-sm pc:text-base font-bold text-bg-white">입찰</div>
        </Button>
      </div>
    </div>
  );
}
