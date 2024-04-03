import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { OverlayComponents } from "@components";
import { ErrorBoundary } from "@error-boundary";
import { BrowserRouter } from "react-router-dom";
import Routing from "@routing";
import StoreProvider from "@redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <CssBaseline />
      <StoreProvider>
        <BrowserRouter>
          <OverlayComponents />
          <Routing />
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
