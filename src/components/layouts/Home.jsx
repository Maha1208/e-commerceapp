import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Home() {     
    return (
        <div>
            <link rel='stylesheet' href='CSS/Home.css'></link>
            <Header/>
            {/* <!-- main background image --> */}
            <div className="main-background">
                <a href="/womenethnic" className="shopnow-btn">Shop now</a>
            </div>

            {/*products display */}
            <div className="products-type">
                <h1><b>Product Types</b></h1>
                <div className="main-product">
                    <div className="inner-product">
                        <img src="Images/sarees/purple.jpeg" alt="Saree" />
                        <a href="/womenethnic" id="shop-now">shop now</a>
                    </div>

                    <div className="inner-product">
                        <img src="Images/KidsWear/g3.jpg" alt=" " />
                        <a href="/kidswears" id="shop-now">shop now</a>
                    </div>

                    <div className="inner-product">
                        <img src="Images/MensWears/S6.jpg" alt=" " />
                        <a href="/menswears" id="shop-now">shop now</a>
                    </div>
                </div>
            </div>

            {/* <!-- 2nd banner start --> */}
            <div className="inner-banner">
                <a href="/kidswears" id="shope-now">shop now</a>
                <img src="Images/Banner/banner6.jpg" alt=" " />

            </div>
            {/* <!-- 2nd banner start ended --> */}

            <div className="products-type">
                <h1><b>New Arrivals</b></h1>
                <div className="main-product">
                    <div className="inner-product">
                        <img src="Images/Lehenga/babypink.jpg" alt="Lehenga" />
                        <a href="/womenethnic" id="shop-now">shop now</a>
                    </div>

                    <div className="inner-product">
                        <img src="Images/western/wj1.jpg" alt=" " />
                        <a href="/womenwestern" id="shop-now">shop now</a>
                    </div>

                    <div className="inner-product">
                        <img src="Images/KidsWear/b1.jpg" alt=" " />
                        <a href="/menwears" id="shop-now">shop now</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

