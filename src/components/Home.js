import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <link rel='stylesheet' href='CSS/Home.css'></link>

                <meta name='viewport' content='width=device-width,initial-scale=1, shrink-to-fit=no' />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="anonymous"
                    crossOrigin="anonymous" />

                <nav>
                    <ul className="nav-flex-row">
                        <li className="nav-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="Category">Category</a>
                        </li>
                        <li className="nav-item">
                            <a href="SignUp">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a href="SignIn">SignIn</a>
                        </li>
                        <li className="nav-item">
                            <a href="AdminHome">Admin Home</a>
                        </li>

                    </ul>
                </nav>
                <section className="section-intro">
                    <header>
                        <h1 style={{ color: "Purple" }}> Welcome To Online Shopping</h1>
                    </header>
                </section>
            </div>
        )
    }
}
