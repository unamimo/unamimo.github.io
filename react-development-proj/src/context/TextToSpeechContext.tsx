import { createContext, ReactNode, useContext, useState } from "react";


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
        // set to be opposite of previous setting
        // e.g. if narrator was on, it is now off, vise versa
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