import { Reset } from "styled-reset";

import { MainLayout } from "./layouts/MainLayout";
import GlobalStyles from "./libs/styled/global";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <MainLayout />
    </>
  );
}

export default App;
