import React from "react";
import { Navigate } from "react-router-dom";
import swal from 'sweetalert'

export default function Logout(){
  sessionStorage.clear();
  swal("You are Logged out Successfully!","Thank you","success");
  return(
    <div>
      <Navigate to="/"/>
    </div>
  )
}

