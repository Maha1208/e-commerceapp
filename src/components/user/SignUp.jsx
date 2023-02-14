import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/signup.css";
import swal from 'sweetalert'
import Toastify from "../toast/Toastify";

export default function SignUp() {
  const [details, detailsChange] = useState({
    name:"",
    email:"",
    password:"",
    phoneno:""
  });

  const navigate = useNavigate();
  const handlingInputChange=(e)=>{
    const {name,value}=e.target;
    detailsChange((prev)=>{
    return{...prev,[name]:value}
    })
    };

    const handlingSubmit = async (event) => {
      event.preventDefault();
      try {
        const res = await fetch(`http://localhost:4000/SignUp?email=${details.email}`);
        const json = await res.json();
        if (json.length === 0) {
          const res = await fetch("http://localhost:4000/SignUp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: `${details.name}`,
              email: `${details.email}`,
              password: `${details.password}`,
              phone: `${details.phoneno}`,
            }),
          });
          if (res.status === 201) {
            swal("Account created successfully, please login",`Welcome ${details.name}`,"success");
            navigate("/SignIn");
          }
        } else {
          Toastify(
            "Account already exists, please Login or use a different email id to register","info"
          );
        }
      } catch (error) {
        Toastify("something went wrong","error");
      }
    };
  const isEnabled =
  Object.values(details).every(value => value.length > 0);

  return (
    <div className="signup">
        <form id="signup-form" onSubmit={handlingSubmit}>
          <h1>Register</h1>
          <label>Name</label>
          <input
            onInput={handlingInputChange}
            pattern="^[A-Z]{4,20}$"
            type="text"
            name="name"
            required
          />
          <span>Name should be in UpperCase</span>
          <label> Email </label>
          <input
            onInput={handlingInputChange}
            type="email"
            name="email"
            required
          />
          <span>Enter valid email id</span>
          <label>Password</label>
          <input
            onInput={handlingInputChange}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$"
            type="password"
            name="password"
            required
          />
          <span>
            must include 1 uppercase, 1 lowercase and 1 digit special character
            not allowed
          </span>
          <label>PhoneNo</label>
          <input
            onInput={handlingInputChange}
            pattern="^\d{10}$"
            type="text"
            name="phoneno"
            required
          />
          <span>must be 10 digits</span>
          <button id="signup-button" type="submit" disabled={!isEnabled}>
            Register
          </button>
        </form>
      </div>
  );
}
