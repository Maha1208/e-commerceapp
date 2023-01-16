import React, { Component, createRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.forms = createRef()
    this.submitdata = this.submitdata.bind(this)
  }

  submitdata(event) {

    axios.get("http://localhost:4000/SignUp?email=" + this.forms.email.value || "&phoneno=" + this.forms.phoneno.value)
      .then(data => {
        if (data.data.length === 0) {
          axios.post("http://localhost:4000/SignUp", { name: this.forms.name.value, email: this.forms.email.value, password: this.forms.password.value, phoneno: this.forms.phoneno.value, })
            .then(() => {
              toast.success("Account created successfully please Login")

            })
            .catch(error => {
              toast(error)
            })
        }
        else {
          toast.info("Account already exist please Login")
        }
      })

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Header/>
        <link rel='stylesheet' href='CSS/SignUp.css'></link>
        <div className="container">
          <form id='form' onSubmit={this.submitdata} ref={ref => this.forms = ref} >
            <h1>Register</h1>
            <br />
            <label>Name</label><br />
            <input className='box' pattern="^[A-Z]{4,20}_.[A-Z]{4,20}$" minLength={4} maxLength={20} type="text" placeholder="Name" name="name" required /><br />
            <span>Name should be in UpperCase</span>
            <br />

            <label> Email </label><br />
            <input className='box' type="email" placeholder="email" name="email" required /><br />
            <span>Enter valid email id</span><br />

            <label>Password</label><br />
            <input className='box' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$" minLength={8} maxLength={15} type="password" placeholder="Password" name="password" required /><br />
            <span>must include 1 uppercase, 1 lowercase and 1 digit special character not allowed</span><br />

            <label>PhoneNo</label><br />
            <input className='box' pattern="\d{10}" maxLength={10} type="text" placeholder="phoneno" name="phoneno" required /><br />
            <span>must be 10 digits</span><br />
        
           <button  id='Reg' type="submit">Register</button>
            {/* <input id='Reg' type="submit" value="Register" /> */}
          </form>
          <ToastContainer
            position="top-center"
          />
        </div>
      </div>
    )
  }
}
