import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
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

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    detailsChange((prev)=>{
    return{...prev,[name]:value}
    })
    };

    const handleSubmit = async (event) => {
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
          console.log(res)
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
    details.email.length > 0 &&
    details.password.length > 0 &&
    details.name.length > 0 &&
    details.phoneno.length > 0;

  return (
    <div className="signup">
      <Header/>
      <link rel="stylesheet" href="CSS/SignUp.css"></link>
      <div className="register">
        <form id="form1" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <br />
          <label>Name</label>
          <br />
          <input
            className="box1"
            value={details.name}
            onInput={handleInputChange}
            pattern="^[A-Z]{4,20}$"
            maxLength={20}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <br />
          <span>Name should be in UpperCase</span>
          <br />

          <label> Email </label>
          <br />
          <input
            className="box1"
            value={details.email}
            onInput={handleInputChange}
            type="email"
            placeholder="email"
            name="email"
            required
          />
          <br />
          <span>Enter valid email id</span>
          <br />

          <label>Password</label>
          <br />
          <input
            className="box1"
            value={details.password}
            onInput={handleInputChange}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$"
            minLength={8}
            maxLength={15}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <br />
          <span>
            must include 1 uppercase, 1 lowercase and 1 digit special character
            not allowed
          </span>
          <br />

          <label>PhoneNo</label>
          <br />
          <input
            className="box1"
            value={details.phoneno}
            onInput={handleInputChange}
            pattern="^\d{10}$"
            type="text"
            placeholder="phoneno"
            name="phoneno"
            required
          />
          <br />
          <span>must be 10 digits</span>
          <br />
          <button id="Reg" type="submit" disabled={!isEnabled}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

