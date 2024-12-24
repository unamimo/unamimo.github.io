import { useTranslation } from "react-i18next";
import MyLink from "../../components/MyLink/MyLink";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";
import { getActiveTheme } from "../../utils/getActiveTheme";

export default function Guide (){
    const { t } = useTranslation();
    
    return (
        <div role="main"  className={getActiveTheme()}>
            <TitleLayout>
                <Region ariaLabel="general.guide">
                    <h1>
                        {t("general.guide")}
                    </h1>
                </Region>
                <div>
                    <Region ariaLabel="pages.guide.description">
                        <p>
                            {t("pages.guide.description")}
                        </p>
                    </Region>
                    <Region ariaLabel="pages.guide.landmark_narrator">
                        <p>{t("pages.guide.narrator.title")}</p>
                        <ul>
                            <li>{t("pages.guide.narrator.toggle_location")}</li>
                            <li>{t("pages.guide.narrator.controls")}</li>
                            <li>{t("pages.guide.narrator.english_only")}</li>
                            <li>{t("pages.guide.narrator.state")}</li>
                        </ul>
                    </Region>
                    <Region ariaLabel="pages.guide.landmark_language_switcher">
                        <p>{t("pages.guide.language_switcher.title")}</p>
                        <ul>
                            <li>{t("pages.guide.language_switcher.buttons")}</li>
                            <li>{t("pages.guide.language_switcher.state")}</li>
                        </ul>
                    </Region>
                    <Region ariaLabel="pages.guide.landmark_themes">
                        <p>{t("pages.guide.themes.title")}</p>
                        <ul>
                            <li>{t("pages.guide.themes.explanation")}</li>
                            <li>{t("pages.guide.themes.state")}</li>
                            <li>{t("pages.guide.themes.wip")}</li>
                        </ul>
                    </Region>
                    <Region ariaLabel="pages.guide.landmark_keyboard_nav">
                        <p>{t("pages.guide.keyboard_nav.title")}</p>
                        <ul>
                            <li>{t("pages.guide.keyboard_nav.tab")}</li>
                            <li>{t("pages.guide.keyboard_nav.f6")}</li>
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