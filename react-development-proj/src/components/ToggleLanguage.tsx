import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useVoice } from "../hooks/useVoice";

export default function ToggleLanguage() {
    const { t } = useTranslation();
    const voiceText = useVoice();


    return(
        <div>
            <p aria-label="components.ToggleLanguage.description">
                {t("components.ToggleLanguage.description")}
            </p>
            <button onClick={ () => i18n.changeLanguage('en')} onFocus={() => voiceText(t("components.ToggleLanguage.english"))} aria-labelledby="change-language">
                {t("components.ToggleLanguage.english")}
            </button>
            <button onClick={ () => i18n.changeLanguage('es')} onFocus={() => voiceText(t("components.ToggleLanguage.spanish"))} aria-labelledby="change-language">
                {t("components.ToggleLanguage.spanish")}
            </button>
            <button onClick={ () => i18n.changeLanguage('jp')} onFocus={() => voiceText(t("components.ToggleLanguage.japanese"))} aria-labelledby="change-language">
                {t("components.ToggleLanguage.japanese")}
            </button>
        </div>
    )
}