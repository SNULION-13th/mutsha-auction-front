import { useTranslation } from "react-i18next";
import { LandingBg } from "../../../assets/image";
import { LogoWhite } from "../../../assets/image";

export function MainSection() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-215 bg-cover bg-center"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      <div className="w-full h-full px-50 py-50">
        <div className="max-w-[1160px] mx-auto flex flex-col gap-14 h-full justify-center">
          <div className="flex flex-col gap-5">
            <img src={LogoWhite} className="w-18 h-18" />
            <div className="text-6xl font-bold text-bg-white">
              {t("main.great")}
              <br />
              {t("main.likemarket")}
            </div>
          </div>
          <div className="text-3xl text-bg-white">{t("main.description")}</div>
        </div>
      </div>
    </div>
  );
}
