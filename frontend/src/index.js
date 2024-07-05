import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

// Soft UI Context Provider
import { PowerControllerProvider } from "context";

// react-perfect-scrollbar component
import PerfectScrollbar from "react-perfect-scrollbar";

// react-perfect-scrollbar styles
import "react-perfect-scrollbar/dist/css/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <PowerControllerProvider>
      <PerfectScrollbar>
        <App />
      </PerfectScrollbar>
    </PowerControllerProvider>
  </BrowserRouter>
);
