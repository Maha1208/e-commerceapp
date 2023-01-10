import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Category from './components/Category'
import WomenEthnic from "./components/WomenEthnic"
import WomenWestern from "./components/WomenWestern"
import MenWears from "./components/MenWears"
import KidsWears from "./components/KidsWears"
import Cottonsaree from "./components/Cottonsaree"
import Header from "./components/Header"
import SareeCardsData from "./components/SareeCardsData"
import Sareedetails from "./components/Sareedetails"

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
        <Route path="MenWears" element={<MenWears/>}/>
        <Route path="KidsWears" element={<KidsWears/>}/>
        <Route path="Cottonsaree" element={<Cottonsaree/>}/>
        <Route path="/SareeCardsData" element={<SareeCardsData/>}/>
        <Route path="/cart/:id" element={<Sareedetails/>}/>
        <Route path="Header" element={<Header/>}/>
      </Routes>
    </div>
  )
}

export default App