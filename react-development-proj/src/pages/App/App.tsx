import './App.css'
import TitleLayout from '../../layout/TitleLayout'
import NarratedText from '../../components/NarratedText'
import LinkButton from '../../components/LinkButton';

function App() {
  return (
    <div role='main'>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>
          <NarratedText text="Title"/>
        </h1>
        <div style={{ textAlign: "center"}} role='navigation'>
          <LinkButton goTo='Page1'>
            Button 1
          </LinkButton>
          <LinkButton goTo='Page2'>
            Button 2
          </LinkButton>
          <LinkButton goTo='Page3'>
            Button 3
          </LinkButton>
        </div>
      </TitleLayout>
    </div>
  );
};

export default App
