import { useCallback, useState } from "react";

export const MODALS = {
  LOGIN: "login",
  PROFILE_SETTING: "profile-setting",
  PROFILE_IMAGE: "profile-image",
  PROFILE: "profile",
  POINT_CHARGE: "point-charge",
};

export function useModal() {
  const [openModal, setOpenModal] = useState(null);

  const open = useCallback((type) => setOpenModal(type), []);
  const close = useCallback(() => setOpenModal(null), []);
  const isOpen = useCallback((type) => openModal === type, [openModal]);

  return { openModal, open, close, isOpen };
}
