import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Cup } from "@/assets/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import PointChargeModalButton from "./PointChargeModal";
import ProfileSettingModalButton from "./ProfileSettingModal";
import { useUser } from "@/contexts/UserContext";

export default function ProfileDropdown() {
  const { logout, user } = useUser();
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="gray">{"프로필"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="p-6 flex flex-col gap-5 w-55 border border-brand-secondary rounded-xl bg-white"
      >
        <ProfileSettingModalButton />
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-1">
            <img src={Cup} className="w-8.5" />
            <div className="text-lg font-bold text-scale-500">포인트</div>
          </div>
          <div className="text-lg font-bold text-scale-600">
            <Link to="/payment/history" className="text-brand-primary">
              {user?.points}
            </Link>
            잔
          </div>
        </div>
        <PointChargeModalButton />
        <button
          className="flex items-center text-base text-scale-400 underline underline-offset-1 cursor-pointer"
          onClick={async () => {
            await logout();
            //로그아웃 후 home으로 이동
            navigate("/");
          }}
        >
          로그아웃
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
