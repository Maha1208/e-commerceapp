import React from "react"
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Layouts/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Category from './components/Category/Category'
import WomenEthnic from "./components/Category/WomenEthnic"
import WomenWestern from "./components/Category/WomenWestern"
import MenWears from "./components/Category/MenWears"
import KidsWears from "./components/Category/KidsWears"
import Cartdetails from "./components/Cartdetails"
import Footer from "./components/Layouts/Footer" 
import AddressPayment from "./components/AddressPayment"
import Logout from "./components/Logout"
import Header from './components/Layouts/Header'

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
      <Route path="/checkout" element={<AddressPayment/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
    </div>
  )
}

export default App