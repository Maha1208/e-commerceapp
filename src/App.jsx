import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/layouts/Home";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Cartdetails from "./components/productdetails/Cartdetails";
import Footer from "./components/layouts/Footer";
import AddressPayment from "./components/checkout/AddressPayment";
import Logout from "./components/user/Logout";
import Header from "./components/layouts/Header";
import NotFound from "./components/notfound/NotFound";
import Category from "./components/category/Category";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart/:key" element={<Cartdetails />} />
        <Route path="/cart" element={<Cartdetails />} />
        <Route path="/checkout" element={<AddressPayment />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/logout" element={<Logout />} />   
        <Route path="/category1" element={<Category/>} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
