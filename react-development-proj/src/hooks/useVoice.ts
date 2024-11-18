import { useTextToSpeech } from "../context/TextToSpeechContext";


export function useVoice () {
    const { isNarratorEnabled } = useTextToSpeech();
    
    const voiceText = (text?: string) => {
        isNarratorEnabled ? handlePlay(text) : handleStop();
        console.log("is narrator enabled in voiceText function?: ",isNarratorEnabled)
    }

    return voiceText;
};

function handlePlay(text?: string) {
    console.log("Entered handle play function")
    const utteranceText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utteranceText);
};

function handleStop() {
    console.log("Entered stop TTS function")
    speechSynthesis.cancel();
};