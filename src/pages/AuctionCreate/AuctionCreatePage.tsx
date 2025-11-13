import { Button } from "@/components/Button";
import { auctionCreateSchema, AuctionCreateFormData } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { StartPriceField } from "./components/StartPriceField";
import { ImageField } from "./components/ImageField";
import { DurationField } from "./components/DurationField";
import { useCreateAuction } from "@/hooks/useAuctionMutations";
import { useNavigate } from "react-router-dom";

function AuctionCreatePage() {
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

  const handleSubmit = async (data: AuctionCreateFormData) => {
    try {
      // 종료 시간 계산 (현재 시간 + duration)
      const now = new Date();
      const endTime = new Date(
        now.getTime() +
          data.duration.days * 24 * 60 * 60 * 1000 +
          data.duration.hours * 60 * 60 * 1000 +
          data.duration.minutes * 60 * 1000,
      );

      // API 요청 형식에 맞게 데이터 변환
      const auctionData = {
        title: data.title,
        description: data.description,
        starting_price: data.startPrice,
        image_file: data.image,
        end_time: endTime.toISOString(),
      };

      // 경매 생성 뮤테이션 실행
      const result = await createAuctionMutation.mutateAsync(auctionData);

      // 성공 시 경매 검색 페이지로 이동
      if (result) {
        navigate("/auction");
      }
    } catch (error) {
      console.error("경매 등록 실패:", error);
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
            onSubmit={methods.handleSubmit(handleSubmit)}
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
                  methods.formState.isValid && !createAuctionMutation.isPending
                    ? "primary"
                    : "disabled"
                }
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
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
