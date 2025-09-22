import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants/router";
import Layout from "./layouts/Layout";

const HomePage = lazy(() => import("@page/HomePage/HomePage"));
const AuctionSearchPage = lazy(() => import("@page/Auction/AuctionSearchPage"));
const AuctionRoomPage = lazy(() => import("@page/Auction/AuctionRoomPage"));
const AuctionCreatePage = lazy(() => import("@page/AuctionCreatePage"));
const HistoryPage = lazy(() => import("@page/HistoryPage"));
const AuthPage = lazy(() => import("@page/Auth"));

const homeRoutes = [
  {
    path: ROUTES.HOME.ROOT,
    element: <HomePage />,
  },
];

const auctionRoutes = [
  {
    path: ROUTES.AUCTION.ROOT,
    element: <AuctionSearchPage />,
  },
  {
    path: ROUTES.AUCTION.ROOM,
    element: <AuctionRoomPage />,
  },
];

const createRoutes = [
  {
    path: ROUTES.CREATE.ROOT,
    element: <AuctionCreatePage />,
  },
];

const historyRoutes = [
  {
    path: ROUTES.HISTORY.ROOT,
    element: <HistoryPage />,
  },
];

const authRoutes = [
  {
    path: ROUTES.AUTH.ROOT,
    element: <AuthPage />,
  },
];

const appRoutes = [
  ...homeRoutes,
  ...auctionRoutes,
  ...createRoutes,
  ...historyRoutes,
  ...authRoutes,
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: appRoutes,
  },
]);
