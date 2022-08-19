import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FontStyles from "./fontStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <FontStyles />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
