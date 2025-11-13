import { useState } from "react";

import { Edit } from "../../assets/image";
import { Button } from "../Button";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";

import { PROFILE_IMAGES } from "@/contexts/UserContext";

type Props = {
  imageCandidates: typeof PROFILE_IMAGES;
  selectedProfileImage: string;
  onSave: (img: string) => void;
};

export default function ProfileImageModal({
  imageCandidates,
  selectedProfileImage,
  onSave,
}: Props) {
  const [selected, setSelected] = useState<string>(selectedProfileImage);

  return (
    <Dialog>
      <DialogPortal />
      <DialogTrigger asChild>
        <button
          className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
          aria-label="edit profile image"
        >
          <img src={Edit} className="w-9 h-9" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-105">
        <div className="px-8.5 pt-20 pb-5 flex flex-col gap-15 items-center">
          <div className="text-2xl font-bold text-scale-600">
            프로필 이미지 고르기
          </div>
          <div className="grid grid-cols-3 px-10 gap-8">
            {imageCandidates.map((candidate) => {
              const isSel = selected === candidate;
              return (
                <button
                  key={candidate}
                  onClick={() => {
                    setSelected(candidate);
                  }}
                  className={`group relative w-20 h-20 rounded-full overflow-hidden ${isSel ? "ring-4 ring-brand-primary" : "ring-0"}`}
                >
                  <img src={candidate} className="w-full h-full object-cover" />
                  <span
                    className={`absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity ${isSel ? "opacity-100" : ""}`}
                  />
                </button>
              );
            })}
          </div>
          <DialogClose asChild>
            <Button
              variant="primary"
              onClick={() => {
                onSave(selected);
              }}
              className="w-90 h-14"
            >
              저장하기
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
