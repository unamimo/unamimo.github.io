import './App.css'
import TitleLayout from '../../layout/TitleLayout'
import MyLink from '../../components/MyLink/MyLink';
import { Navigation, Region } from '../../utils/LandmarkNav';

function App() {
  return (
    <div role='main'>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <Region>
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>
            Accessible menu
          </h1>
        </div>
        </Region>
        <Navigation style={{ textAlign: "center"}}>
          <MyLink to='/About' renderAsButton={true}>
            About
          </MyLink>
          <MyLink to='/Config' renderAsButton={true}>
            Config
          </MyLink>
          <MyLink to='/Credits' renderAsButton={true}>
            Credits
          </MyLink>
        </Navigation>
      </TitleLayout>
    </div>
  );
};

export default App
