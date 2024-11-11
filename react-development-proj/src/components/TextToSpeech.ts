import { useTextToSpeech } from "../context/TextToSpeechContext";


export function voiceText (text?: string) {
    const { isNarratorEnabled } = useTextToSpeech();

    console.log(isNarratorEnabled);
    isNarratorEnabled ? (
        handlePlay(text)
    ) : (
        handleStop()
    );
};

function handlePlay(text?: string) {
    const utteranceText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utteranceText);
}

function handleStop() {
    window.speechSynthesis.cancel();
}