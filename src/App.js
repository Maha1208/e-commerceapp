import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Category from './components/Category'
import WomenEthnic from "./components/WomenEthnic"
import WomenWestern from "./components/WomenWestern"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="SignIn" element={ <SignIn/> } />
        <Route path="SignUp" element={ <SignUp/> } />
        <Route path="Category" element={<Category/>}/>
        <Route path="WomenEthnic" element={<WomenEthnic/>}/>
        <Route path="WomenWestern" element={<WomenWestern/>}/>

      </Routes>
    </div>
  )
}

export default App