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
import Cartdetails from "./components/Cartdetails"
import Lehenga from "./components/Lehenga"
import Kurtas from "./components/Kurtas"
import Plazzo from "./components/Plazzo"
import Mshirt from "./components/Mshirt"
import Mtshirt from "./components/Mtshirt"
import Mjeans from "./components/Mjeans"
import Mformalpants from "./components/Mformalpants"
import Girlset from "./components/Girlset"
import Boyset from "./components/Boyset"
import Gowns from "./components/Gowns"
import Goback from "./components/Goback"
import Nightwear from "./components/Nightwear"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="signin" element={ <SignIn/> } />
        <Route path="signup" element={ <SignUp/> } />
        <Route path="category" element={<Category/>}/>
        <Route path="womenethnic" element={<WomenEthnic/>}/>
        <Route path="womenwestern" element={<WomenWestern/>}/>
        <Route path="menwears" element={<MenWears/>}/>
        <Route path="kidswears" element={<KidsWears/>}/>
        <Route path="cottonsaree" element={<Cottonsaree/>}/>
        <Route path="lehenga" element={<Lehenga/>}/>
        <Route path="kurtas" element={<Kurtas/>}/>
        <Route path="plazzo" element={<Plazzo/>}/>
        <Route path="mshirt" element={<Mshirt/>}/>
        <Route path="mtshirt" element={<Mtshirt/>}/>
        <Route path="mjeans" element={<Mjeans/>}/>
        <Route path="mformalpants" element={<Mformalpants/>}/>
        <Route path="girlset" element={<Girlset/>}/>
        <Route path="boyset" element={<Boyset/>}/>
        <Route path="gowns" element={<Gowns/>}/>
        <Route path="nightwear" element={<Nightwear/>}/>
        <Route path="/cart/:key" element={<Cartdetails/>}/>
        <Route path="/cart" element={<Cartdetails/>}/>
        <Route path="Goback" element={<Goback/>}/>
        <Route path="header" element={<Header/>}/>

      </Routes>
    </div>
  )
}

export default App