import { PropsWithChildren, useEffect, useRef } from "react";
import { Close } from "../../assets/image";
import { createPortal } from "react-dom";

type Props = PropsWithChildren<{
  onClose?: () => void;
  hasOverlay?: boolean;
}>;

export default function ModalLayout({
  children,
  onClose,
  hasOverlay = true,
}: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[999]">
      {hasOverlay && (
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      )}
      <div
        ref={contentRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-bg-white shadow-2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          aria-label="close"
          className="absolute right-7 top-7 p-2 cursor-pointer"
          onClick={onClose}
        >
          <img src={Close} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
