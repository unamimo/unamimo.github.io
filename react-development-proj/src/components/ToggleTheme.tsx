// component to switch themes
// currently only toggles between dark and light mode, but will change in the future
// also does not save state between page refresh

import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';
import { useVoice } from "../hooks/useVoice";


export default function ToggleTheme () {
    const { t } = useTranslation();
    const { toggleTheme, darkTheme } = useTheme();
    const voiceText = useVoice();

    return(
        <>
        {
            darkTheme ? (
                <button onClick={() => toggleTheme()} onFocus={() => voiceText(t("components.ToggleTheme.toggle_light_theme"))}>
                    {t("components.ToggleTheme.toggle_light_theme")}
                </button>
            ) : (
                <button onClick={() => toggleTheme()} onFocus={() => voiceText(t("components.ToggleTheme.toggle_dark_theme"))}>
                {t("components.ToggleTheme.toggle_dark_theme")}
                </button>
            )
        }
        </>
    )
}