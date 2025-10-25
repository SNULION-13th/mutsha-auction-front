import { Cup } from "@/assets/image";
import ModalLayout from "./ModalLayout";
import { Button } from "../Button";
import { numberCommaFormatter } from "@/utils/number";
import { paymentReady } from "@/apis/api";

type Props = {
  onClose: () => void;
  onCharge: (amount: number) => void;
};

type ComponentProps = {
  cup: number;
  money: number;
  onSelect: (cup: number) => void;
};

function PointCharge({ cup, money /*, onSelect*/ }: ComponentProps) {
  const handlePayment = async () => {
    // 로그인 상태 확인
    const token =
      localStorage.getItem("access_token") ||
      document.cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("access_token="))
        ?.split("=")[1];

    if (!token) {
      alert("로그인이 필요합니다. 먼저 로그인해주세요.");
      return;
    }

    try {
      const response = await paymentReady({
        point: cup.toString(),
        price: money.toString(),
      });
      if (response) {
        localStorage.setItem("tid", response.tid);
        window.location.href = response.next_redirect_pc_url;
      }
    } catch (error: any) {
      console.error("결제 준비 실패:", error);
      if (error.response?.status === 401) {
        alert("로그인이 필요합니다. 먼저 로그인해주세요.");
      } else {
        alert("결제 준비에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={Cup} className="w-10" />
        <div className="text-xl font-bold text-scale-500">{cup} 잔</div>
      </div>
      <Button
        variant="primary"
        isRounded={true}
        className="text-lg font-regular px-10 py-3"
        onButtonClick={handlePayment}
      >
        ₩ {numberCommaFormatter(money)}
      </Button>
    </div>
  );
}

export default function PointChargeModal({ onClose /*, onCharge*/ }: Props) {
  return (
    <ModalLayout onClose={onClose}>
      <div className="flex flex-col items-center px-8 py-15 w-133 gap-12.5">
        <div className="text-2xl font-bold text-scale-600">포인트 충전하기</div>
        <div className="flex flex-col gap-9 w-full">
          <PointCharge cup={10} money={10000} onSelect={() => {}} />
          <PointCharge cup={30} money={30000} onSelect={() => {}} />
          <PointCharge cup={50} money={50000} onSelect={() => {}} />
          <PointCharge cup={100} money={90000} onSelect={() => {}} />
        </div>
      </div>
    </ModalLayout>
  );
}
