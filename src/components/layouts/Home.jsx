import React from "react";
import "../../css/home.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Header />
      {/* main background image */}
      <div className="main-background">
        <Link to="/category1" className="shopnow-btn">
          Shop now
        </Link>
      </div>

      {/*products display */}
      <div className="products-type">
        <h1>
          <b>Dress Collections For All</b>
        </h1>
        <div className="main-product">
          <div className="inner-product">
            <img src="Images/sarees/purple.jpeg" alt="Saree" />
            <Link to="category1" id="shop-now">
              shop now
            </Link>
          </div>

          <div className="inner-product">
            <img src="Images/KidsWear/g3.jpg" alt=" " />
            <Link to="category1" id="shop-now">
              shop now
            </Link>
          </div>

          <div className="inner-product">
            <img src="Images/MensWears/S6.jpg" alt=" " />
            <Link to="category1" id="shop-now">
              shop now
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- 2nd banner start --> */}
      <div className="inner-banner">
        <Link to="category1" id="shope-now">
          shop now
        </Link>
        <img src="Images/Banner/banner6.jpg" alt=" " />
      </div>
      {/* <!-- 2nd banner start ended --> */}

      <div className="products-type">
        <h1>
          <b>New Arrivals</b>
        </h1>
        <div className="main-product">
          <div className="inner-product">
            <img src="Images/Lehenga/babypink.jpg" alt="Lehenga" />
            <Link to="category1" id="shop-now">
              shop now
            </Link>
          </div>

          <div className="inner-product">
            <img src="Images/western/wj1.jpg" alt=" " />
            <Link to="category1" id="shop-now">
              shop now
            </Link>
          </div>

          <div className="inner-product">
            <img src="Images/KidsWear/b1.jpg" alt=" " />
            <Link to="category1" id="shop-now">
              shop now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
