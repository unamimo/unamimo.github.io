import './App.css'
import TitleLayout from './layout/TitleLayout'

// currently includes the title screen code
// this will need to be seperated out into a layout component for reuse, the actual title screen content will be a child
// all of this code may be moved into different pages, when a pages folder structure is introduced
function App() {
  return (
    <>
      <TitleLayout>
        {/* Actual page content */}
        {/* Move these in-line styles to a CSS file */}
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
