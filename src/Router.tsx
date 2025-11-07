import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants/router";
import Layout from "./layouts/Layout";

const HomePage = lazy(() => import("@page/HomePage/HomePage"));
const AuctionSearchPage = lazy(() => import("@page/Auction/AuctionSearchPage"));
const AuctionRoomPage = lazy(() => import("@page/Auction/AuctionRoomPage"));
const AuctionCreatePage = lazy(
  () => import("@/pages/AuctionCreate/AuctionCreatePage"),
);
const AuthPage = lazy(() => import("@page/Auth"));
const PaymentApprovalPage = lazy(
  () => import("@page/Payment/PaymentApprovalPage"),
);
const PaymentCancelPage = lazy(() => import("@page/Payment/PaymentCancelPage"));
const PaymentFailPage = lazy(() => import("@page/Payment/PaymentFailPage"));
const PaymentHistoryPage = lazy(
  () => import("@page/Payment/PaymentHistoryPage"),
);
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

const authRoutes = [
  {
    path: ROUTES.AUTH.ROOT,
    element: <AuthPage />,
  },
];

const historyRoutes = [
  {
    path: ROUTES.HISTORY.ROOT,
    element: <HistoryPage />,
  },
];

const paymentRoutes = [
  {
    path: ROUTES.PAYMENT.APPROVAL,
    element: <PaymentApprovalPage />,
  },
  {
    path: ROUTES.PAYMENT.CANCEL,
    element: <PaymentCancelPage />,
  },
  {
    path: ROUTES.PAYMENT.FAIL,
    element: <PaymentFailPage />,
  },
  {
    path: ROUTES.PAYMENT.HISTORY,
    element: <PaymentHistoryPage />,
  },
];

const appRoutes = [
  ...homeRoutes,
  ...auctionRoutes,
  ...createRoutes,
  ...authRoutes,
  ...paymentRoutes,
  ...historyRoutes,
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: appRoutes,
  },
]);
