import { FC, useMemo, useState } from "react";
import { AppTheme, LS_THEME_KEY, ThemeContext } from "./ThemeContext";

const defaultTheme = () => localStorage.getItem(LS_THEME_KEY) as AppTheme || AppTheme.LIGHT;

export const ThemeProvider: FC<{children: JSX.Element}> = ({children}) => {

  const [theme, setTheme] = useState<AppTheme>(defaultTheme);

  const memoPropsTheme = useMemo(() => ({
      theme,
      setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={memoPropsTheme}>
      {children}
    </ThemeContext.Provider>
  )
}