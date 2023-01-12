import React, { Component, createRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <link rel='stylesheet' href='CSS/SignUp.css'></link>
        <div className="container">
          <form id='form' onSubmit={this.submitdata} ref={ref => this.forms = ref} >
            <h1>Register</h1>
            <br />
            <label>Name</label><br />
            <input className='box' type="text" placeholder="name" name="name" required /><br /><br />

            <label> Email </label><br />
            <input className='box' type="email" placeholder="email" name="email" required /><br /><br />

            <label>Password</label><br />
            <input className='box' type="password" placeholder="Password" name="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[a-z Z-A].{8,12})" /><br /><br />

            <label>PhoneNo</label><br />
            <input className='box' type="text" placeholder="phoneno" name="phoneno" required /><br />
            <br />

            <input id='Reg' type="submit" value="Register" />
          </form>
          <ToastContainer
            position="top-center"
          />
        </div>
      </div>
    )
  }
}
