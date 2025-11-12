import { z } from "zod";

const onlyAllowed = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;

export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "10자 이내로 입력해주세요.")
    .regex(onlyAllowed, "한글, 숫자, 영문자만 입력해주세요."),
  profileImage: z.string(),
});

export type ProfileSettingFormValues = z.infer<typeof profileSettingSchema>;
