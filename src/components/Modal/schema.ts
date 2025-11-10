import { z } from "zod";

export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: "닉네임(최소 1자)" })
    .max(10, { message: "닉네임(최대 10자)" })
    .regex(
      /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
      "*10자 이내의 한글, 숫자, 영문자를 입력해주세요.",
    ),
  profileImageId: z.number().min(1, "프로필 이미지 고르기"),
});

export type ProfileSettingFormData = z.infer<typeof profileSettingSchema>;
