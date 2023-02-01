import React from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  sessionStorage.clear();
  return (
    <div>
      <Navigate to="/SignIn"></Navigate>
    </div>
  );
};

export default Logout;
