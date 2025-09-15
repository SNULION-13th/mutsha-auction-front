import { lazy } from "react";

import { createBrowserRouter, Outlet } from "react-router-dom";

import { ROUTES } from "./constants/router";

const HomePage = lazy(() => import("@page/HomePage"));
const AuctionSearchPage = lazy(() => import("@page/Auction/AuctionSearchPage"));
const AuctionRoomPage = lazy(() => import("@page/Auction/AuctionRoomPage"));
const AuctionCreatePage = lazy(() => import("@page/AuctionCreatePage"));
const HistoryPage = lazy(() => import("@page/HistoryPage"));

const homeRoutes = [
  {
    path: ROUTES.HOME.ROOT,
    Component: HomePage,
  },
];

const auctionRoutes = [
  {
    path: ROUTES.AUCTION.ROOT,
    Component: AuctionSearchPage,
  },
  {
    path: ROUTES.AUCTION.ROOM,
    Component: AuctionRoomPage,
  },
];

const createRoutes = [
  {
    path: ROUTES.CREATE.ROOT,
    Component: AuctionCreatePage,
  },
];

const historyRoutes = [
  {
    path: ROUTES.HISTORY.ROOT,
    Component: HistoryPage,
  },
];

export const router = createBrowserRouter([
  {
    Component: Outlet,
    children: homeRoutes,
  },
  {
    Component: Outlet,
    children: auctionRoutes,
  },
  {
    Component: Outlet,
    children: createRoutes,
  },
  {
    Component: Outlet,
    children: historyRoutes,
  },
]);
