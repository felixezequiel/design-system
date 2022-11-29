import React from "react";
import ReactDOM from "react-dom/client";
import { EnvironmentTest } from "./environment/test";
import { ThemeProvider } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <EnvironmentTest />
    </ThemeProvider>
  </React.StrictMode>
);
