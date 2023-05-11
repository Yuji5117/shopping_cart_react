import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { Cart } from "@/pages/Cart";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart/", element: <Cart /> },
    ],
  },
]);
