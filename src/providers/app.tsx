import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Reset } from "styled-reset";

import GlobalStyles from "@/libs/styled/global";
import { CartProvider } from "@/stores/CartContext";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Reset />
        <GlobalStyles />
        {children}
      </QueryClientProvider>
    </CartProvider>
  );
};
