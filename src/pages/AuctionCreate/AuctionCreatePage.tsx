import { Button } from "@/components/Button";
import InfoModal from "@/components/Modal/InfoModal";
import { ROUTES } from "@/constants/router";
import { useCreateAuction } from "./hooks/useCreateAuction";
import {
  auctionCreateSchema,
  AuctionCreateFormData,
} from "@/schemas/auctionCreateSchema";
import { buildEndTimeISO } from "@/utils/auction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { ImageUploadField } from "./components/ImageUploadField";
import { StartPriceField } from "./components/StartPriceField";
import { DurationField } from "./components/DurationField";

function AuctionCreatePage() {
  const navigate = useNavigate();
  const createMutation = useCreateAuction();

  const methods = useForm<AuctionCreateFormData>({
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

  const {
    handleSubmit,
    formState,
    reset: resetForm,
    register,
    control,
  } = methods;

  const {
    mutateAsync,
    isSuccess,
    isError,
    reset: resetMutation,
  } = useCreateAuction();

  const onSubmit = async (data: AuctionCreateFormData) => {
    try {
      const endTime = buildEndTimeISO(data.duration);

      await mutateAsync({
        title: data.title,
        description: data.description,
        starting_price: data.startPrice,
        end_time: endTime,
        image_file: data.image,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalConfirm = () => {
    resetMutation();
    resetForm();
    navigate(ROUTES.HISTORY.ROOT);
  };

  const handleModalClose = () => {
    resetMutation();
    resetForm();
  };

  return (
    <div className="w-full px-6 md:px-12 lg:px-24 pc:px-50 py-12 md:py-16 lg:py-20 pc:py-30">
      <div className="max-w-[973px] mx-auto flex flex-col gap-10 md:gap-15 lg:gap-20 pc:gap-25">
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 pc:gap-5 max-pc:items-center">
          <div className="text-2xl md:text-3xl lg:text-4xl pc:text-5xl font-bold text-scale-600 text-center pc:text-left">
            경매 등록하기
          </div>
          <div className="text-base md:text-lg lg:text-xl pc:text-2xl text-scale-400 text-center pc:text-left">
            당신의 애착템, 술잔으로 걸어보세요!
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-2xl bg-bg-white flex flex-col gap-10 md:gap-15 lg:gap-20 pc:gap-25 shadow-xl px-4 md:px-6 lg:px-20 pc:px-35 py-8 md:py-12 lg:py-18 pc:py-22.5"
        >
          <div className="grid grid-cols-1 gap-8 pc:gap-12">
            <TitleField register={register} formState={formState} />
            <DescriptionField register={register} formState={formState} />
            <ImageUploadField control={control} />

            <div className="w-full flex flex-col pc:flex-row justify-between gap-8 pc:gap-10">
              <div className="flex-1 min-w-0">
                <StartPriceField control={control} />
              </div>
              <div className="flex-1 min-w-0">
                <DurationField control={control} formState={formState} />
              </div>
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="w-full flex justify-center">
            <Button
              type="submit"
              variant={formState.isValid ? "primary" : "disabled"}
              disabled={!formState.isValid || createMutation.isPending}
              className="w-full pc:w-80 h-12 pc:h-14"
            >
              {createMutation.isPending ? "등록 중 ..." : "상품 등록하기"}
            </Button>
          </div>
        </form>

        {/* 성공 모달 */}
        <InfoModal
          open={isSuccess}
          onClose={handleModalClose}
          title={"상품 등록이 완료되었어요!\n내 경매에서 확인해 보세요."}
          closeButton="닫기"
          confirmButton="내 경매 보기"
          onConfirm={handleModalConfirm}
        />
        {/* 실패 모달 */}
        <InfoModal
          open={isError}
          onClose={handleModalClose}
          title="등록에 실패했습니다.\n잠시 후 다시 시도해 주세요."
          closeButton="닫기"
          confirmButton="확인"
          onConfirm={handleModalConfirm}
        />
      </div>
    </div>
  );
}

export default AuctionCreatePage;
