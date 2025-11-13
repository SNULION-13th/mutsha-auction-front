import { Button } from "@/components/Button";
import { auctionCreateSchema, AuctionCreateFormData } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { StartPriceField } from "./components/StartPriceField";
import { ImageField } from "./components/ImageField";
import { DurationField } from "./components/DurationField";
import { useCreateAuction } from "@/hooks/useAuctionQuery";
import { useNavigate } from "react-router-dom";

function AuctionCreatePage() {
  const navigate = useNavigate();
  const { mutateAsync: createAuctionMutation, isPending } = useCreateAuction();

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

  const onSubmit = async (data: AuctionCreateFormData) => {
    try {
      // duration을 end_time으로 변환
      const now = new Date();
      const endTime = new Date(now);
      endTime.setDate(endTime.getDate() + data.duration.days);
      endTime.setHours(endTime.getHours() + data.duration.hours);
      endTime.setMinutes(endTime.getMinutes() + data.duration.minutes);

      const result = await createAuctionMutation({
        title: data.title,
        description: data.description,
        starting_price: data.startPrice,
        image_file: data.image,
        end_time: endTime.toISOString(),
      });

      if (result) {
        // 경매 등록 성공 시 경매 상세 페이지로 이동
        navigate(`/auction/${result.id}`);
      }
    } catch (error) {
      console.error("경매 등록 실패:", error);
      // TODO: 에러 메시지 표시 (토스트 등)
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
                variant={
                  methods.formState.isValid && !isPending
                    ? "primary"
                    : "disabled"
                }
                disabled={!methods.formState.isValid || isPending}
                className="w-80 h-14"
              >
                {isPending ? "경매 등록 중..." : "상품 등록하기"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
