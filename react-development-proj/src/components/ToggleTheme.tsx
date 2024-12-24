// component to switch themes
// currently only toggles between dark and light mode, but will change in the future
// also does not save state between page refresh

import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';
import { useVoice } from "../hooks/useVoice";


export default function ToggleTheme () {
    const { t } = useTranslation();
    const { changeTheme } = useTheme();
    const voiceText = useVoice();

    return(
        <>
            <button onClick={() => changeTheme("light")} onFocus={() => voiceText(t("components.ToggleTheme.light"))}>{t("components.ToggleTheme.light")}</button>
            <button onClick={() => changeTheme("dark")} onFocus={() => voiceText(t("components.ToggleTheme.dark"))}>{t("components.ToggleTheme.dark")}</button>
            <button onClick={() => changeTheme("highContrast")} onFocus={() => voiceText(t("components.ToggleTheme.highContrast"))}>{t("components.ToggleTheme.highContrast")}</button>
        </>
    )
}