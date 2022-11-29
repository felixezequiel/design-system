import { Colors } from "../../design/principles/color.type";
import { themeDark, themeLight } from "../../design/principles/principles";
import { ThemesName } from "../theme.type";

export class ThemeControl {
  public static instance: ThemeControl;

  private _theme: ThemesName;

  private _colors: Colors;

  private _themes = new Map<ThemesName, Colors>([
    ["dark", themeDark],
    ["light", themeLight],
  ]);

  private constructor() {
    const name = localStorage.getItem("ds_theme") as ThemesName | undefined;

    if (name) {
      this._theme = name;

      const colors = this.findTheme(name);

      if (colors) {
        this._colors = colors;
      } else {
        this._colors = themeLight;
      }
    } else {
      this._theme = "light";
      this._colors = themeLight;
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

  public get theme(): ThemesName {
    return this._theme;
  }

  public set theme(name: ThemesName) {
    this._theme = name;
    this.colors = this.findTheme(name) || this.colors;

    localStorage.setItem("ds_theme", name);
  }

  public set colors(colors: Colors) {
    this._colors = colors;
  }

  public get colors(): Colors {
    return this._colors;
  }
}
