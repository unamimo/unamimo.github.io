// component to switch themes
// currently only toggles between dark and light mode, but will change in the future
// also does not save state between page refresh

import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';
import { useVoice } from "../hooks/useVoice";


export default function ToggleTheme () {
    const { t } = useTranslation();
    const { toggleDarkTheme, darkTheme, toggleHighContrastTheme, highContrastTheme } = useTheme();
    const voiceText = useVoice();

    return(
        <>
        {/* dark theme button toggle */}
        <button
            onClick={() => toggleDarkTheme()} 
            onFocus={() => voiceText( darkTheme ? (t("components.ToggleTheme.toggle_light_theme")) : (t("components.ToggleTheme.toggle_dark_theme")) )}
        >
            { darkTheme ? (t("components.ToggleTheme.toggle_light_theme")) : (t("components.ToggleTheme.toggle_dark_theme")) }
        </button>

        {/* high contrast button toggle */}
        <button
            onClick={() => toggleHighContrastTheme()} 
            onFocus={() => voiceText( highContrastTheme? (t("components.ToggleTheme.toggle_light_theme")) : ("Toggle high contrast theme") )}
        >
            { highContrastTheme ? (t("components.ToggleTheme.toggle_light_theme")) : ("Toggle high contrast theme") }
        </button>
        </>
    )
}