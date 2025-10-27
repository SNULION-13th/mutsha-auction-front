import { RefObject, useState } from "react";
import { Button } from "../Button";
import ModalLayout from "./ModalLayout";
import { Cup } from "@/assets/image";
import { getAllPaymentHistory } from "@/apis/api";
import PaymentHistoryModal from "./PaymentHistoryModal";
type Props = {
  onClose: () => void;
  anchorRef: RefObject<HTMLElement | null>;
  nickname?: string;
  imageSrc?: string;
  points?: number;
  onOpenCharge?: () => void;
  onLogout?: () => void;
};

export default function ProfileModal({
  onClose,
  anchorRef,
  nickname = "닉네임",
  imageSrc,
  points = 0,
  onOpenCharge,
  onLogout,
}: Props) {
  // 여러 건의 결제내역을 배열로 관리
  const [isHistoryOpen, setHistoryOpen] = useState(false);
  const [historyList, setHistoryList] = useState<any[]>([]);

  const handleOpenHistory = async () => {
    const data = await getAllPaymentHistory();
    if (!data || data.length === 0) {
      alert("결제내역이 없습니다.");
      return;
    }
    setHistoryList(data);
    setHistoryOpen(true);
  };

  return (
    <>
      <ModalLayout
        onClose={onClose}
        isProfileModal={true}
        anchorRef={anchorRef}
        offsetY={12}
        minWidthAnchor={false}
      >
        <div className="p-6 flex flex-col gap-5 w-55 border border-brand-secondary rounded-xl">
          <div className="flex items-center gap-2">
            <img
              src={imageSrc ?? "https://via.placeholder.com/80"}
              alt="profile"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="text-lg font-bold text-scale-600">{nickname}</div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-1">
              <img src={Cup} className="w-8.5" />
              <div className="text-lg font-bold text-scale-500">포인트</div>
            </div>
            <div className="text-lg font-bold text-scale-600">
              <span className="text-brand-primary">
                {points.toLocaleString()}
              </span>
              잔
            </div>
          </div>
          <Button
            variant="primary"
            size="small"
            isRounded={true}
            onButtonClick={onOpenCharge}
          >
            충전하기
          </Button>
          <Button
            variant="primary"
            size="small"
            isRounded={true}
            onButtonClick={handleOpenHistory}
          >
            결제내역
          </Button>
          <button
            onClick={onLogout}
            className="flex items-center text-base text-scale-400 underline underline-offset-1"
          >
            로그아웃
          </button>
        </div>
      </ModalLayout>
      {isHistoryOpen && (
        <PaymentHistoryModal
          historyList={historyList}
          onClose={() => setHistoryOpen(false)}
        />
      )}
    </>
  );
}
