import React from "react";
import Header from "./Header";
import "./style.css";

export default function MenWears() {
    return (
        <div>
            <link rel='stylesheet' href='CSS/MenWears.css'></link>
                <Header/>            
            <h1><b>Welcome to MenWears Shopping</b></h1>

            <div className="container">
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Mshirt">
                        <img src="/Images/Mshirts.jpg" alt="Mshirts" />
                        <div className="overlay">Shirts</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Mtshirt ">
                        <img src="/Images/Mtshirt.jpg" alt="Men t-shirt" />
                        <div className="overlay">T-shirt</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Mjeans">
                        <img src="/Images/Mjeans.jpg" alt="Mjeans" />
                        <div className="overlay">Jeans</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Mformalpants">
                        <img src="/Images/Mformalpant.jpg" alt="Mformalpant" />
                        <div className="overlay">Formal pants</div></a>

                </div>
            </div>
        </div>
    )


}

