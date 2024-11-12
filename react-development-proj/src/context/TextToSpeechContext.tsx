import { createContext, ReactNode, useContext, useState } from "react";

// component is used to manage if text to speech / narrator is turned on or off throughout application

interface TextToSpeechContextProps {
    isNarratorEnabled: boolean;
    turnOn: () => void;
    turnOff: () => void;
}

const TextToSpeechContext = createContext<TextToSpeechContextProps | null>(null);


interface TextToSpeechProviderProps {
    children: ReactNode;
};

export default function TextToSpeechProvider ({children}: TextToSpeechProviderProps) {
    const [isNarratorEnabled, setNarratorEnabled] = useState(false);

    const turnOn = () => {
        setNarratorEnabled(true);
    };

    const turnOff = () => {
        setNarratorEnabled(false);
    }

    return(
        <TextToSpeechContext.Provider value={{ isNarratorEnabled, turnOn, turnOff}}>
            {children}
        </TextToSpeechContext.Provider>
    );
};

// avoid checking for null whenever using the context
// this could be put into a seperate file and made into a hook?
export const useTextToSpeech = () => {
    const context = useContext(TextToSpeechContext);
    if (!context) throw new Error("useTextToSpeech must be used within TextToSpeechProvider");
    return context;
}