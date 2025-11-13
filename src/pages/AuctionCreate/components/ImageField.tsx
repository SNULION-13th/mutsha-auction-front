import { File as FileIcon } from "@/assets/image";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AuctionCreateFormData } from "../schema";

type ImageFieldProps = {
  onImageChange: (file: File | null) => void;
};

export const ImageField = ({ onImageChange }: ImageFieldProps) => {
  const { control } = useFormContext<AuctionCreateFormData>();
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Controller
      name="image" //이미지 필드에 대한 Control
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        // 이미지 미리보기
        useEffect(() => {
          if (!value) {
            setPreview(null);
            onImageChange(null); // 부모에게 null 전달
            return;
          }
          const url = URL.createObjectURL(value);
          setPreview(url);
          onImageChange(value); // 부모에게 파일 전달
          return () => URL.revokeObjectURL(url);
        }, [value]);

        return (
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold text-scale-600">사진</label>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
              }}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="border rounded p-2"
            >
              이미지 선택
            </button>
            {preview && (
              <img
                src={preview}
                alt="미리보기"
                className="w-full max-w-md h-auto rounded mt-2"
              />
            )}
            {error && (
              <p className="text-point-warning text-base">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};
