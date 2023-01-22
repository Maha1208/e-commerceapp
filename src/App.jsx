import React from "react"
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/layouts/Home"
import SignIn from "./components/user/SignIn"
import SignUp from "./components/user/SignUp"
import Category from './components/category/Category'
import WomenEthnic from "./components/category/WomenEthnic"
import WomenWestern from "./components/category/WomenWestern"
import MenWears from "./components/category/MenWears"
import KidsWears from "./components/category/KidsWears"
import Cartdetails from "./components/Cartdetails"
import Footer from "./components/layouts/Footer" 
import AddressPayment from "./components/checkout/AddressPayment"
import Logout from "./components/user/Logout"
import Header from './components/layouts/Header'

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