import { isAxiosError } from "axios";
import { api } from "./axios";

export type UserCore = {
  id: number;
  username: string;
};

export type UserProfile = {
  id: number;
  user: UserCore;
  profilepic_id: number | null;
  nickname: string | null;
  remaining_points: number;
  is_social_login: boolean;
};

export async function kakaoSignIn(code: string): Promise<UserProfile | null> {
  try {
    const res = await api.get<UserProfile>("/api/user/kakao/signin/");
    if (res.status === 200) return res.data;
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error("kakaoSignIn error:", e.response?.status, e.response?.data);
    } else {
      console.error("kakaoSignIn unknown error:", e);
    }
  }
  return null;
}

export type AuctionListParams = {
  status?: "active" | "ended" | "cancelled";
  search?: string;
};

export type AuctionListItem = {
  id: number;
  title: string;
  description: string;
  starting_price: number;
  current_price: number;
  image_url: string | null;
  image_file: string | null;
  image_file_url: string | null;
  status: "active" | "ended" | "cancelled";
  end_time: string;
  seller_nickname: string;
  seller_profile_image: string;
  time_remaining: string;
  is_active: string;
  bid_count: string;
};

export type AuctionDetail = {
  id: number;
  title: string;
  description: string;
  starting_price: number;
  current_price: number;
  image_url: string | null;
  image_file: string | null;
  image_file_url: string | null;
  status: "active" | "ended" | "cancelled";
  start_time: string;
  end_time: string;
  seller: number;
  seller_nickname: string;
  seller_profile_image: string;
  winner: number | null;
  created_at: string;
  updated_at: string;
  time_remaining: string;
  is_active: string;
  bid_count: string;
};

export async function getAllAuctions(
  params: AuctionListParams = {},
): Promise<AuctionListItem[]> {
  try {
    const res = await api.get<AuctionListItem[]>("/api/auction/", { params });
    if (res.status === 200) return res.data;
    return [];
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "getAllAuctions error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("getAllAuctions unknown error:", e);
    }
    return [];
  }
}

export async function getRecommendedAuctions(): Promise<AuctionListItem[]> {
  try {
    const res = await api.get<AuctionListItem[]>("/api/auction/recommended/");
    if (res.status === 200) return res.data;
    return [];
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "getRecommendedAuctions error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("getRecommendedAuctions unknown error:", e);
    }
    return [];
  }
}

export async function getAuctionDetail(
  auctionId: number | string,
): Promise<AuctionDetail | null> {
  try {
    const id = encodeURIComponent(String(auctionId));
    const res = await api.get<AuctionDetail>(`/api/auction/${id}/`);
    if (res.status === 200) return res.data;
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "getAuctionDetail error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("getAuctionDetail unknown error:", e);
    }
    return null;
  }
}
