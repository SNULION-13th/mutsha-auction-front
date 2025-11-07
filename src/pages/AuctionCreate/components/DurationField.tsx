import { digitsOnly } from "@/utils/auction";
import { Controller, useFormContext } from "react-hook-form";
import { AuctionCreateFormData } from "../schema";

const DurationControlRenderer = ({
  label,
  onChange,
  value,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        inputMode="numeric"
        value={value}
        onChange={onChange}
        className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
      />
      <span className="text-3xl pb-1">{label}</span>
    </div>
  );
};

export const DurationField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold text-scale-600">경매 기간</label>
      <div className="flex items-center gap-5 text-scale-500">
        {/* TODO: 날짜 Controller */}

        {/* TODO: 시간 Controller */}

        {/* TODO: 분 Controller */}
      </div>
      {/* TODO: 에러 메시지 */}

      <p className="text-point-warning text-base mt-1">{"에러 메시지"}</p>
    </div>
  );
};
