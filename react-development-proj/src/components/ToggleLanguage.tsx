import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function ToggleLanguage() {
    const { t } = useTranslation();

    return(
        <div>
            <p aria-label="change-language">
                {t("components.ToggleLanguage.description")}
            </p>
            <button onClick={ () => i18n.changeLanguage('en')} aria-labelledby="change-language">
                {t("components.ToggleLanguage.english")}
            </button>
            <button onClick={ () => i18n.changeLanguage('es')} aria-labelledby="change-language">
                {t("components.ToggleLanguage.spanish")}
            </button>
            <button onClick={ () => i18n.changeLanguage('jp')} aria-labelledby="change-language">
                {t("components.ToggleLanguage.japanese")}
            </button>
        </div>
    )
}