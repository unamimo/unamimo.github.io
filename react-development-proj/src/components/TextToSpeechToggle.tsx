import { useTextToSpeech } from "../context/TextToSpeechContext";

// this component is used for turning text to speech on and off
export default function TextToSpeechToggle() {
    const { isNarratorEnabled, turnOn, turnOff } = useTextToSpeech();

    return(
        <>
            {/* Render enable button if the narrator is off, and vise versa */}
            {isNarratorEnabled ?  (
                <button onClick={() => turnOff()}>Disable narrator</button>
            ) : (
                <button onClick={() => turnOn()}>Enable narrator</button>
            )
            }
        </>
    )
}