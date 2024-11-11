import { useTextToSpeech } from "../context/TextToSpeechContext";


export function useVoice () {
    const { isNarratorEnabled } = useTextToSpeech();
    
    const voiceText = (text?: string) => {
        console.log(isNarratorEnabled);
        isNarratorEnabled ? handlePlay(text) : handleStop;
    }

    return voiceText;
};

function handlePlay(text?: string) {
    const utteranceText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utteranceText);
};

function handleStop() {
    window.speechSynthesis.cancel();
};