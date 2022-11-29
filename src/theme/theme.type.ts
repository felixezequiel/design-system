import { Colors } from "../design/principles/color.type";

export enum ThemesName {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = {
  [key in ThemesName]: Colors;
};

export interface ContextThemeValues {
  theme: Colors;
  setTheme(name: ThemesName): void;
}
