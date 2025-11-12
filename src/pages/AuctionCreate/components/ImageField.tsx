// /AuctionCreate/components/ImageField.tsx

import { File as FileIcon } from "@/assets/image";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AuctionCreateFormData } from "../schema";

export const ImageField = () => {
  const { control, watch } = useFormContext<AuctionCreateFormData>();
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // watch를 통해 image 필드의 값을 구독
  const imageValue = watch("image");

  // 이미지 미리보기 - Hook을 최상위에 배치
  useEffect(() => {
    if (!imageValue) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(imageValue);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [imageValue]);

  return (
    <Controller
      name="image" //이미지 필드에 대한 Control
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => {
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
                  <div className="text-base">클릭하여 업로드</div>
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
                // 이벤트 객체에서 파일을 추출해서 form data에 반영시켜야 함
                // 역시 커스텀 onChange 로직을 적용해야 하므로 Controller 적용
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
