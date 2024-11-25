import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function ToggleLanguage() {
    const { t } = useTranslation();

    return(
        <div>
            <p>
                Change language
            </p>
            <button onClick={ () => i18n.changeLanguage('en')}>
                English
            </button>
            <button onClick={ () => i18n.changeLanguage('es')}>
                Spanish
            </button>
            <button onClick={ () => i18n.changeLanguage('jp')}>
                Japanese
            </button>
        </div>
    )
}