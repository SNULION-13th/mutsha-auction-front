import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

export const MODALS = {
  LOGIN: "login",
  PROFILE_SETTING: "profile-setting",
  PROFILE_IMAGE: "profile-image",
  PROFILE: "profile",
  POINT_CHARGE: "point-charge",
} as const;

export type ModalType = (typeof MODALS)[keyof typeof MODALS];

type ModalContextValue = {
  openModal: ModalType | null;
  open: (type: ModalType) => void;
  close: () => void;
  isOpen: (type: ModalType) => boolean;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: PropsWithChildren) {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);
  const open = useCallback((type: ModalType) => setOpenModal(type), []);
  const close = useCallback(() => setOpenModal(null), []);
  const isOpen = useCallback(
    (type: ModalType) => openModal === type,
    [openModal],
  );

  const value: ModalContextValue = { openModal, open, close, isOpen };
  return React.createElement(ModalContext.Provider, { value }, children);
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return ctx;
}
