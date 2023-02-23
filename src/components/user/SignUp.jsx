import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/signup.css";
import swal from 'sweetalert'
import Toastify from "../toast/Toastify";
import FormInput from "../clubComponent/FormInput";

export default function SignUp() {
  const [details, detailsChange] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: ""
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    detailsChange((prev) => {
      return { ...prev, [name]: value }
    })
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/SignUp?email=${details.email}`);
      const json = await response.json();
      if(json.length === 0) {
        const response = await fetch("http://localhost:4000/SignUp", {
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
        if(response.status === 201){
          swal("Account created successfully, please login", `Welcome ${details.name}`, "success");
          navigate("/SignIn");
        }
      }
      else{
        Toastify("Account already exists, please Login or use a different email id to register", "info");
      }
    } 
    catch (error) 
    {
      Toastify(`${error.message}`, "error");
    }
  };
  const isEnabled =
    Object.values(details).every(value => value.length > 0);
  return (
    <div className="signup">
      <form id="signup-form" onSubmit={handleSignUp}>
        <h1>Register</h1>
        <FormInput
        datatestid="name_test"
        label="Name"
        onInput={handleInputChange}
        pattern="^[A-Z]{4,20}$"
        type="text"
        name="name"
        span="Name should be in UpperCase"
        />
        <FormInput 
        datatestid="email_test"
        label="Email"
        onInput={handleInputChange}
        type="email"
        name="email"
        span="Enter valid email id"
        />
        <FormInput
        datatestid="password_test"
        label="Password"
        onInput={handleInputChange}
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$"
        type="password"
        name="password"
        span="must include 1 uppercase, 1 lowercase and 1 digit special character not allowed"
        />
        <FormInput 
        datatestid="phoneno_test"
        label="PhoneNo"
        onInput={handleInputChange}
        pattern="^\d{10}$"
        type="number"
        name="phoneno"
        span="must be 10 digits"
        />
        <FormInput
        id="signup-button" 
        type="submit" 
        value="Register"
        disabled={!isEnabled}
        />
      </form>
    </div>
  );
}
