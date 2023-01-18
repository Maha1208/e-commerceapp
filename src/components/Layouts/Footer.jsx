import React from 'react'

const Footer = () => {

    return (
        <div>
            <link rel='stylesheet' href='CSS/Footer.css'></link>

            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Shop</h4>
                            <ul>
                                <li><a href="#About">about us</a></li>
                                <li><a href="/SignUp">Register</a></li>
                                <li><a href=" ">Address</a></li>

                            </ul>
                        </div>
                    
                        <div class="footer-col">
                            <h4>Dress Kart online shop</h4>
                            <ul>
                                <li><a href="/WomenWestern">Western Dresses</a></li>
                                <li><a href="/MensWears">Mens Wears</a></li>
                                <li><a href="/KidsWears">Kids Wears</a></li>
                                <li><a href="/WomensWears">Womens Wears </a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href=" "><i class="fab fa-facebook-f"></i></a>
                                <a href=" "><i class="fab fa-twitter"></i></a>
                                <a href=" "><i class="fab fa-instagram"></i></a>
                                <a href=" "><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
