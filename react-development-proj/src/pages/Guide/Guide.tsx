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
                    <p>Narrator</p>
                    <ul>
                        <li>The narrator is toggled through the config page</li>
                        <li>The narrator will voice buttons when they have focus (through 'Tab' or mouse click)</li>
                        <li>The narrator only works for English</li>
                        <li>The state of the narrator will not persist through page refresh</li>
                    </ul>
                    <p>Language changer</p>
                    <ul>
                        <li>Clicking on the button of a language, will change it to that language instantly</li>
                        <li>The state of the language will persist through page refresh</li>
                    </ul>
                    <p>Themes</p>
                    <ul>
                        <li>There are currently two themes, dark and light</li>
                        <li>The state of the theme will not persist through page refresh</li>
                        <li>Theming is a work in progress, some elements may not match the current theme</li>
                    </ul>
                    <p>Keyboard navigation</p>
                    <ul>
                        <li>Use the 'Tab' button to navigate between interactive elements</li>
                        <li>Use the 'F6' button to navigate between landmarks. Landmarks are sections of the page that seperate content</li>
                    </ul>
                </Region>
                <Navigation>
                    <MyLink renderAsButton={true} to="/">{t("general.home")}</MyLink>
                </Navigation>
            </TitleLayout>
        </div>
    )
}