import { z } from "zod";

// 닉네임 유효성 검사 정규식: 한글, 영문, 숫자만 허용
const NICKNAME_REGEX = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;

export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "10자 이내의 닉네임을 입력해주세요.")
    .regex(NICKNAME_REGEX, "한글, 숫자, 영문자만 입력해주세요."),
  profileImage: z.string().min(1, "프로필 이미지를 선택해주세요."),
});

export type ProfileSettingFormData = z.infer<typeof profileSettingSchema>;
