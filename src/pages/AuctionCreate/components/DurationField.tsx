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
        {/* 일(days) */}
        <Controller
          name="duration.days"
          control={control}
          render={({ field }) => (
            <DurationControlRenderer
              label="일"
              value={String(field.value ?? "")}
              onChange={(e) =>
                field.onChange(Number(digitsOnly(e.target.value)))
              }
            />
          )}
        />

        {/* 시(hours) */}
        <Controller
          name="duration.hours"
          control={control}
          render={({ field }) => (
            <DurationControlRenderer
              label="시간"
              value={String(field.value ?? "")}
              onChange={(e) =>
                field.onChange(Number(digitsOnly(e.target.value)))
              }
            />
          )}
        />

        {/* 분(minutes) */}
        <Controller
          name="duration.minutes"
          control={control}
          render={({ field }) => (
            <DurationControlRenderer
              label="분"
              value={String(field.value ?? "")}
              onChange={(e) =>
                field.onChange(Number(digitsOnly(e.target.value)))
              }
            />
          )}
        />
      </div>

      {/* 에러 메시지 */}
      {(errors.duration?.days ||
        errors.duration?.hours ||
        errors.duration?.minutes) && (
        <p className="text-point-warning text-base mt-1">
          {errors.duration?.days?.message ||
            errors.duration?.hours?.message ||
            errors.duration?.minutes?.message}
        </p>
      )}
    </div>
  );
};
