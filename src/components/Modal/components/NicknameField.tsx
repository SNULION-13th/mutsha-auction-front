import { useFormContext } from "react-hook-form";
import { profileSettingFormData } from "../schema";

export const NicknameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<profileSettingFormData>();

  return (
    <div>
      <input
        {...register("nickname")}
        placeholder="닉네임(최대 10자)"
        className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
      />
      {errors.nickname && (
        <p className="text-point-warning text-base mt-1">
          {errors.nickname.message}
        </p>
      )}
    </div>
  );
};
