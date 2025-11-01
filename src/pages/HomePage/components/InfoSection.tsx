import { useNavigate } from "react-router-dom";
import { Phone, Cup, Heart, Hand } from "../../../assets/image";
import { Button } from "../../../components/Button";

function InfoCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full flex items-center bg-bg-white rounded-xl p-5 gap-5 shadow-lg">
      <div className="w-25 h-25 shrink-0">
        <img src={image} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="text-xl text-scale-600 font-bold">{title}</div>
        <div className="text-base text-scale-400 flex-1 truncate">
          {description}
        </div>
      </div>
    </div>
  );
}

export function InfoSection() {
  const navigate = useNavigate();

  const InfoCards = [
    {
      image: Phone,
      title: "상품 올리기",
      description: "상품의 사진을 찍어 올려요",
    },
    {
      image: Cup,
      title: "술잔 걸기",
      description: "시작가를 술잔으로 정해요",
    },
    {
      image: Heart,
      title: "등록 완료",
      description: "올리면 바로 경매 시작!",
    },
    {
      image: Hand,
      title: "낙찰 정산",
      description: "낙찰 시 술잔이 적립돼요",
    },
  ];

  return (
    <div className="w-full px-50 pt-25">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-15">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <div className="text-5xl font-bold text-scale-600">
              경매 등록하기
            </div>
            <div className="text-2xl text-scale-400">
              당신의 애착템, 술잔으로 걸어보세요!
            </div>
          </div>
          <Button
            variant="primary"
            isRounded={true}
            className="w-62.5"
            onClick={() => navigate("/create")}
          >
            경매 등록하러 가기
          </Button>
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-full text-center text-xl text-scale-400">
            어떻게 등록할 수 있나요?
          </div>
          <div className="w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-scale-200">
            {InfoCards.map((card) => (
              <InfoCard
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
