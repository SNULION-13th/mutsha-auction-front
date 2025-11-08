import { Cup, File } from "@/assets/image";
import { Button } from "@/components/Button";
import { auctionCreateSchema } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { StartPriceField } from "./components/StartPriceField";
import { ImageField } from "./components/ImageField";
import { DurationField } from "./components/DurationField";

type Props = {
  onSubmit?: (payload: {
    title: string;
    description: string;
    image: File;
    startPriceCup: number;
    duration: { d: number; h: number; m: number };
  }) => void | Promise<void>;
};

function digitsOnly(v: string) {
  return v.replace(/\D+/g, "");
}

function clampNum(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function AuctionCreatePage({ onSubmit }: Props) {
  const methods = useForm({
    resolver: zodResolver(auctionCreateSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      startPrice: 0,
      duration: {
        days: 10,
        hours: 0,
        minutes: 0,
      },
    },
  });

  return (
    <div className="w-full px-50 py-30">
      <div className="max-w-[973px] mx-auto flex flex-col gap-25">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-bold text-scale-600">경매 등록하기</div>
          <div className="text-2xl text-scale-400">
            당신의 애착템, 술잔으로 걸어보세요!
          </div>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) =>
              console.log("폼 데이터 제출", data),
            )}
            className="w-full rounded-2xl bg-bg-white flex flex-col gap-25 shadow-xl px-35 py-22.5"
          >
            <div className="grid grid-cols-1 gap-12">
              <TitleField />
              <DescriptionField />
              <ImageField />
              <div className="w-full flex gap-38">
                <StartPriceField />
                <DurationField />
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className="w-full flex justify-center">
              <Button
                type="submit"
                variant={methods.formState.isValid ? "primary" : "disabled"}
                disabled={!methods.formState.isValid}
                className="w-80 h-14"
              >
                상품 등록하기
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
