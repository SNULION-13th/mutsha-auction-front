# 구현 내용 요약

## 과제 1: React Hook Form + Zod를 이용한 프로필 설정 폼

### 새로 생성한 파일

1. **`src/components/Modal/schema.ts`**
   - Zod 스키마 정의: `profileSettingSchema`
   - 닉네임 유효성 검사 (1-10자, 한글/영문/숫자만)
   - 프로필 이미지 필드
   - 타입: `ProfileSettingFormData`

### 수정한 파일

1. **`src/components/Modal/ProfileSettingModal.tsx`**
   - `useState` → `useForm` (React Hook Form)
   - 수동 유효성 검사 로직 제거
   - `zodResolver` 적용
   - `register`, `watch`, `setValue`, `reset` 사용
   - 에러 메시지 자동 처리

### 주요 개선 사항

- verbose한 상태 관리 코드 제거 (onlyAllowed, tooLong, invalidChars, empty, showWarning, canSubmit)
- 유효성 검사를 Zod로 위임
- 폼 상태 관리를 React Hook Form으로 일원화

---

## 과제 2: Tanstack Query를 이용한 경매 등록 API 연결

### 새로 생성한 파일

1. **`src/hooks/useAuctionQuery.ts`**
   - `useCreateAuction` hook 생성
   - Tanstack Query의 `useMutation` 사용
   - 성공 시 경매 리스트 캐시 자동 갱신

### 수정한 파일

1. **`src/apis/api.ts`**
   - `CreateAuctionRequest`, `CreateAuctionResponse` 타입 정의
   - `createAuction` 함수 구현
   - duration을 `end_time`으로 계산하여 전송
   - FormData로 이미지 파일 업로드
   - 엔드포인트: `POST /api/auction/create/`

2. **`src/pages/AuctionCreate/AuctionCreatePage.tsx`**
   - `useCreateAuction` hook 연결
   - `handleFormSubmit` 함수로 실제 API 호출
   - `isPending` 상태로 로딩 처리
   - 버튼 텍스트: "상품 등록하기" → "경매 등록 중…"
   - 성공 시 `/auction` (경매 목록 페이지)로 이동

3. **`src/pages/AuctionCreate/components/ImageField.tsx`** (버그 수정)
   - `useEffect`를 `render` 함수 밖으로 이동 (React Hook 규칙 준수)
   - `watch("image")`로 이미지 필드 구독
   - 이미지 미리보기 기능 수정

### 문제 해결 과정

1. **405 에러**: 엔드포인트를 `/auction/` → `/auction/create/`로 수정
2. **400 에러**: `duration_*` 필드 대신 계산된 `end_time` 전송
3. **이미지 미리보기 버그**: Hook 위치 수정

---

## 변경된 파일 목록

### 새로 생성

- `src/components/Modal/schema.ts`
- `src/hooks/useAuctionQuery.ts`

### 수정

- `src/components/Modal/ProfileSettingModal.tsx`
- `src/apis/api.ts`
- `src/pages/AuctionCreate/AuctionCreatePage.tsx`
- `src/pages/AuctionCreate/components/ImageField.tsx`
