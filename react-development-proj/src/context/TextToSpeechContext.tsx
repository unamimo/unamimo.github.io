import { createContext, ReactNode, useContext, useState } from "react";


interface TextToSpeechContextProps {
    isNarratorEnabled: boolean;
    turnOnOff: () => void;
}

const TextToSpeechContext = createContext<TextToSpeechContextProps | null>(null);


interface TextToSpeechProviderProps {
    children: ReactNode;
};

export default function TextToSpeechProvider ({children}: TextToSpeechProviderProps) {
    const [isNarratorEnabled, setNarratorEnabled] = useState(false);

    const turnOnOff = () => {
        // set to be opposite of previous setting
        // e.g. if narrator was on, it is now off, vise versa
        setNarratorEnabled((prevSetting) => !prevSetting)
    };

    return(
        <TextToSpeechContext.Provider value={{ isNarratorEnabled, turnOnOff}}>
            {children}
        </TextToSpeechContext.Provider>
    );
};

// avoid checking for null whenever using the context
export const useTextToSpeech = () => {
    const context = useContext(TextToSpeechContext);
    if (!context) throw new Error("useTextToSpeech must be used within TextToSpeechProvider");
    return context;
}