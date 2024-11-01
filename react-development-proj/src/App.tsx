import './App.css'

// currently includes the title screen code
// this will need to be seperated out into a layout component for reuse, the actual title screen content will be a child
// all of this code may be moved into different pages, when a pages folder structure is introduced
function App() {
  return (
    <>
      {/*container for everything*/}
      {/*may include header and footer in the future */}
      <div style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        {/* Container for centring content in the middle of the screen
          - flex: '1 0 auto' - child element grows to fill space and pushes the footer to the bottom
          - flexGrow makes the content grow to the window size
          - overflow: auto, means that content does not go beyond its container
          - minHeight must be 100vh for the footer to be at the bottom of the screen
          - maxWidth - maxiumum width of our centred content
          - centred horizontally and vertically using alignItems and justifyContent
        */}
        <div style={{
          flexGrow: 3,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1280px",
          height: "100%",
          width: "100%",
          alignSelf: "center",
          flex: "1 0 auto",
          alignItems: "center",       // centres child divs as well as content, remove for divs to span
          justifyContent: "center"    // centres child content within content divs
        }}>
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
        </div>
      </div>
    </>
  )
}

export default App
