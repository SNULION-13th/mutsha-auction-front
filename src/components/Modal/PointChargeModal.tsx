import { Cup } from "@/assets/image";
import ModalLayout from "./ModalLayout";
import { Button } from "../Button";
import { numberCommaFormatter } from "@/utils/number";

type Props = {
  onClose: () => void;
  onCharge: (amount: number) => void;
};

type ComponentProps = {
  cup: number;
  money: number;
  onSelect: (cup: number) => void;
};

function PointCharge({ cup, money, onSelect }: ComponentProps) {
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
        onButtonClick={() => onSelect(cup)}
      >
        ₩ {numberCommaFormatter(money)}
      </Button>
    </div>
  );
}

export default function PointChargeModal({ onClose, onCharge }: Props) {
  return (
    <ModalLayout onClose={onClose}>
      <div className="flex flex-col items-center px-8 py-15 w-133 gap-12.5">
        <div className="text-2xl font-bold text-scale-600">포인트 충전하기</div>
        <div className="flex flex-col gap-9 w-full">
          <PointCharge cup={10} money={10000} onSelect={onCharge} />
          <PointCharge cup={30} money={30000} onSelect={onCharge} />
          <PointCharge cup={50} money={50000} onSelect={onCharge} />
          <PointCharge cup={100} money={90000} onSelect={onCharge} />
        </div>
      </div>
    </ModalLayout>
  );
}
