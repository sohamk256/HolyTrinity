import React from "react";
import ReactDOM from "react-dom/client";
import { UGFProvider } from "@tychilabs/react-ugf";
import App from "./App";
import "./index.css";

// Initialize Reown AppKit (side-effect import)
import "./config/appkit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UGFProvider mode="testnet">
      <App />
    </UGFProvider>
  </React.StrictMode>
);
