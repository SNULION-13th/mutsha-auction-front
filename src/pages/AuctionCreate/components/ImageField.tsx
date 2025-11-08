import { File as FileIcon } from "@/assets/image";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AuctionCreateFormData } from "../schema";

export const ImageField = () => {
  const { control } = useFormContext<AuctionCreateFormData>();
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Controller
      name="image"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        // 이미지 미리보기
        useEffect(() => {
          if (!value) {
            setPreview(null);
            return;
          }
          const url = URL.createObjectURL(value);
          setPreview(url);
          return () => URL.revokeObjectURL(url);
        }, [value]);

        return (
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold text-scale-600">사진</label>
            <div
              onClick={() => inputRef.current?.click()}
              className={`w-full h-[320px] rounded-md border ${
                preview ? "border-transparent" : "border-scale-200"
              } overflow-hidden cursor-pointer flex items-center justify-center`}
              title={preview ? "클릭하여 다른 사진으로 변경" : "클릭 "}
            >
              {!preview ? (
                <div className="flex flex-col items-center gap-4 text-scale-300">
                  <img src={FileIcon} className="w-16 opacity-60" />
                  <div className="text-base">
                    클릭하여 업로드 또는 드래그 앤 드롭
                  </div>
                </div>
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              )}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onChange(file);
                  }
                }}
              />
            </div>
            {error && (
              <p className="text-point-warning text-base mt-1">
                {error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};
