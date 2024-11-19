// this component controls text to speech based on if the narrator is enabled or not 
// this uses MDN speech synthesis: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

import { useTextToSpeech } from "../context/TextToSpeechContext";


export function useVoice () {
    const { isNarratorEnabled } = useTextToSpeech();
    
    const voiceText = (text?: string) => {
        isNarratorEnabled ? handlePlay(text) : handleStop();
    }

    return voiceText;
};

function handlePlay(text?: string) {
    // this if statement makes the narrator interupt itself if it needs to say new text
    // remove to have the narrator wait before voicing new text
    // this will need to be removed for pages which want to voice all the text 
    if (speechSynthesis.speaking) {
        handleStop();
    }
    const utteranceText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utteranceText);
};

function handleStop() {
    speechSynthesis.cancel();
};