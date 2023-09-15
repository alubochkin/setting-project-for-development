import {useContext} from "react";
import {LS_THEME_KEY, AppTheme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: AppTheme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK
        setTheme(newTheme);
        localStorage.setItem(LS_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme,
    }
}
