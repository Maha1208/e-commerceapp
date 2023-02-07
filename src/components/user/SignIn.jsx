// import axios from "axios";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "../layouts/Header";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../css/login.css";

// export default function SignIn() {
//   const [email, emailUpdate] = useState("");
//   const [password, passwordUpdate] = useState("");

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
//        event.preventDefault();
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
//             onChange={(e) => emailUpdate(e.target.value)}
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
//             onChange={(e) => passwordUpdate(e.target.value)}
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
