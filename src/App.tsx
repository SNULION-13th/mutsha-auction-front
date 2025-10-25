import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { Suspense } from "react";
import { ModalProvider } from "./hooks/useModal";

function App() {
  return (
    <ModalProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ModalProvider>
  );
}

export default App;
