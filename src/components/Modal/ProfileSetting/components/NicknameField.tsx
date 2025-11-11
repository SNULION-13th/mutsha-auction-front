import { useFormContext } from "react-hook-form";

export default function NicknameField() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-3">
      <input
        {...register("nickname")}
        placeholder="닉네임(최대 10자)"
        className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
      />
      {errors.nickname && (
        <p className="text-sm text-red-500">
          {errors.nickname.message as string}
        </p>
      )}
    </div>
  );
}
