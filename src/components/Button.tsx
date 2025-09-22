import { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

const sizeClass = {
  small: "px-3 py-1.5 text-base",
  large: "px-5 py-3 text-xl",
} as const;

const roundClass = {
  small: "rounded-[10px]",
  large: "rounded-[50px]",
} as const;

const variantClass = {
  primary: "bg-brand-primary text-bg-white",
  outlined: "bg-bg-white border border-2 border-text-tertiary text-text-title",
  gray: "bg-button-primary text-text-subtitle",
  kakao: "bg-point-kakao text-text-title",
  disabled: "bg-brand-secondary text-[#C5B6AD]",
} as const;

type Size = keyof typeof sizeClass;
type Variant = keyof typeof variantClass;

type Props = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  isRounded?: boolean;
  onButtonClick?: () => void;
}>;

export function Button({
  children,
  className,
  disabled = false,
  variant = "primary",
  size = "large",
  isRounded = false,
  onButtonClick,
}: Props) {
  const buttonClass = cn(
    "font-bold cursor-pointer",
    className,
    sizeClass[size],
    isRounded ? roundClass["large"] : roundClass["small"],
    variantClass[disabled ? "disabled" : variant],
  );

  return (
    <button className={buttonClass} onClick={onButtonClick}>
      {children}
    </button>
  );
}
