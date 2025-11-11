// src/pages/AuctionCreatePage.tsx
import { useNavigate } from "react-router-dom";
import { useCreateAuction } from "@/hooks/mutations/useAuctionCreateMutation";
import { Button } from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auctionCreateSchema } from "./schema";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { ImageField } from "./components/ImageField";
import { StartPriceField } from "./components/StartPriceField";
import { DurationField } from "./components/DurationField";
import z from "zod";

// ⏰ end_time 계산 함수
function getEndTime(duration: {
  days: number;
  hours: number;
  minutes: number;
}) {
  const end = new Date();
  end.setDate(end.getDate() + duration.days);
  end.setHours(end.getHours() + duration.hours);
  end.setMinutes(end.getMinutes() + duration.minutes);
  return end.toISOString();
}

export default function AuctionCreatePage() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCreateAuction();

  const methods = useForm({
    resolver: zodResolver(auctionCreateSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      description: "",
      startPrice: 0,
      duration: { days: 10, hours: 0, minutes: 0 },
      image: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof auctionCreateSchema>) => {
    const res = await mutateAsync({
      title: data.title,
      description: data.description,
      starting_Price: data.startPrice,
      durationDays: data.duration.days,
      durationHours: data.duration.hours,
      durationMinutes: data.duration.minutes,
      image: data.image,
    });

    if (res) {
      navigate(`/auction/${res.id}`); // 등록 후 상세 페이지 이동
    }
  };

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
            onSubmit={methods.handleSubmit(onSubmit)}
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
                disabled={!methods.formState.isValid || isPending}
                className="w-80 h-14"
              >
                {isPending ? "경매 등록 중…" : "상품 등록하기"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
