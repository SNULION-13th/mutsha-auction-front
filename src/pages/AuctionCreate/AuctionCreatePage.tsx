import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { DescriptionField } from "./components/DescriptionField";
import { DurationField } from "./components/DurationField";
import { ImageField } from "./components/ImageField";
import { StartPriceField } from "./components/StartPriceField";
import { TitleField } from "./components/TitleField";
import { AuctionCreateFormData, auctionCreateSchema } from "./schema";

import { createAuction, AuctionForm } from "@/apis/api";
import { Button } from "@/components/Button";

function AuctionCreatePage() {
  const navigate = useNavigate();
  const methods = useForm<AuctionCreateFormData>({
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

  const mutation = useMutation({
    mutationFn: (data: AuctionForm) => createAuction(data),
    onSuccess: (data) => {
      if (data) {
        console.log("경매 등록 성공:", data);
        // 성공 후 경매 상세 페이지로 이동
        navigate(`/auction/${data.id}`);
      }
    },
    onError: (error) => {
      console.error("경매 등록 실패:", error);
      // TODO: 사용자에게 에러를 표시하는 UI 추가 (예: Toast)
    },
  });

  const onSubmit = (data: AuctionCreateFormData) => {
    const now = new Date();
    const endTime = new Date(
      now.getTime() +
        data.duration.days * 24 * 60 * 60 * 1000 +
        data.duration.hours * 60 * 60 * 1000 +
        data.duration.minutes * 60 * 1000,
    );

    const payload: AuctionForm = {
      title: data.title,
      description: data.description,
      starting_price: data.startPrice,
      end_time: endTime.toISOString(),
      image_file: data.image,
    };

    mutation.mutate(payload);
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
                variant={
                  methods.formState.isValid && !mutation.isPending
                    ? "primary"
                    : "disabled"
                }
                disabled={!methods.formState.isValid || mutation.isPending}
                className="w-80 h-14"
              >
                {mutation.isPending ? "등록 중..." : "상품 등록하기"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
