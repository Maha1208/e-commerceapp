import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="SignIn" element={ <SignIn/> } />
        <Route path="SignUp" element={ <SignUp/> } />
      </Routes>
    </div>
  )
}

export default App