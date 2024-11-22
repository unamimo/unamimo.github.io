// component to switch themes
// currently only toggles between dark and light mode, but will change in the future

import { useTheme } from "../context/ThemeContext";

export default function ToggleTheme () {
    const { toggleTheme } = useTheme();

    return(
        <button onClick={() => toggleTheme()}>
            Toggle darkTheme
        </button>
    )
}