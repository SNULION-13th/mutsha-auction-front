import { useNavigate } from "react-router-dom";
import { Phone, Cup, Heart, Hand } from "../../../assets/image";
import { Button } from "../../../components/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type InfoCardProps = {
  image: string;
  title: string;
  description: string;
  detail: string;
};

function InfoCardFront({ image, title, description }: InfoCardProps) {
  return (
    <div className="w-full h-36 flex justify-center items-center rounded-xl p-5 gap-5 shadow-lg bg-white">
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

function InfoCardBack({ detail }: Pick<InfoCardProps, "detail">) {
  return (
    <div
      className="w-full h-36 flex items-center justify-center rounded-xl p-12 gap-5 shadow-lg"
      style={{
        background: "linear-gradient(145deg, #EDDACE, #DF6621)",
        color: "#2b1a10",
      }}
    >
      <div className="text-base leading-relaxed break-keep">{detail}</div>
    </div>
  );
}

function InfoCard({ image, title, description, detail }: InfoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => setIsFlipped((prev) => !prev);

  return (
    <div className="w-full cursor-pointer" onClick={toggleCard}>
      {isFlipped ? (
        <InfoCardBack detail={detail} />
      ) : (
        <InfoCardFront
          image={image}
          title={title}
          description={description}
          detail={detail}
        />
      )}
    </div>
  );
}

export function InfoSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const InfoCards: InfoCardProps[] = [
    {
      image: Phone,
      title: t("info.upload.title"),
      description: t("info.upload.description"),
      detail: t("info.upload.detail"),
    },
    {
      image: Cup,
      title: t("info.alcohol.title"),
      description: t("info.alcohol.description"),
      detail: t("info.alcohol.detail"),
    },
    {
      image: Heart,
      title: t("info.registerComplete.title"),
      description: t("info.registerComplete.description"),
      detail: t("info.registerComplete.detail"),
    },
    {
      image: Hand,
      title: t("info.auctionSettle.title"),
      description: t("info.auctionSettle.description"),
      detail: t("info.auctionSettle.detail"),
    },
  ];

  return (
    <div className="w-full px-50 pt-25">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-15">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <div className="text-5xl font-bold text-scale-600">
              {t("info.section.title")}
            </div>
            <div className="text-2xl text-scale-400">
              {t("info.section.description")}
            </div>
          </div>
          <Button
            variant="primary"
            isRounded={true}
            className="w-62.5"
            onClick={() => navigate("/create")}
          >
            {t("info.section.goToRegister")}
          </Button>
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-full text-center text-xl text-scale-400">
            {t("info.section.howToRegister")}
          </div>
          <div className="w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-scale-200">
            {InfoCards.map((card) => (
              <InfoCard
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
                detail={card.detail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
