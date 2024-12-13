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
        console.log('Theme selected: ', event.target.value);
        setSelectedTheme(event.target.value);
        changeTheme(event.target.value);
        console.log("event.target.value: ", event.target.value);
    }

    return(
        <>
        <label>
            <select value={selectedTheme} onChange={handleChange}>
                <option value={"light"}>Light</option>
                <option value={"dark"}>Dark</option>
                <option value={"highContrast"}>High contrast</option>
            </select>
        </label>
        </>
    )
}