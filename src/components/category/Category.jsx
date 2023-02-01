import React from 'react';
import Header from "../layouts/Header";
import "../../css/category.css";
import { Link } from 'react-router-dom';

function Category() {
    return (
        <div className='cate'>
            <Header />
            <h1><b>Welcome To Category Of Dresses </b></h1>

            <div className="container2">
                <div className="category">
                    <Link to="/menwears" style={{ textDecoration: "none" }}>
                        <img src="/Images/men.jpg" alt="men" />
                        <div className="overlay1">Men Wears</div></Link>
                </div>
                <div className="category">
                    <Link to="/womenethnic" style={{ textDecoration: "none" }}>
                        <img src="/Images/ethnic.jpg" alt="ethnic" />
                        <div className="overlay1">WomenEthnic Wears</div></Link>
                </div>
                <div className="category">
                    <Link to="/womenwestern" style={{ textDecoration: "none" }}>
                        <img src="/Images/western.jpeg" alt="western" />
                        <div className="overlay1">Women Western Wears</div></Link>
                </div>

                <div className="category">
                    <Link to="/kidswears" style={{ textDecoration: "none" }}>
                        <img src="/Images/kids.jpg" alt="Kids" />
                        <div className="overlay1">Kids Wears</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Category
