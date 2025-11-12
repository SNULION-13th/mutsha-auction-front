import { Button } from "@/components/Button";
import { auctionCreateSchema } from "./schema";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DescriptionField } from "./components/DescriptionField";
import { DurationField } from "./components/DurationField";
import { ImageField } from "./components/ImageField";
import { StartPriceField } from "./components/StartPriceField";
import { TitleField } from "./components/TitleField";
import { useNavigate } from "react-router-dom";
import { AuctionCreateFormData } from "./schema";
import { useCreateAuction } from "@/hooks/useAuctionQuery";

function AuctionCreatePage() {
  const navigate = useNavigate();
  const { mutate: createAuction, isPending } = useCreateAuction();

  const methods = useForm({
    resolver: zodResolver(auctionCreateSchema),
    mode: "onTouched",
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

  const handleFormSubmit = (data: AuctionCreateFormData) => {
    createAuction(
      {
        title: data.title,
        description: data.description,
        starting_price: data.startPrice,
        image: data.image,
        duration_days: data.duration.days,
        duration_hours: data.duration.hours,
        duration_minutes: data.duration.minutes,
      },
      {
        onSuccess: (response) => {
          if (response) {
            // 경매 생성 성공 시 경매 목록 페이지로 이동
            navigate("/auction");
          }
        },
      },
    );
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
          {" "}
          <form
            onSubmit={methods.handleSubmit(handleFormSubmit)}
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
                {isPending ? "경매 등록 중…" : "상품 등록하기"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
