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
                <Region ariaLabel={"general.about"}>
                    <h1>
                        {t("general.about")}
                    </h1>    
                </Region>
                <div>
                    <Region ariaLabel="pages.about.description">
                        <p>
                            {t("pages.about.description")}
                        </p>
                    </Region>
                    <Region ariaLabel="pages.about.landmark_features">
                        <p>{t("pages.about.features.title")}</p>
                        <ul>
                            <li>{t("pages.about.features.landmark_navigation")}</li>
                            <li>{t("pages.about.features.screen_reader")}</li>
                            <li>{t("pages.about.features.language_switcher")}</li>
                            <li>{t("pages.about.features.dark_theme")}</li>
                        </ul>
                    </Region>
                    <Region ariaLabel="pages.about.landmark_accessibility">
                        <p>{t("pages.about.accessibility.title")}</p>
                        <ul>
                            <li>{t("pages.about.accessibility.axe")}</li>
                            <li>{t("pages.about.accessibility.compatiable_screen_reader")}</li>
                            <li>{t("pages.about.accessibility.compliance")}</li>
                        </ul>
                    </Region>
                </div>
                <Navigation ariaLabel="general.landmark_navigation">
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}