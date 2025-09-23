import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // 쿠키 포함
});

// 쿠키에서 토큰을 가져오는 함수
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // 쿠키에서 access_token 확인 (withCredentials: true로 쿠키 자동 전송)
  // 백엔드에서 쿠키로 인증하므로 헤더에 별도로 토큰을 설정하지 않음
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    if (err.response?.status === 401) {
      console.warn("토큰 만료 - refresh 시도");

      // refresh token으로 새로운 access token 요청
      const refreshToken = getCookie("refresh_token");
      if (refreshToken) {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/user/refresh/`,
            {
              refresh: refreshToken,
            },
            {
              withCredentials: true,
            },
          );

          if (response.status === 200) {
            return api.request(err.config!);
          }
        } catch (refreshError) {
          console.error("토큰 갱신 실패:", refreshError);
          // 로그아웃 처리
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userProfile");
          localStorage.setItem("isFirstLogin", "false");
          window.location.href = "/";
        }
      } else {
        console.error("refresh token 없음");
        // 로그아웃 처리
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userProfile");
        localStorage.setItem("isFirstLogin", "false");
        window.location.href = "/";
      }
    }
    return Promise.reject(err instanceof Error ? err : new Error(String(err)));
  },
);
