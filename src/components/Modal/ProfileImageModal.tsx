import { Button } from "../Button";
import ModalLayout from "./ModalLayout";
import {
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
} from "../../assets/image";
import { useState } from "react";

const CANDIDATES = [
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
] as const;

type Props = {
  current?: string;
  onSave: (img: string) => void;
  onClose: () => void;
};

export default function ProfileImageModal({
  current = CANDIDATES[0],
  onSave,
  onClose,
}: Props) {
  const [selected, setSelected] = useState<string>(current);

  return (
    <ModalLayout onClose={onClose}>
      <div className="px-8.5 pt-20 pb-5 flex flex-col gap-15 w-105 items-center">
        <div className="text-2xl font-bold text-scale-600">
          프로필 이미지 고르기
        </div>
        <div className="grid grid-cols-3 px-10 gap-8">
          {CANDIDATES.map((candidate) => {
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
        <Button
          variant="primary"
          onButtonClick={() => {
            onSave(selected);
          }}
          className="w-90 h-14"
        >
          저장하기
        </Button>
      </div>
    </ModalLayout>
  );
}
