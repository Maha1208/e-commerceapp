import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/layouts/Home";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import CartDetails from "./components/productdetails/CartDetails";
import Footer from "./components/layouts/Footer";
import AddressPayment from "./components/checkout/AddressPayment";
import Logout from "./components/user/Logout";
import Header from "./components/layouts/Header";
import NotFound from "./components/notfound/NotFound";
import ProductPage from "./components/products/ProductPage";
import Protected from "./components/routing/Protected";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />}/>
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
