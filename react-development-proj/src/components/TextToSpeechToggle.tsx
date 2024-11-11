import { useTextToSpeech } from "../context/TextToSpeechContext";
import { useVoice } from "./useVoice";

// this component is used for turning text to speech on and off
export default function TextToSpeechToggle() {
    const { isNarratorEnabled, turnOn, turnOff } = useTextToSpeech();
    const voiceText = useVoice();

    return(
        <>
            {/* Render enable button if the narrator is off, and vise versa */}
            {isNarratorEnabled ?  (
                <button onClick={() => turnOff()} onFocus={() => voiceText("Disable narrator")}>Disable narrator</button>
            ) : (
                <button onClick={() => turnOn()}>Enable narrator</button>
            )
            }
            <button onClick={() => voiceText("I am a test")}>I am a test</button>
        </>
    )
}