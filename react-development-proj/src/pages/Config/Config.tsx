import { useTranslation } from "react-i18next";
import MyLink from "../../components/MyLink/MyLink";
import TextToSpeechToggle from "../../components/TextToSpeechToggle";
import ToggleTheme from "../../components/ToggleTheme";
import { useTheme } from "../../context/ThemeContext";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";
import ToggleLanguage from "../../components/ToggleLanguage";

export default function Config (){
    const { darkTheme } = useTheme();
    const { t } = useTranslation();
    
    return (
        <div role="main" className={darkTheme ? "dark-theme" : "light-theme"}>
            <TitleLayout>
                <Region ariaLabel="general.config">
                    <h1>
                        {t("general.config")}
                    </h1>
                </Region>
                <div>
                    <Region ariaLabel="pages.config.description">
                        <p>{t("pages.config.description")}</p>
                    </Region>
                    <Region ariaLabel="pages.config.narrator_settings">
                        <p>{t("pages.config.narrator_settings")}</p>
                        <TextToSpeechToggle/>
                    </Region>
                    <Region ariaLabel="pages.config.theme_settings">
                        <p>{t("pages.config.theme_settings")}</p>
                        <ToggleTheme/>
                    </Region>
                    <Region ariaLabel="components.ToggleLanguage.description">
                        <ToggleLanguage/>
                    </Region>
                    <br/>
                </div>
                <Navigation ariaLabel="config-go-home">
                        <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}