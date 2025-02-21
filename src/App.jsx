import Header from "./components/Header"
import Main from "./components/Main"
import languages from "./data/languages"

function App() {


  return (
    <div>
      <Header />
      <Main languages={languages} />
    </div>
  )
}

export default App
