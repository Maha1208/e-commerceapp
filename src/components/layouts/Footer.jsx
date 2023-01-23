import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div>
            <link rel='stylesheet' href='css/Footer.css'></link>

            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Shop</h4>
                            <ul>
                                <li><Link to="">about us</Link></li>
                                <li><Link to="/SignUp">Register</Link></li>
                                <li><Link to=" ">Address</Link></li>

                            </ul>
                        </div>
                    
                        <div class="footer-col">
                            <h4>Dress Kart online shop</h4>
                            <ul>
                                <li><Link to='/womenwestern'>Western Dresses</Link></li>
                                <li><Link to="/menswears">Mens Wears</Link></li>
                                <li><Link to="/kidswears">Kids Wears</Link></li>
                                <li><Link to="/womenswears">Womens Wears </Link></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <Link to=" "><i class="fab fa-facebook-f"></i></Link>
                                <Link to=" "><i class="fab fa-twitter"></i></Link>
                                <Link to=" "><i class="fab fa-instagram"></i></Link>
                                <Link to=" "><i class="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
