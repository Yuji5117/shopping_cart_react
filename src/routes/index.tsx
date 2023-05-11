import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { Cart, Home, NotFound } from "@/pages";

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
