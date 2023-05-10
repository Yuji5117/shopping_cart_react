import { Outlet } from "react-router-dom";

import { ContentLayout } from "./ContentLayout";

export const MainLayout = () => {
  return (
    <div>
      {/* header */}
      <header>header</header>
      {/* content layout */}
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </div>
  );
};
