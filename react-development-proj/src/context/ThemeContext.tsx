// This code has been based off of https://saurabhnativeblog.medium.com/react30-project-16-implementing-theme-switching-in-a-react-web-app-9f59279ea5ed
// Credit to Saurabh Mhatre on Medium

import { createContext, useContext, ReactNode, useState } from "react";


interface ThemeContextProps {
    darkTheme: Boolean;
    toggleDarkTheme: () => void;
    highContrastTheme: Boolean;
    toggleHighContrastTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeProviderProps {
    children: ReactNode;
};

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [highContrastTheme, setHighContrastTheme] = useState(false);

    const toggleDarkTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    const toggleHighContrastTheme = () => {
        setHighContrastTheme((prevTheme) => !prevTheme)
    }

    return(
        <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme, highContrastTheme, toggleHighContrastTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

// avoid checking for null whenever using the context
// this could be put into a seperate file and made into a hook?
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}

export { ThemeProvider, ThemeContext, useTheme }