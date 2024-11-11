import { useVoice } from "../hooks/useVoice"

// this component is used to return both HTML text and voice texted, if the narrator is on

interface NarratedTextProps {
    text: string
}

export default function NarratedText ({text}: NarratedTextProps) {
    const voiceText = useVoice();

    return(
        <>
            {voiceText(text)}
            {text}
            <br />
        </>
    )
}