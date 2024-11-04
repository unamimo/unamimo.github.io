import './App.css'
import TitleLayout from '../../layout/TitleLayout'

function App() {
  return (
    <>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>Title</h1>
        <div style={{ textAlign: "center"}}>
          <button className='TitleButtons'>
            Button 1
          </button>
          <button className='TitleButtons'>
            Button 2
          </button>
          <button className='TitleButtons'>
            Button 3
          </button>
        </div>
      </TitleLayout>
    </>
  )
}

export default App
