import ModalLayout from "./ModalLayout";

type PaymentHistoryItem = {
  item_name: string;
  amount: number;
  payment_method_type: string;
  approved_at: string;
};

export type PaymentHistoryModalProps = {
  onClose: () => void;
  historyList: PaymentHistoryItem[];
};

export default function PaymentHistoryModal({
  onClose,
  historyList,
}: PaymentHistoryModalProps) {
  return (
    <ModalLayout onClose={onClose}>
      <div className="flex flex-col items-center px-8 py-15 w-133 max-h-96 gap-6 overflow-y-auto">
        <div className="text-2xl font-bold text-scale-600 mb-4">결제 내역</div>
        {historyList.length === 0 ? (
          <div className="text-scale-400">결제 내역이 없습니다.</div>
        ) : (
          historyList.map((item, idx) => (
            <div
              key={item.item_name + idx}
              className="flex flex-col w-full p-4 mb-4 border rounded-lg bg-white shadow"
            >
              <div className="text-base font-bold text-brand-primary mb-2">
                {idx + 1}
              </div>
              <div className="text-base">
                <b>상품명:</b> {item.item_name}
              </div>
              <div className="text-base">
                <b>금액:</b> {item.amount.toLocaleString()}원
              </div>
              <div className="text-base">
                <b>결제수단:</b> {item.payment_method_type}
              </div>
              <div className="text-base">
                <b>승인시간:</b>{" "}
                {item.approved_at ? item.approved_at.replace("T", " ") : ""}
              </div>
            </div>
          ))
        )}
      </div>
    </ModalLayout>
  );
}
