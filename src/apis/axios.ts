import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const api: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});

export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalRequest = err.config;

    const isRefreshEndpoint = originalRequest?.url?.includes("/user/refresh/");

    if (err.response?.status === 401 && originalRequest && !isRefreshEndpoint) {
      try {
        await api.post("/user/refresh/", {});

        return api.request(originalRequest);
      } catch (refreshError) {
        if (
          refreshError instanceof AxiosError &&
          refreshError.response?.status === 401
        ) {
          return Promise.reject(
            new RefreshTokenExpiredError("Refresh token expired"),
          );
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err instanceof Error ? err : new Error(String(err)));
  },
);

class RefreshTokenExpiredError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RefreshTokenExpiredError";
  }
}

// 스켈레톤 테스트용 코드
const SLOW_MS = 1500;
function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

api.interceptors.response.use(
  async (res) => {
    if (SLOW_MS > 0) await sleep(SLOW_MS);
    return res;
  },
  async (err) => {
    if (SLOW_MS > 0) await sleep(SLOW_MS);
    return Promise.reject(err);
  },
);