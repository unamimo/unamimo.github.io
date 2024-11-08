let isSpeechEnabled = false;

export function getTTSOnOff (TextToSpeechEnabled: boolean) {
    isSpeechEnabled = TextToSpeechEnabled;
};

export function handlePlay(text?: string) {

    const utteranceText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utteranceText);
}

export function handleStop() {
    window.speechSynthesis.cancel();
}