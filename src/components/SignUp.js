import React, { Component, createRef } from 'react';
import axios from 'axios';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.forms = createRef()
    this.submitdata = this.submitdata.bind(this)

  }
  submitdata(event) {

    axios.get("http://localhost:4000/SignUp?email=" + this.forms.email.value)
      .then(data => {
        if (data.data.length === 0) {
          axios.post("http://localhost:4000/SignUp", { name: this.forms.name.value, email: this.forms.email.value, password: this.forms.password.value, phoneno: this.forms.phoneno.value, })
            .then(() => {
              alert("Account created successfully please login again")
            })
            .catch(error => {
              alert(error)
            })
        }
        else {
          alert("Account already exist")
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
            <br/>
            <label>Name</label><br/>
            <input id='box' type="text" placeholder="name" name="name" required /><br/><br/>
           
            <label> Email </label><br/>
            <input id='box' type="email" placeholder="email" name="email" required /><br/><br/>
           
            <label>password</label><br/>
            <input id='box' type="password" name="password" placeholder="Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[a-z Z-A].{8,12})"/><br/><br/>
            
            <label>PhoneNo</label><br/>
            <input id='box' type="number" placeholder="phoneno" name="phoneno" required/><br/>
            <br/>

            <input id='Reg' type="submit" value="Register"/> 
            <br/>
          </form>
        </div>
      </div>
    )
  }
}
