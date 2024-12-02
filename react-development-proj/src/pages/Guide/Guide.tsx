import { useTranslation } from "react-i18next";
import MyLink from "../../components/MyLink/MyLink";
import { useTheme } from "../../context/ThemeContext";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function Guide (){
    const { t } = useTranslation();
    const { darkTheme } = useTheme();
    
    return (
        <div role="main"  className={darkTheme ? "dark-theme" : "light-theme"}>
            <TitleLayout>
                <Region aria-label="Guide">
                    <h1>
                        {t("general.guide")}
                    </h1>
                </Region>
                <Region aria-labelledby="Guide">
                    <p>
                        {t("pages.guide.description")}
                    </p>
                    <p>{t("pages.guide.narrator.title")}</p>
                    <ul>
                        <li>{t("pages.guide.narrator.toggle_location")}</li>
                        <li>{t("pages.guide.narrator.controls")}</li>
                        <li>{t("pages.guide.narrator.english_only")}</li>
                        <li>{t("pages.guide.narrator.state")}</li>
                    </ul>
                    <p>{t("pages.guide.language_switcher.title")}</p>
                    <ul>
                        <li>{t("pages.guide.language_switcher.buttons")}</li>
                        <li>{t("pages.guide.language_switcher.state")}</li>
                    </ul>
                    <p>{t("pages.guide.themes.title")}</p>
                    <ul>
                        <li>{t("pages.guide.themes.explanation")}</li>
                        <li>{t("pages.guide.themes.state")}</li>
                        <li>{t("pages.guide.themes.wip")}</li>
                    </ul>
                    <p>{t("pages.guide.keyboard_nav.title")}</p>
                    <ul>
                        <li>{t("pages.guide.keyboard_nav.tab")}</li>
                        <li>{t("pages.guide.keyboard_nav.f6")}</li>
                    </ul>
                </Region>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}