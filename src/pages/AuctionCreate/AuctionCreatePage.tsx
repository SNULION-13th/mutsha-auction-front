import { Button } from "@/components/Button";
import { auctionCreateSchema, AuctionCreateFormData } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { ImageField } from "./components/ImageField";
import { StartPriceField } from "./components/StartPriceField";
import { DurationField } from "./components/DurationField";
import { useCreateAuction } from "@/hooks/useAuctionMutation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/router";

type Props = {
  onSubmit?: (payload: {
    title: string;
    description: string;
    image: File;
    startPriceCup: number;
    duration: { d: number; h: number; m: number };
  }) => void | Promise<void>;
};

function AuctionCreatePage({ onSubmit }: Props) {
  const navigate = useNavigate();
  const createAuctionMutation = useCreateAuction();

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
            onSubmit={methods.handleSubmit(async (values) => {
              const result = await createAuctionMutation.mutateAsync({
                title: values.title,
                description: values.description,
                startPrice: values.startPrice,
                duration: values.duration,
                image: values.image,
              });

              if (!result) {
                return;
              }

              onSubmit?.({
                title: values.title,
                description: values.description,
                image: values.image,
                startPriceCup: values.startPrice,
                duration: {
                  d: values.duration.days,
                  h: values.duration.hours,
                  m: values.duration.minutes,
                },
              });

              const auctionId = result.id;
              if (!auctionId) {
                return;
              }

              navigate(
                ROUTES.AUCTION.ROOM.replace(":auctionId", String(auctionId)),
              );
            })}
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
                disabled={
                  !methods.formState.isValid || createAuctionMutation.isPending
                }
                className="w-80 h-14"
              >
                {createAuctionMutation.isPending
                  ? "경매 등록 중..."
                  : "상품 등록하기"}
              </Button>
            </div>
            {createAuctionMutation.isError && (
              <p className="text-point-warning text-center text-base">
                경매 등록에 실패했습니다. 잠시 후 다시 시도해주세요.
              </p>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
