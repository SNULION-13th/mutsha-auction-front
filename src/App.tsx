import { RouterProvider } from "react-router-dom";

import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import { router } from "./Router";

import { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분동안 데이터를 캐시로 유지
      refetchOnWindowFocus: false,
      retry: 1, // 실패 시 1번 재시도
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Suspense fallback={null}>
          <RouterProvider router={router} />
        </Suspense>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
