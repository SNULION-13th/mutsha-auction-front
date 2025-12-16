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
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="fixed top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-10 md:py-12 lg:py-16">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-brand-primary to-orange-600 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg mb-4 sm:mb-5 md:mb-6">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 tracking-tight px-4">
            경매 등록하기
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            당신의 애착템, 술잔으로 걸어보세요
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="h-1.5 sm:h-2 bg-gradient-to-r from-brand-primary via-orange-500 to-amber-500"></div>

            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-100">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-brand-primary/10 rounded-lg flex-shrink-0">
                    <span className="text-brand-primary font-bold text-xs sm:text-sm">
                      1
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    기본 정보
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <TitleField register={register} formState={formState} />
                  <DescriptionField register={register} formState={formState} />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-100">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-brand-primary/10 rounded-lg flex-shrink-0">
                    <span className="text-brand-primary font-bold text-xs sm:text-sm">
                      2
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    상품 이미지
                  </h2>
                </div>

                <ImageUploadField control={control} />
              </div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-100">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-brand-primary/10 rounded-lg flex-shrink-0">
                    <span className="text-brand-primary font-bold text-xs sm:text-sm">
                      3
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    경매 설정
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="space-y-2">
                    <StartPriceField control={control} />
                  </div>
                  <div className="space-y-2">
                    <DurationField control={control} formState={formState} />
                  </div>
                </div>
              </div>

              {/* 제출 버튼 - 반응형 강화 */}
              <div className="pt-4 sm:pt-6 md:pt-8">
                <Button
                  type="submit"
                  variant={formState.isValid ? "primary" : "disabled"}
                  disabled={!formState.isValid || createMutation.isPending}
                  className="w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:hover:scale-100 disabled:hover:shadow-lg"
                >
                  {createMutation.isPending ? (
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <svg
                        className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>등록 중...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>상품 등록하기</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-blue-50 border border-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 flex sm:block justify-center">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2 text-center sm:text-left">
                경매 등록 안내
              </h3>
              <ul className="text-xs sm:text-sm text-blue-800 space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    등록된 경매는 수정할 수 없으니 신중하게 작성해주세요
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    경매 시작 후에는 취소가 불가능합니다
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    상품 설명을 자세히 작성할수록 입찰 참여율이 높아집니다
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <InfoModal
          open={isSuccess}
          onClose={handleModalClose}
          title={"상품 등록이 완료되었어요!\n내 경매에서 확인해 보세요."}
          closeButton="닫기"
          confirmButton="내 경매 보기"
          onConfirm={handleModalConfirm}
        />
        <InfoModal
          open={isError}
          onClose={handleModalClose}
          title="등록에 실패했습니다.\n잠시 후 다시 시도해 주세요."
          closeButton="닫기"
          confirmButton="확인"
          onConfirm={handleModalConfirm}
        />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default AuctionCreatePage;
