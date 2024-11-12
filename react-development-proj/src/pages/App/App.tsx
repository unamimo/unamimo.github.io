import './App.css'
import TitleLayout from '../../layout/TitleLayout'
import MyLink from '../../components/MyLink'
import NarratedText from '../../components/NarratedText'

function App() {
  return (
    <div role='main'>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>
          <NarratedText text="Title"/>
        </h1>
        <div style={{ textAlign: "center"}} role='navigation'>
          <MyLink to="Page1">
            <button className='TitleButtons'>
              Button 1
            </button>
          </MyLink>
          <MyLink to="Page2">
            <button className='TitleButtons'>
              Button 2
            </button>
          </MyLink>
          <MyLink to="Page3">
            <button className='TitleButtons'>
              Button 3
            </button>
          </MyLink>
        </div>
      </TitleLayout>
    </div>
  );
};

export default App
