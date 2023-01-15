import React from "react";
import Header from './Header'
export default function WomenWestern() {
    return (
        <div>
            <link rel='stylesheet' href='CSS/Category.css'></link>
            <Header/> 

            <h1><b>Welcome to Women Western Wears</b></h1>

            <div className="container">
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Wtops">
                        <img src="/Images/Wtops.jpg" alt="Women tops" />
                        <div className="overlay">Western Tops & Tunics</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Wtshirt">
                        <img src="/Images/Wtshirt.png" alt="Women t-shirt" />
                        <div className="overlay">T-shirt</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Wjumpsuits ">
                        <img src="/Images/Wjumpsuits.jpg" alt="Women jumpsuits" />
                        <div className="overlay">Jumpsuits</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Wjeans ">
                        <img src="/Images/Wjean.jpg" alt="Women jeans" />
                        <div className="overlay">Jeans ang Jeggings</div></a>
                </div>
                </div>
            </div>
    )


}

