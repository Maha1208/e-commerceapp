import React from 'react'
import Header from "./Header";
import "./style.css";

const WomenEthnic = () => {
  return (
    <div>
      <link rel='stylesheet' href='CSS/WomenEthnic.css'></link>
         <Header/>  

      <h1>Welcome to Women Ethic Wears</h1>

      <div className="container">
        <div className="box">
          <a style={{ textDecoration: "none" }} href="Cottonsaree">
            <img src="/Images/cotton.jpeg" alt="women wear" />
            <div className="overlay">Sarees</div></a>
        </div>
        <div className="box">
          <a style={{ textDecoration: "none" }} href="Lehenga ">
            <img src="/Images/lehenga.jpeg" alt="Women wear" />
            <div className="overlay">Lehenga</div></a>
        </div>
        <div className="box">
          <a style={{ textDecoration: "none" }} href="Kurtas">
            <img src="/Images/kurtas.png" alt="Women wear" />
            <div className="overlay">Kurtas</div></a>

        </div>
        <div className="box">
          <a style={{ textDecoration: "none" }} href="Plazzo">
            <img src="/Images/plazzo.jpg" alt="Women wear" />
            <div className="overlay">Plazzo and Jeans</div></a>

        </div>
      </div>
    </div>
  )
}

export default WomenEthnic
