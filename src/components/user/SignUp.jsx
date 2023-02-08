import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import "../../css/signup.css";
import swal from 'sweetalert'

export default function SignUp() {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [phone, phoneChange] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value in ";
    if (name === null || name === "") {
      isProceed = false;
      errorMessage += " Name should be in capital letters";
    }
    if (email === null || email === "") {
      isProceed = false;
      errorMessage += " Invalid email";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += " Password doesn't match the given pattern";
    }
    if (phone === null || phone === "") {
      isProceed = false;
      errorMessage += "enter valid phone number";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { name, email, password, phone };
    //console.log(regobj);

    if (isValidate()) {
      fetch("http://localhost:4000/SignUp", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then(() => {
          swal("Registered Successfully", `${name} please Login`, "success");
          navigate("/SignIn");
        })
        .then((error) => {
          toast.error("Failed:" + error.message);
        });
    }
  };
  const isEnabled =
    email.length > 0 &&
    password.length > 0 &&
    name.length > 0 &&
    phone.length > 0;

  return (
    <div>
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
            value={name}
            onChange={(e) => nameChange(e.target.value)}
            pattern="^[A-Z]{4,20}$"
            maxLength={20}
            type="text"
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
            value={email}
            onChange={(e) => emailChange(e.target.value)}
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
            value={password}
            onChange={(e) => passwordChange(e.target.value)}
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
            value={phone}
            onChange={(e) => phoneChange(e.target.value)}
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
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}
