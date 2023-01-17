import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function SignUp(){
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [phone, phonechange] = useState("");

  const navigate=useNavigate();

  const IsValidate = () => {
    let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Name should be in capital letters';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Invalid email';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password doesn\'t match the given pattern';
        }
        if (phone === null || phone === '') {
            isproceed = false;
            errormessage += 'enter valid phone number';
        }
        if(!isproceed){
          toast.warning(errormessage)
        }
        return isproceed;
      }


  const handleSubmit =(e) =>{
    e.preventDefault();
    let regobj={name,email,password,phone};
    //console.log(regobj);

    if(IsValidate()){

    fetch("http://localhost:4000/SignUp",{
      method:"post",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
  }).then((response)=>{
    toast.success("Registered Successfully.")
    navigate('/SignIn');
  }).then((error)=>{
    toast.error("Failed:" +error.message)
  })
  }
}
    
  return (
      <div>
        <Header/>
        <link rel='stylesheet' href='CSS/SignUp.css'></link>
        <div className="container">
          <form id='form' onSubmit={handleSubmit}>
            <h1>Register</h1>
            <br />
            <label>Name</label><br />
            <input className='box' value={name} onChange={e => namechange(e.target.value)} pattern="^[A-Z]{4,20}$" maxLength={20} type="text" placeholder="Name" required /><br />
            <span>Name should be in UpperCase</span>
            <br />

            <label> Email </label><br />
            <input className='box' value={email} onChange={e => emailchange(e.target.value)} type="email" placeholder="email" name="email" required /><br />
            <span>Enter valid email id</span><br />

            <label>Password</label><br />
            <input className='box' value={password} onChange={e => passwordchange(e.target.value)} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$" minLength={8} maxLength={15} type="password" placeholder="Password" name="password" required /><br />
            <span>must include 1 uppercase, 1 lowercase and 1 digit special character not allowed</span><br />

            <label>PhoneNo</label><br />
            <input className='box' value={phone} onChange={e => phonechange(e.target.value)} pattern="^\d{10}$"  type="text" placeholder="phoneno" name="phoneno" required /><br />
            <span>must be 10 digits</span><br />
        
           <button  id='Reg' type="submit">Register</button>
          </form>
          <ToastContainer
            position="top-center"
          />
        </div>
      </div>
    )
  }
