// component to switch themes
// currently only toggles between dark and light mode, but will change in the future
// also does not save state between page refresh

import { useTheme } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';
import { useVoice } from "../hooks/useVoice";
import { useState } from "react";


export default function ToggleTheme () {
    const { t } = useTranslation();
    const { changeTheme } = useTheme();
    const voiceText = useVoice();
    const [ selectedTheme, setSelectedTheme ] = useState("light");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // handles value change
        setSelectedTheme(event.target.value);
        // changes theme
        changeTheme(event.target.value);
        // voice the value of whatever is currently selected
        voiceText(t("components.ToggleTheme."+event.target.value))
    }

    return(
        <>
        <label>
            {/* Narrator does not work for select component, this is not ideal */}
            <select value={selectedTheme} onChange={handleChange} onFocus={() => voiceText(t("pages.config.theme_settings"))}>
                <option
                    value={"light"} 
                >
                    {t("components.ToggleTheme.light")}
                </option>
                <option 
                    value={"dark"} 
                >
                    {t("components.ToggleTheme.dark")}
                </option>
                <option 
                    value={"highContrast"} 
                >
                    {t("components.ToggleTheme.highContrast")}
                </option>
            </select>
        </label>
        </>
    )
}