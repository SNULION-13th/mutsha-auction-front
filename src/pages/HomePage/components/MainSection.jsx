import { LandingBg } from "../../../assets/image";
import { LogoWhite } from "../../../assets/image";

export function MainSection() {
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
              멋쟁이
              <br />
              시장처럼
            </div>
          </div>
          <div className="text-3xl text-bg-white">
            실시간으로 경매에 참여하고, 바로 낙찰하자!
          </div>
        </div>
      </div>
    </div>
  );
}
