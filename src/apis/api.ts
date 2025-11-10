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

export async function signOut(): Promise<boolean> {
  try {
    const res = await api.post("/user/signout/");
    if (res.status === 200) return true;
    return false;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error("signOut error:", e.response?.status, e.response?.data);
    } else {
      console.error("signOut unknown error:", e);
    }
    return false;
  }
}

export async function kakaoSignIn(code: string): Promise<boolean> {
  try {
    const res = await api.get("/user/kakao/callback/", {
      params: { code },
    });
    if (res.status === 200) return true;
    return false;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error("kakaoSignIn error:", e.response?.status, e.response?.data);
    } else {
      console.error("kakaoSignIn unknown error:", e);
    }
  }
  return false;
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
    const res = await api.get<AuctionListItem[]>("/auction/", { params });
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
    const res = await api.get<AuctionListItem[]>("/auction/recommended/");
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
    const res = await api.get<AuctionDetail>(`/auction/${id}/`);
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

export async function getUserInfo(): Promise<UserProfile | null> {
  try {
    const response = await api.get<UserProfile>("/user/me/");
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error("getUserInfo error:", e.response?.status, e.response?.data);
    } else {
      console.error("getUserInfo unknown error:", e);
    }
    return null;
  }
}

export type PaymentReadyRequest = {
  point: string;
  price: string;
};

export type PaymentReadyResponse = {
  tid: string;
  next_redirect_pc_url: string;
  next_redirect_mobile_url: string;
  next_redirect_app_url: string;
  android_app_scheme: string;
  ios_app_scheme: string;
  created_at: string;
};

export async function paymentReady(
  data: PaymentReadyRequest,
): Promise<PaymentReadyResponse | null> {
  try {
    const response = await api.post<PaymentReadyResponse>("/payment/ready/", {
      partner_order_id: `order_${Date.now()}`,
      partner_user_id: "user",
      item_name: data.point,
      quantity: 1,
      total_amount: parseInt(data.price),
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: `${window.location.origin}/payment/approve`,
      cancel_url: `${window.location.origin}/payment/cancel`,
      fail_url: `${window.location.origin}/payment/fail`,
    });

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "paymentReady error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("paymentReady unknown error:", e);
    }
    return null;
  }
}

export async function updateUserProfile(
  nickname: string,
  profilepicId: number,
): Promise<UserProfile | null> {
  try {
    const response = await api.put<UserProfile>("/user/me/", {
      nickname: nickname,
      profilepic_id: profilepicId,
    });
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "updateUserProfile error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("updateUserProfile unknown error:", e);
    }
    return null;
  }
}

export type PaymentApprovalRequest = {
  pg_token: string;
  tid: string;
};

export async function paymentApproval(
  data: PaymentApprovalRequest,
): Promise<boolean> {
  try {
    const response = await api.post("/payment/approve/", {
      pg_token: data.pg_token,
      tid: data.tid,
    });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "paymentApproval error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("paymentApproval unknown error:", e);
    }
    return false;
  }
}

export type PaymentHistoryItem = {
  tid: string;
  item_name: string;
  amount: number;
  payment_method_type: string;
  approved_at: string;
  status: string;
  point: number;
  price: number;
};

export async function getPaymentHistory(): Promise<PaymentHistoryItem[]> {
  try {
    const response = await api.get<PaymentHistoryItem[]>("/payment/history/");
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "[DEBUG] getPaymentHistory error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("[DEBUG] getPaymentHistory unknown error:", e);
    }
    return [];
  }
}

export type BidResponse = {
  id: number;
  auction: number;
  bidder: number;
  bidder_nickname: string;
  amount: number;
  bid_time: string;
};

export async function placeBid(
  auctionId: number | string,
  amount: number,
): Promise<BidResponse | null> {
  try {
    const res = await api.post<BidResponse>(`/auction/${auctionId}/bid/`, {
      amount,
    });
    if (res.status === 201) {
      return res.data;
    }
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error("placeBid error:", e.response?.status, e.response?.data);
    } else {
      console.error("placeBid unknown error:", e);
    }
    return null;
  }
}

// Auction Create
export type CreateAuctionRequest = {
  title: string;
  description: string;
  startPrice: number;
  // ISO8601 종료 시각 (백엔드 계약서 기준)
  endTime: string;
  // 업로드 이미지 파일
  image: File;
};

export type CreateAuctionResponse = AuctionDetail;

export async function createAuction(
  data: CreateAuctionRequest,
): Promise<CreateAuctionResponse | null> {
  try {
    const form = new FormData();
    form.append("title", data.title);
    form.append("description", data.description);
    form.append("starting_price", String(data.startPrice));
    form.append("end_time", data.endTime);
    form.append("image_file", data.image);

    const res = await api.post<CreateAuctionResponse>(
      "/auction/create/",
      form,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );

    if (res.status === 201 || res.status === 200) {
      return res.data;
    }
    return null;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error(
        "createAuction error:",
        e.response?.status,
        e.response?.data,
      );
    } else {
      console.error("createAuction unknown error:", e);
    }
    return null;
  }
}
