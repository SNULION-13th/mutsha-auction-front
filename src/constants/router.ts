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
  ORDER: {
    ROOT: "/orders",
  },
  PAYMENT: {
    ROOT: "/payment",
    APPROVAL: "/payment/approve",
    CANCEL: "/payment/cancel",
    FAIL: "/payment/fail",
  },
};

export type RouteKeys = keyof typeof ROUTES;

export { ROUTES };
