import { RouterProvider } from "react-router-dom";
import { Reset } from "styled-reset";

import GlobalStyles from "./libs/styled/global";
import { router } from "./routes";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
