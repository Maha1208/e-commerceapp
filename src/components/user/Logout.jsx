import React from "react";
import { Navigate } from "react-router-dom";
import swal from 'sweetalert'

const Logout = () => {
  sessionStorage.clear();
  swal("Your are Logged out Successfully!","Thank you","success");
  return (
    <div>
      <Navigate to="/"></Navigate>
    </div>
  );
};

export default Logout;
