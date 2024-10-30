import './App.css'

function App() {

  return (
    <>
    <div style={{ maxWidth: "1280px", maxHeight: "100vh", overflow: "auto", border: "2px solid green" }}>
      <h1 style={{border: "2px solid blue", fontSize: "6.5em"}}>Title</h1>
      <div className="card" style={{border: "2px solid red" }}>
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
    </>
  )
}

export default App
