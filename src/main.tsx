import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import * as browser from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  const { worker } = browser;
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
