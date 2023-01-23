import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../layouts/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

const onformsubmit=(event) =>{
    axios.get("http://localhost:4000/SignUp?email=" +email + "&password=" +password)
    .then(value=>{
            sessionStorage.setItem("email",value.data[0].email);
            toast.success('Login successful');
            usenavigate('/')
    })
    .catch(
          toast.error('Invalid email or password'));
      event.preventDefault(); 
}

const isEnabled = email.length > 0 && password.length >0;

return (
    <div>
        <Header />
        <link rel='stylesheet' href='css/Login.css'></link>
        <form id='form' onSubmit={onformsubmit} >
            <h1>Login</h1>

            <div className="container">
                <label><b>Email</b></label><br />
                <input type="text" value={email} onChange={e => emailupdate(e.target.value)} placeholder="Enter Emailid" name="email" required/><br />

                <label><b>Password</b></label><br />
                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} placeholder="Enter Password" name="password" required/><br />

                <button id='button' type="submit" disabled={!isEnabled}>Login</button><br />

            </div>
        </form>
        <ToastContainer
            position="top-center"
        />
    </div>
)
}
