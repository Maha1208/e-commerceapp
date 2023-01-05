import React from "react";

export default function kidsWears() {
    return (
        <div>
            <link rel='stylesheet' href='CSS/KidsWears.css'></link>
            <div className="topnav" >
                <a style={{ textDecoration: "none" }} className="log" href="/"><b>Home</b></a>
            </div>

            <h1>Welcome to Kids Wear Shopping</h1>

            <div className="container">
                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/gset.jpg" alt="girl sets" />
                        <div className="overlay">Girl sets</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/bset.jpg" alt="boy sets" />
                        <div className="overlay">Boy sets</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/gowns.png" alt="gowns" />
                        <div className="overlay">Gowns</div></a>
                </div>

                <div className="box">
                    <a style={{ textDecoration: "none" }} href=" ">
                        <img src="/Images/nightwear.jpeg" alt="nightwear" />
                        <div className="overlay">Night Wears</div></a>
                </div>
            </div>
        </div>
    )


}

