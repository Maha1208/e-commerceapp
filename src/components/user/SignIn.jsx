import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";
import swal from 'sweetalert'
import Header from "../layouts/Header";
import Toastify from "../toast/Toastify";

export default function SignIn() {
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const usenavigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
      fetch("http://localhost:4000/SignUp?email=" + email)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (Object.keys(response).length === 0) {
            Toastify("Please Enter valid email!","error");
          } else {
            if (response[0].password === password) {
              sessionStorage.setItem("email", email);
              swal("Login Successful!", `Welcome ${email}`,"success");
              usenavigate("/");
            } else {
              Toastify("Please Enter valid password!","error");
            }
          }
        })
        .catch((error) => {
          Toastify("Login Failed due to :" + error.message,"error");
        });
  };
  const isEnabled = email.length > 0 && password.length > 0;

  return (
    <div className="log">
      <Header />
      <form id="loginform" onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="logincontainer">
          <label>
            <b>Email</b>
          </label>
          <br />
          <input
            type="text"
            id="input"
            value={email}
            onInput={(e) => emailUpdate(e.target.value)}
            placeholder="Enter Emailid"
            name="email"
            required
          />
          <br />

          <label>
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            id="input"
            value={password}
            onInput={(e) => passwordUpdate(e.target.value)}
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />

          <button id="button" type="submit" disabled={!isEnabled}>
            Login
          </button>
          <br />
        </div>
      </form>
    </div>
  );
}



