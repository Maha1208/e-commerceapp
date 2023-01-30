import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/footer.css";


const Footer = () => {

    return (
            <footer className="footer">
                <div className="container1">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Shop</h4>
                            <ul>
                                <li><Link to="">about us</Link></li>
                                <li><Link to="/SignUp">Register</Link></li>
                                <li><Link to=" ">Address</Link></li>

                            </ul>
                        </div>
                    
                        <div className="footer-col">
                            <h4>Dress Kart online shop</h4>
                            <ul>
                                <li><Link to='/womenwestern'>Western Dresses</Link></li>
                                <li><Link to="/menswears">Mens Wears</Link></li>
                                <li><Link to="/kidswears">Kids Wears</Link></li>
                                <li><Link to="/womenswears">Womens Wears </Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <Link to=" "><i className="fab fa-facebook-f"></i></Link>
                                <Link to=" "><i className="fab fa-twitter"></i></Link>
                                <Link to=" "><i className="fab fa-instagram"></i></Link>
                                <Link to=" "><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

    )
}

export default Footer
