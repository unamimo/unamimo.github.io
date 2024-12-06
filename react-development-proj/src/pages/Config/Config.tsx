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
                <Region ariaLabel="Config">
                    <h1>
                        {t("general.config")}
                    </h1>
                </Region>
                <Region ariaLabel="Config description">
                    <p>{t("pages.config.description")}</p>
                </Region>
                <TextToSpeechToggle/>
                <ToggleTheme/>
                <ToggleLanguage/>
                <br/>
                <Navigation ariaLabel="config-go-home">
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}