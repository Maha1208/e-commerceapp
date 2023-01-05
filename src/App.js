import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Category from './components/Category'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="SignIn" element={ <SignIn/> } />
        <Route path="SignUp" element={ <SignUp/> } />
        <Route path="Category" element={<Category/>}/>
      </Routes>
    </div>
  )
}

export default App