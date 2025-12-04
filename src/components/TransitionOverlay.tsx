import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type TransitionScenario = "not-highest" | "highest" | "win" | "lose";

type Props = {
  open: boolean;
  scenario: TransitionScenario;
  onDone: () => void;
};

const MESSAGE: Record<TransitionScenario, string> = {
  "not-highest":
    "아쉽지만 다른 분이 더 높은 금액을 제시했어요.\n다시 도전해보시겠어요?",
  highest: "멋져요! 현재 최고 입찰자예요 🎉\n모두가 당신을 따라오고 있어요.",
  win: "축하합니다! 경매에서 최종 승자가 되셨어요 🏆\n멋진 선택이에요.",
  lose: "아쉽네요... 이번에는 다른 분이 낙찰을 가져갔어요.\n다음 경매에서는 꼭 성공하실 거예요!",
};

const DEFAULT_DURATION_MS = 1800;

export default function TransitionOverlay({ open, scenario, onDone }: Props) {
  const [durationMs] = useState(DEFAULT_DURATION_MS);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onDone, durationMs);
    return () => clearTimeout(t);
  }, [open, durationMs, onDone]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="mb-6 rounded-2xl bg-white/5 border border-white/20 px-6 py-4 text-sm text-bg-white">
          {scenario === "highest" && "현재 최고 입찰자 상태입니다."}
          {scenario === "not-highest" && "입찰 순위가 밀린 상태입니다."}
          {scenario === "win" && "낙찰 성공! 🎉"}
          {scenario === "lose" && "낙찰 실패…"}
        </div>
        <div className="whitespace-pre-line text-center text-bg-white text-2xl pc:text-4xl font-bold leading-snug">
          {MESSAGE[scenario]}
        </div>
      </div>
    </div>,
    document.body,
  );
}
