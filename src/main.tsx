import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LandingPage from "./CaraLandingPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
