import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Layouts/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [phone, phonechange] = useState("");

    const navigate=useNavigate();


  const submitData=(event)=>{
   
    axios.get("http://localhost:4000/SignUp?email=" +email + "&password=" +password)
      .then (data=>{
        if(data.data.length === 0){
          axios.post("http://localhost:4000/SignUp",{name:`${name}`,email:`${email}`,password:`${password}`,phone:`${phone}`})
            .then(()=>{
              alert("Account created successfully please login")
              navigate('/SignIn')
            })
            .catch(error=>
              {
                toast.error(error)
            })
        }
        else{
          alert("Account already exist")
        }
      })
      event.preventDefault();    
  }
  const isEnabled = email.length > 0 && password.length > 0 && name.length > 0 && phone.length > 0;
  return (
          <div>
            <Header/>
            <link rel='stylesheet' href='CSS/SignUp.css'></link>
            <div className="container">
              <form id='form' onSubmit={submitData}>
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
            
               <button  id='Reg' type="submit"  disabled={!isEnabled}>Register</button>
              </form>
              <ToastContainer
                position="top-center"
              />
            </div>
          </div>
        )
  }
