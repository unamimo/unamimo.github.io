import { useTextToSpeech } from "../context/TextToSpeechContext";
import { handlePlay, useVoice } from "../hooks/useVoice";
import { useTranslation } from 'react-i18next';

// this component is used for turning text to speech on and off
export default function TextToSpeechToggle() {
    const { t } = useTranslation();
    const { isNarratorEnabled, turnOn, turnOff } = useTextToSpeech();
    const voiceText = useVoice();

    return(
        <>
            {/* Render enable button if the narrator is off, and vise versa */}
            {isNarratorEnabled ?  (
                <button onClick={() => turnOff()} onFocus={() => voiceText(t("components.TextToSpeechToggle.disable_narrator"))}>{t("components.TextToSpeechToggle.disable_narrator")}</button>
            ) : (
                <button onClick={() => {turnOn(); handlePlay(t("components.TextToSpeechToggle.narrator_enabled"))}}>{t("components.TextToSpeechToggle.enable_narrator")}</button>
            )
            }
        </>
    )
}