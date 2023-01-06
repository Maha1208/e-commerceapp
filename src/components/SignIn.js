import axios from 'axios';
import React, { Component, createRef } from 'react'

export default class SignIn extends Component {

    constructor(props, id) {
        super(props);
        this.forms = createRef()
        this.onformsubmit = this.onformsubmit.bind(this)
        console.log(id);
    }

    onformsubmit(event) {
        axios.get("http://localhost:4000/SignUp?email=" + this.forms.email.value + "&password=" + this.forms.password.value)
            .then(value => {
                if (value.data.length > 0) {
                    sessionStorage.setItem("email", value.data[0].email)
                    window.history.back()
                }
                else {
                    alert ('Account not exist please enter valid credentials or SignUp')
                      }

            })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <link rel='stylesheet' href='CSS/Login.css'></link>
                <form id='form' ref={ref => this.forms = ref} onSubmit={this.onformsubmit} >
                <h1>Login</h1>

                    <div className="container">
                        <label htmlFor="email"><b>Email</b></label><br/>
                        <input type="text" placeholder="Enter Emailid" name="email" required /><br/>

                        <label htmlFor="password"><b>Password</b></label><br/>
                        <input type="password" placeholder="Enter Password" name="password" required /><br/>

                        <button id='button' type="submit">Login</button><br/>
                       
                    </div>
                    <div className="container">
                        <button id="cancel" type="button" className="cancelbtn"><a href="/">Cancel</a></button>
                        <span className="SignUp"><a href="SignUp">SignUp</a></span>
                    </div>
                </form>
            </div>
        )
    }
}
