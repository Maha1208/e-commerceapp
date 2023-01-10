import React from 'react'

const WomenEthnic = () => {
  return (
    <div>
      <link rel='stylesheet' href='CSS/WomenEthnic.css'></link>
      <div className="topnav" >
        <a style={{ textDecoration: "none" }} className="log" href="/"><b>Home</b></a>
      </div>

      <h1>Welcome to Women Ethic Wears</h1>

      <div className="container">
        <div className="box">
          <a style={{ textDecoration: "none" }} href="Cottonsaree">
            <img src="/Images/cotton.jpeg" alt="women wear" />
            <div className="overlay">Cotton Sarees</div></a>
        </div>
        <div className="box">
          <a style={{ textDecoration: "none" }} href=" ">
            <img src="/Images/silk.jpeg" alt="women wear" />
            <div className="overlay">Silk Sarees</div></a>
        </div>
        <div className="box">
          <a style={{ textDecoration: "none" }} href=" ">
            <img src="/Images/lehenga.jpeg" alt="Women wear" />
            <div className="overlay">Lehenga</div></a>
        </div>
        <div className="box">
          <a style={{ textDecoration: "none" }} href=" ">
            <img src="/Images/kurtas.png" alt="Women wear" />
            <div className="overlay">Kurtas</div></a>

        </div>
        <div className="box">
          <a style={{ textDecoration: "none" }} href=" ">
            <img src="/Images/churidar.jpg" alt="Women wear" />
            <div className="overlay">Churidars</div></a>

        </div>
      </div>
    </div>
  )
}

export default WomenEthnic
