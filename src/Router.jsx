import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants/router";
import HomeLayout from "./layouts/HomeLayout";
import AuctionLayout from "./layouts/AuctionLayout";
import CreateLayout from "./layouts/CreateLayout";
import HistoryLayout from "./layouts/HistoryLayout";

const HomePage = lazy(() => import("@page/HomePage/HomePage"));
const AuctionSearchPage = lazy(() => import("@page/Auction/AuctionSearchPage"));
const AuctionRoomPage = lazy(() => import("@page/Auction/AuctionRoomPage"));
const AuctionCreatePage = lazy(() => import("@page/AuctionCreatePage"));
const HistoryPage = lazy(() => import("@page/HistoryPage"));

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

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: homeRoutes,
  },
  {
    element: <AuctionLayout />,
    children: auctionRoutes,
  },
  {
    element: <CreateLayout />,
    children: createRoutes,
  },
  {
    element: <HistoryLayout />,
    children: historyRoutes,
  },
]);
