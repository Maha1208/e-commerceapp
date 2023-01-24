import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function Home() {     
    return (
        <div>
            <link rel='stylesheet' href='css/Home.css'></link>
            <Header/>
            {/* main background image */}
            <div className="main-background">
                <Link to="/womenethnic" className="shopnow-btn">Shop now</Link>
            </div>

            {/*products display */}
            <div className="products-type">
                <h1><b>Dress Collections For All</b></h1>
                <div className="main-product">
                    <div className="inner-product">
                        <img src="Images/sarees/purple.jpeg" alt="Saree" />
                        <Link to="/womenethnic" id="shop-now">shop now</Link>
                    </div>

                    <div className="inner-product">
                        <img src="Images/KidsWear/g3.jpg" alt=" " />
                        <Link to="/kidswears" id="shop-now">shop now</Link>
                    </div>

                    <div className="inner-product">
                        <img src="Images/MensWears/S6.jpg" alt=" " />
                        <Link to="/menswears" id="shop-now">shop now</Link>
                    </div>
                </div>
            </div>

            {/* <!-- 2nd banner start --> */}
            <div className="inner-banner">
                <Link href="/kidswears" id="shope-now">shop now</Link>
                <img src="Images/Banner/banner6.jpg" alt=" " />

            </div>
            {/* <!-- 2nd banner start ended --> */}

            <div className="products-type">
                <h1><b>New Arrivals</b></h1>
                <div className="main-product">
                    <div className="inner-product">
                        <img src="Images/Lehenga/babypink.jpg" alt="Lehenga" />
                        <Link href="/womenethnic" id="shop-now">shop now</Link>
                    </div>

                    <div className="inner-product">
                        <img src="Images/western/wj1.jpg" alt=" " />
                        <Link href="/womenwestern" id="shop-now">shop now</Link>
                    </div>

                    <div className="inner-product">
                        <img src="Images/KidsWear/b1.jpg" alt=" " />
                        <Link href="/menwears" id="shop-now">shop now</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

