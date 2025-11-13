import { z } from "zod";

// 프로필 설정 스키마
export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 10자 이하여야 합니다.")
    .regex(
      /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
      "한글, 숫자, 영문자만 입력 가능합니다."
    ),
  profileImage: z.string(),
});

export type ProfileSettingFormData = z.infer<typeof profileSettingSchema>;
