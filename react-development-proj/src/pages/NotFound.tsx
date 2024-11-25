import MyLink from "../components/MyLink/MyLink";
import { useTranslation } from "react-i18next";

export default function NotFound () {
    const { t } = useTranslation();

    return(
        <>
            <h1>{t("pages.not_found.title")}</h1>
            <p>
                <MyLink to="/">{t("pages.not_found.description")}</MyLink>
            </p>
        </>
    )
}