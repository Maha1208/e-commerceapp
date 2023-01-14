import React from "react";
import Header from "./Header";
import "./style.css";

export default function kidsWears() {
    return (
        <div>
            <link rel='stylesheet' href='CSS/Category.css'></link>
            <Header/>  
            
            <h1><b>Welcome to Kids Wear Shopping</b></h1>

            <div className="container">
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Girlset ">
                        <img src="/Images/gset.jpg" alt="girl sets" />
                        <div className="overlay">Girl sets</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Boyset ">
                        <img src="/Images/bset.jpg" alt="boy sets" />
                        <div className="overlay">Boy sets</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Gowns">
                        <img src="/Images/gowns.png" alt="gowns" />
                        <div className="overlay">Gowns</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href="Nightwear">
                        <img src="/Images/nightwear.jpeg" alt="nightwear" />
                        <div className="overlay">Night Wears</div></a>
                </div>
            </div>
        </div>
    )


}

