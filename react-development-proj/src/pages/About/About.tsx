import MyLink from "../../components/MyLink/MyLink";
import { useTheme } from "../../context/ThemeContext";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";
import { useTranslation } from 'react-i18next';

export default function About (){
    const { darkTheme } = useTheme();
    const { t } = useTranslation();
    
    return (
        <div role="main" className={darkTheme ? "dark-theme" : "light-theme"}>
            <TitleLayout>
                <Region aria-label={"About"}>
                    <h1>
                        {t("general.about")}
                    </h1>    
                </Region>
                <Region aria-labelledby={"About"}>
                    <p>
                        {t("pages.about.description")}
                    </p>
                    <p>{t("pages.about.features.title")}</p>
                    <ul>
                        <li>{t("pages.about.features.landmark_navigation")}</li>
                        <li>{t("pages.about.features.screen_reader")}</li>
                        <li>{t("pages.about.features.language_switcher")}</li>
                        <li>{t("pages.about.features.dark_theme")}</li>
                    </ul>
                    <p>{t("pages.about.accessibility.title")}</p>
                    <ul>
                        <li>{t("pages.about.accessibility.axe")}</li>
                        <li>{t("pages.about.accessibility.compatiable_screen_reader")}</li>
                        <li>{t("pages.about.accessibility.compliance")}</li>
                    </ul>
                </Region>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}