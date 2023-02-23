import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const email = sessionStorage.getItem("email");
  return email ? children : <Navigate to="/signin" />;
}

export default Protected;