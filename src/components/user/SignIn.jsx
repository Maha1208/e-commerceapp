// import axios from "axios";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "../layouts/Header";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../css/login.css";

// export default function SignIn() {
//   const [email, emailupdate] = useState("");
//   const [password, passwordupdate] = useState("");

//   const usenavigate = useNavigate();

//   const onFormSubmit = (event) => {
//     axios
//       .get(
//         "http://localhost:4000/SignUp?email=" + email + "&password=" + password
//       )
//       .then((value) => {
//         sessionStorage.setItem("email", value.data[0].email);
//         usenavigate("/");
//       })
//       .catch(toast.error("Invalid email or password"));
//     event.preventDefault();
//   };

//   const isEnabled = email.length > 0 && password.length > 0;

//   return (
//     <div className="log">
//       <Header />
//       <form id="loginform" onSubmit={onFormSubmit}>
//         <h1>Login</h1>

//         <div className="logincontainer">
//           <label>
//             <b>Email</b>
//           </label>
//           <br />
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => emailupdate(e.target.value)}
//             placeholder="Enter Emailid"
//             name="email"
//             id="input"
//             required
//           />
//           <br />

//           <label>
//             <b>Password</b>
//           </label>
//           <br />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => passwordupdate(e.target.value)}
//             placeholder="Enter Password"
//             name="password"
//             id="input"
//             required
//           />
//           <br />

//           <button id="button" type="submit" disabled={!isEnabled}>
//             Login
//           </button>
//           <br />
//         </div>
//       </form>
//       <ToastContainer position="top-center" />
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import "../../css/login.css";

export default function SignIn() {
  const [email, emailupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:4000/SignUp?email=" + email)
        .then((response) => {
          // console.log(response)
          if (Object.keys(response).length === 0) {
            toast.error("Please Enter valid email");
          } else {
            if (response[0].password === password) {
              toast.success("Success");
              sessionStorage.setItem("email", email);
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
    e.preventDefault();
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
    <div>
      <Header />
      <form id="loginform" onSubmit={proceedLogin}>
        <h1>Login</h1>

        <div className="container">
          <label>
            <b>Email</b>
          </label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => emailupdate(e.target.value)}
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
            value={password}
            onChange={(e) => passwordupdate(e.target.value)}
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
