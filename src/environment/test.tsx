import React, { useContext } from "react";
import { sizings } from "../design/principles/principles";
import { ThemeControl } from "../theme/controller/themeControl";
import { ThemeContext, ThemeProvider } from "../theme/theme";

export const EnvironmentTest: React.FC = () => {
  const { setTheme, colors, theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div
        style={{
          width: sizings.colossal,
          height: sizings.colossal,
          backgroundColor: colors.default.high.DEFAULT,
        }}
      />
      <button
        onClick={() => {
          if (ThemeControl.getInstance().theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        {theme}
      </button>
    </ThemeProvider>
  );
};
