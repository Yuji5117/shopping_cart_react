import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Reset } from "styled-reset";

import GlobalStyles from "@/libs/styled/global";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <GlobalStyles />
      {children}
    </QueryClientProvider>
  );
};
