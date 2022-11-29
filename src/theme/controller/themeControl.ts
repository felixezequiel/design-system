import { Colors } from "../../design/principles/color.type";
import { themeDark, themeLight } from "../../design/principles/principles";
import { ThemesName } from "../theme.type";

export class ThemeControl {
  public static instance: ThemeControl;
  private _theme: Colors | undefined;
  private _themes = new Map<ThemesName, Colors>([
    [ThemesName.DARK, themeDark],
    [ThemesName.LIGHT, themeLight],
  ]);

  private constructor() {
    const cacheTheme = localStorage.getItem("ds_theme");

    if (cacheTheme) {
      this._theme = JSON.parse(cacheTheme) as Colors;
    }
  }

  public static getInstance(): ThemeControl {
    if (!this.instance) {
      this.instance = new ThemeControl();
    }

    return this.instance;
  }

  public findTheme(themeName: ThemesName): Colors | undefined {
    return this._themes.get(themeName);
  }

  public get theme(): Colors {
    if (!this._theme) {
      return themeLight;
    }

    return this._theme;
  }

  public set theme(colors: Colors) {
    this._theme = colors;
  }
}
