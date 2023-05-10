import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export const ContentLayout = ({ children }: MainLayoutProps) => {
  return <div>{children}</div>;
};
