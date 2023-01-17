// import { positions } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function SignIn() {
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:4000/SignUp?email=" + email).then((response) => {
                return response.json();
            }).then((response) => {
                // console.log(response)
                if (Object.keys(response).length === 0) {
                    toast.error('Please Enter valid email');
                } else {
                    if (response[0].password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('email', email);
                        usenavigate('/')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter Email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    return (
        <div>
            <Header />
            <link rel='stylesheet' href='CSS/Login.css'></link>
            <form id='form' onSubmit={ProceedLogin} >
                <h1>Login</h1>

                <div className="container">
                    <label><b>Email</b></label><br />
                    <input type="text" value={email} onChange={e => emailupdate(e.target.value)} placeholder="Enter Emailid" name="email" required/><br />

                    <label><b>Password</b></label><br />
                    <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} placeholder="Enter Password" name="password" required/><br />

                    <button id='button' type="submit">Login</button><br />

                </div>
            </form>
            <ToastContainer
                position="top-center"
            />
        </div>
    )
}

