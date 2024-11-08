import { useTextToSpeech } from "../context/TextToSpeechContext";

//let isSpeechEnabled = false;

export function voiceText (/*TextToSpeechEnabled: boolean*/ text?: string) {
    //isSpeechEnabled = TextToSpeechEnabled;
    const { isNarratorEnabled } = useTextToSpeech()

    console.log(isNarratorEnabled)
    { isNarratorEnabled ? (
        handlePlay(text)
    ) : (
        handleStop()
    )};
};

export function handlePlay(text?: string) {

    const utteranceText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utteranceText);
}

export function handleStop() {
    window.speechSynthesis.cancel();
}