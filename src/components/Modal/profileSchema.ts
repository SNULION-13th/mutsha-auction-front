import { z } from "zod";

export const profileSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 최대 10자까지 가능합니다.")
    .regex(
      /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
      "한글, 영어, 숫자만 사용 가능합니다.",
    ),
  profileImage: z.string().min(1, "프로필 이미지를 선택해주세요."),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
