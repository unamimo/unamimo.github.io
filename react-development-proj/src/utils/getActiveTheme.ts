import { useTheme } from "../context/ThemeContext";

export function getActiveTheme() {
    const { darkTheme, highContrastTheme } = useTheme();

    if (darkTheme) {
        return 'dark-theme'
    } else if (highContrastTheme) {
        return 'high-contrast-theme'
    } else {
        return 'light-theme'
    }
}