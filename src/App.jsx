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
        <Route path="/category1" element={<Protected><Category/></Protected>}/>
        <Route path="/cart/:key" element={<Protected><Cartdetails /></Protected>} />
        <Route path="/cart" element={<Protected><Cartdetails /></Protected>} />
        <Route path="/checkout" element={<Protected><AddressPayment /></Protected>} />
        <Route path="*" element={<Protected><NotFound /></Protected>} />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Route, Routes } from "react-router-dom";
// // Routes
// import PrivateRoute from "./components/layouts/PrivateRoute";
// import PublicRoute from "./components/layouts/PublicRoute";
// // Pages
// import Home from "./components/layouts/Home";
// import SignIn from "./components/user/SignIn";
// import SignUp from "./components/user/SignUp";

// const App = () => {
//    return(
//       let [isAuthenticated, setIsAuthenticated] = useState("");
//           <Routes>
//             <PrivateRoute
//                path="/"
//                isAuthenticated={isAuthenticated}
//                component={Home}
//                exact={true}
//             />
//             <PublicRoute
//                path="/signin"
//                isAuthenticated={isAuthenticated}
//                component={SignIn}
//                exact={true}
//             />
//             <PublicRoute
//                path="/signup"
//                isAuthenticated={isAuthenticated}
//                component={SignUp}
//                exact={true}
//             />
//          </Routes>
//    );
// }
// export default App;