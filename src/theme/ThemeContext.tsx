import { createContext } from "react";

export enum AppTheme {
  DARK = 'dark',
  LIGHT = 'light'
};

export interface IThemeContextProps {
  theme: AppTheme,
  setTheme: (theme: AppTheme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({
  theme: AppTheme.LIGHT,
  setTheme: function (theme: AppTheme): void {
    throw new Error("Function not implemented.");
  }
});

export const LS_THEME_KEY = 'theme';