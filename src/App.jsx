import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/layouts/Home";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import CartDetails from "./components/productDetail/CartDetails";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import AddressPayment from "./components/checkout/AddressPayment";
import Logout from "./components/user/Logout";
import NotFound from "./components/notFound/NotFound";
import ProductPage from "./components/products/ProductPage";
import Protected from "./Protected";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />   
        <Route path="/products" element={<Protected><ProductPage/></Protected>}/>
        <Route path="/cart/:key" element={<Protected><CartDetails /></Protected>} />
        <Route path="/cart" element={<Protected><CartDetails /></Protected>} />
        <Route path="/checkout" element={<Protected><AddressPayment /></Protected>} />
        <Route path="*" element={<Protected><NotFound /></Protected>} />
      </Routes>
    </div>
  );
}

export default App;
