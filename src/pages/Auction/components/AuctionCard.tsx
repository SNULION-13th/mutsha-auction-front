import { LogoWhite } from "@/assets/image";
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
    <div
      className="w-full flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
      onClick={() => navigate(`/auction/${id}`)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            <span className="text-xs font-semibold text-gray-700">
              입찰 진행중
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5 lg:p-6 gap-4">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 line-clamp-1 hover:text-brand-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm lg:text-base text-gray-500 line-clamp-2 leading-relaxed min-h-[40px]">
          {description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 font-medium">현재가</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl lg:text-3xl font-bold text-brand-primary">
                {current_price?.toLocaleString()}
              </span>
              <span className="text-base lg:text-lg font-semibold text-brand-primary/70">
                잔
              </span>
            </div>
          </div>

          <Button
            variant="primary"
            className="px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl font-semibold text-sm lg:text-base hover:scale-105 transition-transform shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/auction/${id}`);
            }}
          >
            입찰하기
          </Button>
        </div>
      </div>
    </div>
  );
}
