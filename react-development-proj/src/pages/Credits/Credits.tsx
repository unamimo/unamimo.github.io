import { useTranslation } from "react-i18next";
import MyLink from "../../components/MyLink/MyLink";
import { useTheme } from "../../context/ThemeContext";
import TitleLayout from "../../layout/TitleLayout";
import { Navigation, Region } from "../../utils/LandmarkNav";

export default function Credits (){
    const { t } = useTranslation();
    const { darkTheme } = useTheme();
    
    return (
        <div role="main"  className={darkTheme ? "dark-theme" : "light-theme"}>
            <TitleLayout>
                <Region aria-label="Credits">
                    <h1>
                        {t("general.credits")}
                    </h1>
                </Region>
                <Region aria-labelledby="Credits">
                    <p>
                        {t("pages.credits.description")}
                    </p>
                </Region>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}