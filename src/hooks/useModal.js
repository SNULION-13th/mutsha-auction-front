import React, { createContext, useCallback, useContext, useState } from "react";

export const MODALS = {
  LOGIN: "login",
  PROFILE_SETTING: "profile-setting",
  PROFILE_IMAGE: "profile-image",
  PROFILE: "profile",
  POINT_CHARGE: "point-charge",
};

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(null);
  const open = useCallback((type) => setOpenModal(type), []);
  const close = useCallback(() => setOpenModal(null), []);
  const isOpen = useCallback((type) => openModal === type, [openModal]);

  const value = { openModal, open, close, isOpen };
  return React.createElement(ModalContext.Provider, { value }, children);
}

export function useModal() {
  const ctx = useContext(ModalContext);

  return ctx;
}
