import React, { createContext, Provider, useCallback, useState } from "react";
import { ThemeControl } from "./controller/themeControl";
import { ContextThemeValues, ThemesName } from "./theme.type";

const theme = ThemeControl.getInstance().theme;

const setTheme = (name: ThemesName) => {
  const theme = ThemeControl.getInstance().findTheme(name);
  if (theme) {
    ThemeControl.getInstance().theme = theme;
  }
};

const contextValues: ContextThemeValues = {
  theme,
  setTheme,
};

export const ThemeContext = createContext<ContextThemeValues>(contextValues);

interface Props {
  children?: JSX.Element;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<ContextThemeValues>(contextValues);

  const handleTheme = useCallback((name: ThemesName) => {
    const newTheme = ThemeControl.getInstance().findTheme(name);

    if (newTheme) {
      setState((prevState) => {
        return {
          ...prevState,
          theme: newTheme,
        };
      });
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        setTheme: handleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
