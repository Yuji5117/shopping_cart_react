import { Outlet } from "react-router-dom";

import { ContentLayout } from "./ContentLayout";

import { Header } from "@/components/Header";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </div>
  );
};
