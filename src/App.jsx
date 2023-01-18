import React from "react"
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
import Cartdetails from "./components/Cartdetails"
import Footer from "./components/Footer" 
import Payment from "./components/Payment"
import Logout from "./components/Logout"
import Header from './components/Header'

function App() {
  return ( 
    <div>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/signin" element={ <SignIn/> } />
      <Route path="/signup" element={ <SignUp/> } />
      <Route path="/category" element={<Category/>}/>
      <Route path="/womenethnic" element={<WomenEthnic/>}/>
      <Route path="/womenwestern" element={<WomenWestern/>}/>
      <Route path="/menwears" element={<MenWears/>}/>
      <Route path="/kidswears" element={<KidsWears/>}/>
      <Route path="/cart/:key" element={<Cartdetails/>}/>
      <Route path="/cart" element={<Cartdetails/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
    </div>
  )
}

export default App