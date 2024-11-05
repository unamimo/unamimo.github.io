//import { useEffect, useState } from "react";

import { useState } from "react";

// interface TextToSpeechProps{
//     text: string
// }

// const TextToSpeech = ({ text }: TextToSpeechProps ) => {
//     const [isPaused, setIsPaused] = useState(false);
//     const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

//     useEffect(() => {
//         const synth = window.speechSynthesis;
//         const textUtterance = new SpeechSynthesisUtterance(text);

//         setUtterance(textUtterance);

//         return () => {
//             synth.cancel();
//         };
//     }, [text]);

//     const handlePlay = () => {
//         const synth = window.speechSynthesis;

//         if (isPaused) {
//             synth.resume();
//         }

//         synth.speak(utterance)
//     }
// }


// this file will hopefully be used for turning text to speech on and off, in the future
export default function TextToSpeechToggle() {
    // set text on button to say "enable narrator" if narrator is currently not on, and vise versa
    const [isNarratorEnabled, setNarrator] = useState(false);

    // setup narrator to say text
    const NarratorEnabledSpeech = new SpeechSynthesisUtterance("Narrator enabled");
    const DisableNarratorSpeech = new SpeechSynthesisUtterance("Disable narrator");

    function EnableNarrator() {
        setNarrator(false);
        speechSynthesis.speak(NarratorEnabledSpeech);
    };
    
    return(
        <>
            {/* Render enable button if the narrator is off, and vise versa */}
            {isNarratorEnabled ?  (
                <button onClick={() => EnableNarrator()}>Enable narrator</button>
            ) : (
                <button onFocus={() => speechSynthesis.speak(DisableNarratorSpeech)} onClick={() => setNarrator(true)}>Disable narrator</button>
            )
            }
        </>
    )
}