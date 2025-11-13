import { useFormContext } from "react-hook-form";
import { profileSettingFormData } from "../schema";
import ProfileImageModal from "../ProfileImageModal";
import { PROFILE_IMAGES } from "@/contexts/UserContext";

export const ProfileImageField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<profileSettingFormData>();
  const methods = useFormContext<profileSettingFormData>();

  return (
    <div>
      <ProfileImageModal
        {...register("image")}
        imageCandidates={PROFILE_IMAGES}
        selectedProfileImage={methods.getValues("image")}
        onSave={(img: string) => {
          methods.setValue("image", img, { shouldValidate: true });
        }}
      />
      {errors.image && (
        <p className="text-point-warning text-base mt-1">
          {errors.image.message}
        </p>
      )}
    </div>
  );
};
