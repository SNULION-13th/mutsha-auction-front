import { useEffect, useState } from "react";
import {
  getPaymentHistory,
  PaymentHistoryItem,
  PaymentHistoryResponse,
} from "@/apis/api";
import { numberCommaFormatter } from "@/utils/number";

export default function PaymentHistoryPage() {
  const [history, setHistory] = useState<PaymentHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response: PaymentHistoryResponse = await getPaymentHistory();

        // 백엔드 응답 구조에 맞게 수정
        if (response && response.data && Array.isArray(response.data)) {
          setHistory(response.data);
          setError(null);
        } else {
          setHistory([]);
        }
      } catch (err) {
        setError("결제 내역을 불러오는데 실패했습니다.");
        setHistory([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getPaymentMethodText = (method: "CARD" | "MONEY") => {
    switch (method) {
      case "CARD":
        return "카드";
      case "MONEY":
        return "현금";
      default:
        return method;
    }
  };

  const formatAmount = (amount: number | string | object) => {
    try {
      let numAmount: number;

      if (amount === null || amount === undefined) {
        return "0";
      }

      if (typeof amount === "string") {
        const cleanAmount = amount.trim();
        if (cleanAmount === "") {
          return "0";
        }
        numAmount = parseFloat(cleanAmount);
      } else if (typeof amount === "number") {
        numAmount = amount;
      } else if (typeof amount === "object") {
        // 일반적인 객체 구조들 처리
        if ("value" in amount && typeof amount.value === "number") {
          numAmount = amount.value;
        } else if ("amount" in amount && typeof amount.amount === "number") {
          numAmount = amount.amount;
        } else if ("total" in amount && typeof amount.total === "number") {
          numAmount = amount.total;
        } else if ("price" in amount && typeof amount.price === "number") {
          numAmount = amount.price;
        } else {
          // 객체의 첫 번째 숫자 값 찾기
          const values = Object.values(amount);
          const firstNumber = values.find((val) => typeof val === "number");
          if (firstNumber !== undefined) {
            numAmount = firstNumber as number;
          } else {
            return "0";
          }
        }
      } else {
        return "0";
      }

      // NaN 체크
      if (isNaN(numAmount)) {
        return "0";
      }

      // 음수 체크
      if (numAmount < 0) {
        return "0";
      }

      return numberCommaFormatter(numAmount);
    } catch (error) {
      return "0";
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-[1200px] mx-auto px-17.5 py-10">
        <div className="flex justify-center items-center h-96">
          <div className="text-2xl text-scale-400">
            결제 내역을 불러오는 중...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-[1200px] mx-auto px-17.5 py-10">
        <div className="flex justify-center items-center h-96">
          <div className="text-2xl text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-17.5 py-10">
      {/* 페이지 헤더 */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-scale-600 mb-2">결제 내역</h1>
        <p className="text-xl text-scale-400">
          지금까지의 모든 결제 내역을 확인하실 수 있습니다.
        </p>
      </div>

      {/* 결제 내역 목록 */}
      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 bg-bg-white rounded-2xl border border-scale-200">
          <div className="text-3xl text-scale-300 mb-4">💳</div>
          <div className="text-2xl font-bold text-scale-400 mb-2">
            결제 내역이 없습니다
          </div>
          <div className="text-lg text-scale-300">
            아직 결제한 내역이 없습니다.
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item, index) => (
            <div
              key={index}
              className="bg-bg-white rounded-2xl border border-scale-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-between items-start">
                {/* 왼쪽: 상품 정보 */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                      <span className="text-bg-white text-xl font-bold">
                        💳
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-scale-600 mb-1">
                        {item.item_name}
                      </h3>
                      <div className="text-sm text-scale-400">
                        {formatDate(item.approved_at)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 오른쪽: 결제 정보 */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-brand-primary mb-2">
                    ₩{formatAmount(item.amount)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-scale-100 text-scale-600 rounded-lg text-sm font-medium">
                      {getPaymentMethodText(item.payment_method_type)}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
                      결제완료
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 통계 정보 */}
      {history.length > 0 && (
        <div className="mt-10 bg-bg-white rounded-2xl border border-scale-200 p-6">
          <h2 className="text-xl font-bold text-scale-600 mb-4">결제 통계</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-1">
                {history.length}
              </div>
              <div className="text-scale-400">총 결제 건수</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-1">
                ₩
                {formatAmount(
                  history.reduce((sum, item) => {
                    let amount: number;

                    if (typeof item.amount === "string") {
                      amount = parseFloat(item.amount);
                    } else if (typeof item.amount === "number") {
                      amount = item.amount;
                    } else if (typeof item.amount === "object") {
                      // 객체에서 숫자 값 추출
                      if (
                        "value" in item.amount &&
                        typeof item.amount.value === "number"
                      ) {
                        amount = item.amount.value;
                      } else if (
                        "amount" in item.amount &&
                        typeof item.amount.amount === "number"
                      ) {
                        amount = item.amount.amount;
                      } else if (
                        "total" in item.amount &&
                        typeof item.amount.total === "number"
                      ) {
                        amount = item.amount.total;
                      } else if (
                        "price" in item.amount &&
                        typeof item.amount.price === "number"
                      ) {
                        amount = item.amount.price;
                      } else {
                        const values = Object.values(item.amount);
                        const firstNumber = values.find(
                          (val) => typeof val === "number",
                        );
                        amount = (firstNumber as number) || 0;
                      }
                    } else {
                      amount = 0;
                    }

                    return sum + (isNaN(amount) ? 0 : amount);
                  }, 0),
                )}
              </div>
              <div className="text-scale-400">총 결제 금액</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-1">
                ₩
                {formatAmount(
                  Math.round(
                    history.reduce((sum, item) => {
                      let amount: number;

                      if (typeof item.amount === "string") {
                        amount = parseFloat(item.amount);
                      } else if (typeof item.amount === "number") {
                        amount = item.amount;
                      } else if (typeof item.amount === "object") {
                        // 객체에서 숫자 값 추출
                        if (
                          "value" in item.amount &&
                          typeof item.amount.value === "number"
                        ) {
                          amount = item.amount.value;
                        } else if (
                          "amount" in item.amount &&
                          typeof item.amount.amount === "number"
                        ) {
                          amount = item.amount.amount;
                        } else if (
                          "total" in item.amount &&
                          typeof item.amount.total === "number"
                        ) {
                          amount = item.amount.total;
                        } else if (
                          "price" in item.amount &&
                          typeof item.amount.price === "number"
                        ) {
                          amount = item.amount.price;
                        } else {
                          const values = Object.values(item.amount);
                          const firstNumber = values.find(
                            (val) => typeof val === "number",
                          );
                          amount = (firstNumber as number) || 0;
                        }
                      } else {
                        amount = 0;
                      }

                      return sum + (isNaN(amount) ? 0 : amount);
                    }, 0) / history.length,
                  ),
                )}
              </div>
              <div className="text-scale-400">평균 결제 금액</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
