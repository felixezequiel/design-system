import React from "react";
import ReactDOM from "react-dom/client";
import { EnvironmentTest } from "./environment/test";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EnvironmentTest />
  </React.StrictMode>
);
