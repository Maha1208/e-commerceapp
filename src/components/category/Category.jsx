import React from 'react';
import Header from "../layouts/Header";
import "../../css/category.css";


import {Link} from 'react-router-dom';

function Category(){
    return (
        <div>

             <Header/>
            <h1><b>Welcome To Category Of Dresses </b></h1>

            <div className="container">
                <div className="box">
                    <Link to="/womenethnic" style={{ textDecoration: "none" }}>
                        <img src="/Images/ethnic.jpg" alt="ethnic"/>
                        <div className="overlay">WomenEthnic Wears</div></Link>
                </div>
                <div className="box">
                    <Link to="/womenwestern"  style={{ textDecoration: "none" }}>
                        <img src="/Images/western.jpeg" alt="western"/>
                        <div className="overlay">Women Western Wears</div></Link>
                </div>
                <div className="box">
                    <Link to="/menwears" style={{ textDecoration: "none" }}>
                        <img src="/Images/men.jpg" alt="men"/>
                        <div className="overlay">Men Wears</div></Link>
                </div>
                <div className="box">
                    <Link to="/kidswears" style={{ textDecoration: "none" }}>
                        <img src="/Images/kids.jpg" alt="Kids"/>
                        <div className="overlay">Kids Wears</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Category
