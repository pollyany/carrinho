import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import "./index.css";

import CartProvider from "./contexts/CartContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <Toaster position="bottom-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </CartProvider>
);
