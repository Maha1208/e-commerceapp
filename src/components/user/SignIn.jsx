import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert'
import "../../css/login.css";

import Header from "../layouts/Header";

export default function SignIn() {
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const usenavigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:4000/SignUp?email=" + email)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (Object.keys(response).length === 0) {
            toast.error("Please Enter valid email");
          } else {
            if (response[0].password === password) {
              sessionStorage.setItem("email", email);
              swal("Login Successful!", `Welcome ${email}`,"success");
              usenavigate("/");
            } else {
              toast.error("Please Enter valid password");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = (e) => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please Enter Email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;    

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
            onChange={(e) => emailUpdate(e.target.value)}
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
            onChange={(e) => passwordUpdate(e.target.value)}
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
      <ToastContainer position="top-center" />
    </div>
  );
}

