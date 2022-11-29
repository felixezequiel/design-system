import React, { createContext, useCallback, useState } from "react";
import { ThemeControl } from "./controller/themeControl";
import { ContextThemeValues, ThemesName } from "./theme.type";

const setTheme = (name: ThemesName) => {
  ThemeControl.getInstance().theme = name;
};

const contextValues: ContextThemeValues = {
  theme: ThemeControl.getInstance().theme,
  colors: ThemeControl.getInstance().colors,
  setTheme,
};

export const ThemeContext = createContext<ContextThemeValues>(contextValues);

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<ContextThemeValues>(contextValues);

  const handleTheme = useCallback((name: ThemesName) => {
    const newTheme = ThemeControl.getInstance().findTheme(name);

    if (!newTheme) {
      return;
    }

    setTheme(name);

    setState((prevState) => {
      return {
        ...prevState,
        colors: ThemeControl.getInstance().colors,
        theme: ThemeControl.getInstance().theme,
      };
    });
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
