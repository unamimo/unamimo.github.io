import { useTranslation } from "react-i18next";
import MyLink from "../../components/MyLink/MyLink";
import TextToSpeechToggle from "../../components/TextToSpeechToggle";
import ToggleTheme from "../../components/ToggleTheme";
import { useTheme } from "../../context/ThemeContext";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function Config (){
    const { darkTheme } = useTheme();
    const { t } = useTranslation();
    
    return (
        <div role="main" className={darkTheme ? "dark-theme" : "light-theme"}>
            <TitleLayout>
                <Region aria-label="Config">
                    <h1>
                        {t("general.config")}
                    </h1>
                </Region>
                <Region aria-labelledby="Config">
                    <p>{t("pages.config.description")}</p>
                </Region>
                <TextToSpeechToggle/>
                <ToggleTheme/>
                <br/>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}