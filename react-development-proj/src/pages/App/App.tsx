import './App.css'
import TitleLayout from '../../layout/TitleLayout'
import MyLink from '../../components/MyLink/MyLink';
import { Navigation, Region } from '../../utils/LandmarkNav';
import { useTheme } from '../../context/ThemeContext';
import "../../themes/darkTheme.css";  // has global scope, turn into module to make it local
import "../../themes/lightTheme.css";
import { useTranslation } from 'react-i18next';

function App() {
  const { darkTheme } = useTheme();
  const { t } = useTranslation();
  
  return (
    <div role='main'className={darkTheme ? "dark-theme" : "light-theme"}>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <Region ariaLabel='Accessible menu'>
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>
            {t("pages.home.title")}
          </h1>
        </div>
        </Region>
        <Navigation style={{ textAlign: "center"}} ariaLabel="website-navigation">
          <MyLink to='/About' renderAsButton={true}>
            {t("general.about")}
          </MyLink>
          <MyLink to='/Config' renderAsButton={true}>
            {t("general.config")}
          </MyLink>
          <MyLink to='/Guide' renderAsButton={true}>
            {t("general.guide")}
          </MyLink>
        </Navigation>
      </TitleLayout>
    </div>
  );
};

export default App
