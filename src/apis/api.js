// API 인스턴스 설정
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const kakaoSignIn = async (data) => {
  try {
    const response = await instance.post(
      "/api/user/kakao/callback/?code=" + data.code,
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

// 경매 관련 API
export const getRecommendedAuctions = async () => {
  try {
    const response = await instance.get("/api/auction/recommended/");
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.error("API 호출 실패:", e);
    console.error("에러 상세:", e.response?.data);
    return [];
  }
};

export const getAllAuctions = async (params = {}) => {
  try {
    const response = await instance.get("/api/auction/", { params });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getAuctionDetail = async (auctionId) => {
  try {
    const response = await instance.get(`/api/auction/${auctionId}/`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
