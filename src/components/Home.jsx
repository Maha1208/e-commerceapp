import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
    return (
        <>
            <Header />
            <link rel='stylesheet' href='CSS/Home.css'></link>
            {/* <!-- main background image --> */}
            <div class="main-background">
                <a href="/Kurtas" class="shopnow-btn">Shop now</a>
            </div>

            {/*products display */}
            <div class="products-type">
                <h1><b>Product Types</b></h1>
                <div class="main-product">
                    <div class="inner-product">
                        <img src="Images/sarees/purple.jpeg" alt="Saree" />
                        <a href="/Cottonsaree" id="shop-now">shop now</a>
                    </div>

                    <div class="inner-product">
                        <img src="Images/KidsWear/g3.jpg" alt=" " />
                        <a href="Girlset" id="shop-now">shop now</a>
                    </div>

                    <div class="inner-product">
                        <img src="Images/MensWears/S6.jpg" alt=" " />
                        <a href="Mtshirt" id="shop-now">shop now</a>
                    </div>
                </div>
            </div>

            {/* <!-- 2nd banner start --> */}
            <div class="inner-banner">
                <a href="/Gowns" id="shope-now">shop now</a>
                <img src="Images/Banner/banner6.jpg" alt=" " />

            </div>
            {/* <!-- 2nd banner start ended --> */}

            <div class="products-type">
                <h1><b>New Arrivals</b></h1>
                <div class="main-product">
                    <div class="inner-product">
                        <img src="Images/Lehenga/babypink.jpg" alt="Lehenga" />
                        <a href="/Lehenga" id="shop-now">shop now</a>
                    </div>

                    <div class="inner-product">
                        <img src="Images/western/wj1.jpg" alt=" " />
                        <a href="/Wjumpsuits" id="shop-now">shop now</a>
                    </div>

                    <div class="inner-product">
                        <img src="Images/KidsWear/b1.jpg" alt=" " />
                        <a href="Mtshirt" id="shop-now">shop now</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

