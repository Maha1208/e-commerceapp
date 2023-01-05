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
        const msg = document.getElementById("incorrectcred");
        axios.get("http://localhost:4000/SignUp?email=" + this.forms.email.value + "&password=" + this.forms.password.value)

            .then(value => {
                if (value.data.length > 0) {
                    sessionStorage.setItem("email", value.data[0].email)
                    window.history.back()
                }
                else {
                    msg.style.display = "block"
                }
            })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <link rel='stylesheet' href='CSS/Login.css'></link>
                <form className="modal" ref={ref => this.forms = ref}
                    onSubmit={this.onformsubmit} onChange={() => { document.getElementById("incorrectcred").style.display = "none" }} >

                    <div className="container">
                        <label htmlFor="email"><b>Email</b></label><br />
                        <input type="text" placeholder="Enter Emailid" name="email" required /><br />

                        <label htmlFor="password"><b>Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="password" required /><br />

                        <button type="submit" >Login</button><br />
                        <label>
                            <input type="checkbox" defaultChecked name="remember" value="Remember me" />Remember me
                        </label>
                    </div>
                    <div className="container">
                        <button type="button" className="cancelbtn"><a href="/">Cancel</a></button>
                        <span className="SignUp"><a href="SignUp">SignUp</a></span>
                    </div>
                </form>
            </div>
        )
    }
}
