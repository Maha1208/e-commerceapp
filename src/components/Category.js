import React from 'react'

const Category = () => {
    return (
        <div>
            <link rel='stylesheet' href='CSS/Category.css'></link>
            <div className="topnav" >
                <a style={{ textDecoration: "none" }} className="log" href="/"><b>Home</b></a>
            </div>

            <h1>Welcome to Category</h1>

            <div className="container">
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="WomenEthnic">
                        <img src="/Images/ethnic.jpg" alt="" />

                        <div className="overlay">WomenEthnic Wears</div></a>
                </div>
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="WomenWestern">
                        <img src="/Images/western.jpeg" alt="" />
                        <div className="overlay">Women Western Wears</div></a>
                </div>
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="MensWears">
                        <img src="/Images/men.jpg" alt="" />
                        <div className="overlay">Men Wears</div></a>
                </div>
                <div className="box">
                    <a style={{ textDecoration: "none" }} href="KidsWears">
                        <img src="/Images/kids.jpg" alt="" />

                        <div className="overlay">Kids Wears</div></a>

                </div>
            </div>
        </div>
    )
}

export default Category
