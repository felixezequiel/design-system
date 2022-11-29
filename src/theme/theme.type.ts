import { Colors } from "../design/principles/color.type";

export type ThemesName = "light" | "dark";

export type Theme = {
  [key in ThemesName]: Colors;
};

export interface ContextThemeValues {
  theme: ThemesName;
  colors: Colors;
  setTheme(name: ThemesName): void;
}
