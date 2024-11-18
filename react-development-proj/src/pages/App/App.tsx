import './App.css'
import TitleLayout from '../../layout/TitleLayout'
import NarratedText from '../../components/NarratedText'
import MyLink from '../../components/MyLink/MyLink';

function App() {
  return (
    <div role='main'>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>
          <NarratedText text="Title"/>
        </h1>
        <div style={{ textAlign: "center"}} role='navigation'>
          <MyLink to='/About' renderAsButton={true}>
            About
          </MyLink>
          <MyLink to='/Config' renderAsButton={true}>
            Config
          </MyLink>
          <MyLink to='/Credits' renderAsButton={true}>
            Credits
          </MyLink>
        </div>
      </TitleLayout>
    </div>
  );
};

export default App
