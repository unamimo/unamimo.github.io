import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function ToggleLanguage() {
    const { t } = useTranslation();

    return(
        <div>
            <p>
                {t("components.ToggleLanguage.description")}
            </p>
            <button onClick={ () => i18n.changeLanguage('en')}>
                {t("components.ToggleLanguage.english")}
            </button>
            <button onClick={ () => i18n.changeLanguage('es')}>
                {t("components.ToggleLanguage.spanish")}
            </button>
            <button onClick={ () => i18n.changeLanguage('jp')}>
                {t("components.ToggleLanguage.japanese")}
            </button>
        </div>
    )
}