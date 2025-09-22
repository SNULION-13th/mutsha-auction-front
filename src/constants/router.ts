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
};

export type RouteKeys = keyof typeof ROUTES;

export { ROUTES };
