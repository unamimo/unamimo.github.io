import { useTheme } from "../context/ThemeContext";

// converts value to corressponding CSS class name

export function getActiveTheme() {
    const { theme } = useTheme();

    if (theme == 'dark') {
        return 'dark-theme'
    } else if (theme == 'highContrast') {
        return 'high-contrast-theme'
    } else {
        return 'light-theme'
    }
}