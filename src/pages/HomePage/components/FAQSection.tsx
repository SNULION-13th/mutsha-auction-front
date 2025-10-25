import { useState } from "react";

function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center rounded-xl px-12.5 py-10 shadow-lg w-full bg-bg-white ${isOpen ? "border-2 border-brand-primary ring-4 ring-brand-primary/15" : ""}`}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold truncate">{question}</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className={`transition-transform transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="text-lg text-left mt-4">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const FQAs = [
    {
      question: "Q. 어떻게 경매에 참여하나요?",
      answer:
        "바로 위 블럭 확인 부탁드립니다! 아니면 등록하면서 배워보는 건 어때요?",
    },
    {
      question: "Q. 경매 등록은 무료인가요?",
      answer: "네. 누구든지 경매에 등록할 수 있습니다.",
    },
    {
      question: "Q. 술잔(포인트)은 어떻게 충전하나요?",
      answer:
        "로그인 시 생기는 헤더 프로필 버튼을 누르면 '충전하기' 버튼을 통해 포인트를 충전하실 수 있습니다. 결제는 카카오페이로!",
    },
    {
      question:
        "Q. 네 번째 질문입니다. 만약 QNA가 너무너무 길면 어떡하나요? 전 하고 싶은 말이 너무너무 많은데 이 세상이 저에겐 너무 짧습니다.",
      answer: "말을 줄이자!",
    },
  ];

  return (
    <div className="w-full px-50 py-25">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-15">
        <div className="text-5xl font-bold text-scale-600">FAQs</div>
        <div className="w-full flex flex-col gap-7.5">
          {FQAs.map((fqa) => (
            <FAQAccordion
              key={fqa.question}
              question={fqa.question}
              answer={fqa.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
