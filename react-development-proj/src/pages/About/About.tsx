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
                        {/* Remove later */}
                        {t("pages.about.description")}
                    </p>
                    <p>Features</p>
                    <ul>
                        <li>Landmark navigation</li>
                        <li>Custom made screen reader</li>
                        <li>Language switcher</li>
                        <li>Dark theme</li>
                    </ul>
                    <p>Accessibility</p>
                    <ul>
                        <li>0 issues when testing with AXE (accessibility) tools</li>
                        <li>Compaitable with screen readers (NVDA)</li>
                        <li>Compliance with WCAG 2</li>
                    </ul>
                </Region>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}