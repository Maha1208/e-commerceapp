import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";
import swal from "sweetalert";
import Toastify from "../toast/Toastify";
import FormInput from "../clubComponent/FormInput";

export default function SignIn() {
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/SignUp?email=" + email)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (Object.keys(response).length === 0) {
          Toastify("Please Enter valid email!", "error");
        }
        else {
          if (response[0].password === password) {
            sessionStorage.setItem("email", response[0].email);
            swal("Login Successful!", `Welcome ${response[0].email}`, "success");
            navigate("/");
          }
          else {
            Toastify("Please Enter valid password!", "error");
          }
        }
      }).catch((error) => {
        Toastify(`Login Failed due to : ${error.message}`, "error");
      });
  };
  const isEnabled = email.length > 0 && password.length > 0;
  return (
    <div className="login-page">
      <form id="login-form" onSubmit={handleSignIn}>
        <h1>Login</h1>
        <div className="login-form__container">
          <FormInput
          label="Email"
          type="email"
          placeholder="Enter Email Id"
          onInput={(e) => emailUpdate(e.target.value)}
          name="email" 
          />
          <FormInput
          label="Password"
          type="password"
          placeholder="Enter password"
          onInput={(e) => passwordUpdate(e.target.value)}
          name="password" 
          />
          <FormInput 
          id="login-button" 
          type="submit" 
          disabled={!isEnabled} 
          value="Login"/>
        </div>
      </form>
    </div>
  );
}


