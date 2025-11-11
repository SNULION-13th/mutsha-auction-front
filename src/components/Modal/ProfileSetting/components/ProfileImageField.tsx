import { useFormContext } from "react-hook-form";
import ProfileImageModal from "../../ProfileImageModal";
import { PROFILE_IMAGES } from "@/contexts/UserContext";

export default function ProfileImageField() {
  const { watch, setValue, formState } = useFormContext();

  // watch로 이미지 변경 시 미리보기 갱신
  const selectedProfileImage = watch("profileImage");

  return (
    <div className="mx-auto relative w-28 h-28 flex flex-col items-center">
      <img
        src={selectedProfileImage}
        className="w-28 h-28 rounded-full object-cover"
      />

      <ProfileImageModal
        imageCandidates={PROFILE_IMAGES}
        selectedProfileImage={selectedProfileImage ?? ""}
        onSave={(selected) =>
          setValue("profileImage", selected, { shouldValidate: true })
        }
      />

      {formState.errors.profileImage && (
        <p className="text-sm text-red-500 mt-2">
          {formState.errors.profileImage.message as string}
        </p>
      )}
    </div>
  );
}
