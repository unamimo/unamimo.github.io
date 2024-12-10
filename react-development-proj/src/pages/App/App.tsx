import './App.css'
import TitleLayout from '../../layout/TitleLayout'
import MyLink from '../../components/MyLink/MyLink';
import { Navigation, Region } from '../../utils/LandmarkNav';
import { useTranslation } from 'react-i18next';
import { getActiveTheme } from '../../utils/getActiveTheme';

// themes have global scope, turn into module to make local
import "../../themes/darkTheme.css";
import "../../themes/lightTheme.css";
import "../../themes/highContrast.css";

function App() {
  const { t } = useTranslation();
  
  return (
    <div role='main'className={getActiveTheme()}>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <Region ariaLabel='pages.home.title'>
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>
            {t("pages.home.title")}
          </h1>
        </div>
        </Region>
        <Navigation style={{ textAlign: "center"}} ariaLabel="general.landmark_navigation">
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
