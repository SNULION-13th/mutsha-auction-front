import { Cup, File } from "@/assets/image";
import { Button } from "@/components/Button";
import { auctionCreateSchema, type AuctionCreateFormData } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { ImageField } from "./components/ImageField";
import { StartPriceField } from "./components/StartPriceField";
import { DurationField } from "./components/DurationField";
import { createAuction } from "@/apis/api";
import { useNavigate } from "react-router-dom";

function AuctionCreatePage() {
  const navigate = useNavigate();

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

  const handleSubmitForm = async (data: AuctionCreateFormData) => {
    const now = new Date();
    const totalMs =
      data.duration.days * 24 * 60 * 60 * 1000 +
      data.duration.hours * 60 * 60 * 1000 +
      data.duration.minutes * 60 * 1000;

    const endTime = new Date(now.getTime() + totalMs);
    const endTimeIso = endTime.toISOString();

    const auction = await createAuction({
      title: data.title,
      description: data.description,
      startingPrice: data.startPrice,
      endTime: endTimeIso,
      imageFile: data.image ? data.image : null,
    });

    if (auction) {
      navigate("/auction/");
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
            onSubmit={methods.handleSubmit(handleSubmitForm)}
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
                  methods.formState.isValid && !methods.formState.isSubmitting
                    ? "primary"
                    : "disabled"
                }
                disabled={
                  !methods.formState.isValid || methods.formState.isSubmitting
                }
                className="w-80 h-14"
              >
                {methods.formState.isSubmitting
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
