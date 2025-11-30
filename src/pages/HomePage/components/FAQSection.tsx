import { useState, useTransition } from "react";
import { useTranslation } from "react-i18next";

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
      className={`flex flex-col justify-center rounded-xl px-4 md:px-6 lg:px-10 pc:px-12.5 py-4 md:py-6 lg:py-8 pc:py-10 shadow-lg w-full bg-bg-white ${isOpen ? "border-2 border-brand-primary ring-4 ring-brand-primary/15" : ""}`}
    >
      <div className="flex justify-between items-start">
        <div className="text-sm md:text-base lg:text-lg pc:text-xl font-bold flex-1 pr-4">{question}</div>
        <button onClick={() => setIsOpen(!isOpen)} className="shrink-0">
          <svg
            className={`transition-transform transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } cursor-pointer`}
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
          <div className="text-sm md:text-base lg:text-base pc:text-lg text-left mt-4">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const { t } = useTranslation();
  const FQAs = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
  ];

  return (
    <div className="w-full px-6 md:px-12 lg:px-24 pc:px-50 py-12 md:py-15 lg:py-20 pc:py-25">
      <div className="max-w-[1160px] mx-auto flex flex-col max-pc:items-center gap-8 md:gap-10 lg:gap-12 pc:gap-15">
        <div className="text-2xl md:text-3xl lg:text-4xl pc:text-5xl font-bold text-scale-600">
          FAQs
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-5 lg:gap-6 pc:gap-7.5">
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
