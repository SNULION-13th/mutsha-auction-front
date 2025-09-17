import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { MODALS, useModal } from "../hooks/useModal";
import LoginModal from "../components/Modal/LoginModal";
import ProfileSettingModal from "../components/Modal/ProfileSettingModal";

export default function HomeLayout() {
  const { openModal, open, close } = useModal();
  return (
    <div className="w-full bg-bg-default">
      <Header onLoginClick={() => open(MODALS.LOGIN)} />
      <main className="min-h-screen pt-22">
        <Outlet />
      </main>
      <Footer />

      {openModal === MODALS.LOGIN && (
        <LoginModal
          onLogin={() => {
            open(MODALS.PROFILE_SETTING);
          }}
          onClose={close}
        />
      )}
      {openModal === MODALS.PROFILE_SETTING && (
        <ProfileSettingModal onClose={close} />
      )}
    </div>
  );
}
