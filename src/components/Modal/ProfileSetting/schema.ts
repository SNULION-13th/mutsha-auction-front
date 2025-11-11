import { z } from "zod";

const MAX_LENGTH = 10; // Assuming a max length for nickname

const onlyAllowed = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]*$/;
// Regex for alphanumeric and Korean characters

export const ProfileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: "닉네임을 입력해주세요." }) // empty check
    .max(MAX_LENGTH, {
      message: `닉네임은 ${MAX_LENGTH}자 이내로 입력해주세요.`,
    }) // tooLong check
    .refine((val) => onlyAllowed.test(val), {
      message: "닉네임은 한글, 영어, 숫자만 입력 가능합니다.", // invalidChars check
    }),

  profileImage: z.string().min(1, { message: "프로필 이미지를 선택해주세요." }),
});
