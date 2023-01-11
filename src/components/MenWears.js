import React from "react";

export default function MenWears() {
    return (
        <div>
            <link rel='stylesheet' href='CSS/MenWears.css'></link>
            <div className="topnav" >
                <a style={{ textDecoration: "none" }} className="log" href="/"><b>Home</b></a>
            </div>

            <h1>Welcome to MenWears Shopping</h1>

            <div className="container">
                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/Mshirts.jpg" alt="Mshirts" />
                        <div className="overlay">Shirts</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/Mtshirt.jpg" alt="Men t-shirt" />
                        <div className="overlay">T-shirt</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/Mjeans.jpg" alt="Mjeans" />
                        <div className="overlay">Jeans</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/Mformalpant.jpg" alt="Mformalpant" />
                        <div className="overlay">Formal pants</div></a>

                </div>
            </div>
        </div>
    )


}

