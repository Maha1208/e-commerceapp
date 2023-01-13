import React from 'react';
import Header from "./Header";
import "./style.css";

function Category(){
    return (
        <div>
            <link rel='stylesheet' href='CSS/Category.css'></link>
             <Header/>
            <h1><b>Welcome to Category</b></h1>

            <div className="container">
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="WomenEthnic">
                        <img src="/Images/ethnic.jpg" alt="ethnic"/>
                        <div className="overlay">WomenEthnic Wears</div></a>
                </div>
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="WomenWestern">
                        <img src="/Images/western.jpeg" alt="western"/>
                        <div className="overlay">Women Western Wears</div></a>
                </div>
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="MenWears">
                        <img src="/Images/men.jpg" alt="men"/>
                        <div className="overlay">Men Wears</div></a>
                </div>
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="KidsWears">
                        <img src="/Images/kids.jpg" alt="Kids"/>
                        <div className="overlay">Kids Wears</div></a>

                </div>
            </div>
        </div>
    )
}

export default Category
