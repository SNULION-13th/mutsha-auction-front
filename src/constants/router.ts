const ROUTES = {
  HOME: {
    ROOT: "/",
  },
  AUCTION: {
    ROOT: "/auction",
    ROOM: "/auction/:auctionId",
  },
  CREATE: {
    ROOT: "/create",
  },
  HISTORY: {
    ROOT: "/history",
  },
  AUTH: {
    ROOT: "/auth",
  },
  PAYMENT: {
    ROOT: "/payment",
    APPROVAL: "/payment/approve",
    ORDER: "/payment/order",
    CANCEL: "/payment/cancel",
    FAIL: "/payment/fail",
  },
};

export type RouteKeys = keyof typeof ROUTES;

export { ROUTES };
