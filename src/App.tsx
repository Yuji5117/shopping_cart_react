import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { Reset } from "styled-reset";

import GlobalStyles from "./libs/styled/global";
import { router } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Reset />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
