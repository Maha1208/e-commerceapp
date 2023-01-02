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
                <form className="modal-content animate" ref={ref => this.forms = ref}
                    onSubmit={this.onformsubmit} onChange={() => { document.getElementById("incorrectcred").style.display = "none" }} >

                    <div className="imgcontainer">
                        <span className="close" title="Close Modal">&times;</span>
                    </div>

                    <div className="container">
                        <label htmlFor="email"><b>Email</b></label><br />
                        <input type="text" placeholder="Enter EmailId" name="email" required /><br />

                        <label htmlFor="password"><b>Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="password" required /><br />

                        <button type="submit">Login</button><br />
                        <label>
                            <input type="checkbox" defaultChecked name="remember" value="Remember me" />Remember me
                        </label>
                    </div>
                    <div className="container" style={{ backgroundColor: "black" }}>
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="/">password?</a></span>
                    </div>
                </form>
            </div>
        )
    }
}
