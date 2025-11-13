import { z } from "zod";

export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 10자 이내로 입력해주세요.")
    .refine((val) => {
      const onlyAllowed =
        /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;
      return onlyAllowed.test(val);
    }, "닉네임에 특수문자는 사용할 수 없습니다."),

  image: z.string().min(1, "프로필 이미지를 선택해주세요."),
});

export type profileSettingFormData = z.infer<typeof profileSettingSchema>;
