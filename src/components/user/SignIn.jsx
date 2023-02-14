import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";
import swal from "sweetalert";
import Toastify from "../toast/Toastify";

export default function SignIn(props) {
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const navigate = useNavigate();

  const handlingLogin = (e) => 
  {
    e.preventDefault();
    fetch("http://localhost:4000/SignUp?email=" + email)
      .then((response) => 
      {
        return response.json();
      })
      .then((response) =>
       {
        if (Object.keys(response).length === 0) 
        {
          Toastify("Please Enter valid email!", "error");
        } 
        else 
        {
          if (response[0].password === password) 
          {
            sessionStorage.setItem("email", email);
            swal("Login Successful!", `Welcome ${email}`, "success");
            navigate("/");
          } 
          else 
          {
            Toastify("Please Enter valid password!", "error");
          }
        }
      })
      .catch((error) => 
      {
        Toastify(`Login Failed due to : ${error.message}`, "error");
      });
  };
  const isEnabled = email.length > 0 && password.length > 0;
  return (
    <div className="login-page">
      <form id="login-form" onSubmit={handlingLogin}>
        <h1>Login</h1>
        <div className="login-form__container">
          <label>
            Email
          </label>
          <input
            type="text"
            onInput={(e) => emailUpdate(e.target.value)}
            placeholder="Enter Emailid"
            name="email"
          />
          <label>
            Password
          </label>
          <input
            type="password"
            onInput={(e) => passwordUpdate(e.target.value)}
            placeholder="Enter Password"
            name="password"  
          />
          <button id="login-button" type="submit" disabled={!isEnabled}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}


