import { createContext } from "react"

export enum Theme {
    LIGHT = 'normal',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

// Переменная с названием пункта в local storage, в котором хранится текущая тема
export const LOCAL_STORAGE_THEME_KEY = 'theme'