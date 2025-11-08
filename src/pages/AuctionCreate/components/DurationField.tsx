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
        <Controller<AuctionCreateFormData, "duration.days">
          name="duration.days"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DurationControlRenderer
              label="d"
              onChange={(e) => {
                const digits = digitsOnly(e.target.value);
                const num = digits ? Number(digits) : 0;
                onChange(Math.min(num, 365));
              }}
              value={String(value)}
            />
          )}
        />
        {/* TODO: 시간 Controller */}
        <Controller<AuctionCreateFormData, "duration.hours">
          name="duration.hours"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DurationControlRenderer
              label="h"
              onChange={(e) => {
                const digits = digitsOnly(e.target.value);
                const num = digits ? Number(digits) : 0;
                onChange(Math.min(num, 23));
              }}
              value={String(value).padStart(2, "0")}
            />
          )}
        />
        {/* TODO: 분 Controller */}
        <Controller
          name="duration.minutes"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DurationControlRenderer
              label="m"
              onChange={(e) => {
                const digits = digitsOnly(e.target.value);
                const num = digits ? Number(digits) : 0;
                onChange(Math.min(num, 59));
              }}
              value={String(value).padStart(2, "0")}
            />
          )}
        />
      </div>
      {errors.duration && (
        <p className="text-point-warning text-base mt-1">
          {errors.duration.message}
        </p>
      )}
    </div>
  );
};
