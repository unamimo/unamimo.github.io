import './App.css'
import TitleLayout from '../../layout/TitleLayout'
import MyLink from '../../components/MyLink'

function App() {
  return (
    <>
      <TitleLayout>
        {/* Move these in-line styles to a CSS file? Could get messy in the future */}
        <h1 style={{ fontSize: "6.5em", textAlign: "center" }}>Title</h1>
        <div style={{ textAlign: "center"}}>
          <button className='TitleButtons'>
            <MyLink to="Page1">
              Button 1
            </MyLink>
          </button>
          <button className='TitleButtons'>
            <MyLink to="Page2">
                Button 2
            </MyLink>
          </button>
          <button className='TitleButtons'>
            <MyLink to="Page3">
              Button 3
            </MyLink>
          </button>
        </div>
      </TitleLayout>
    </>
  )
}

export default App
