import React, { useState, useEffect, useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import { Table } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Header = () => {
    //navbar update
    const auth = sessionStorage.getItem('email');
    const navigate = useNavigate();


    const history = useNavigate();


    const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (key) => {
        dispatch(DLT(key))
    }

    const total = useCallback(() => {
        let price = 0;
        getdata.map((ele, key) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    });

    useEffect(() => {
        total();
    }, [total])


    return (
        <div>
            {
                auth ?
                    <Navbar bg="dark" variant="light" className='navbar'>
                        <Container>
                            <NavLink onClick={() => (history(-1))} className="text-decoration-none text-light"><b>Back</b></NavLink>
                            <Nav className="me-auto">
                                <NavLink to="/" className="text-decoration-none text-light mx-4" ><b>Home</b></NavLink>
                                <NavLink to="/Category" className="text-decoration-none text-light"><b>Category</b></NavLink>
                                <Link to="/SignIn" className="text-decoration-none text-light mx-4"><b>Logout</b></Link>
                            </Nav>
                            <Badge badgeContent={getdata.length} color="primary" //cart icon increment
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 30, cursor: "pointer" }} ></i>
                            </Badge>
                        </Container>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                getdata.length ?
                                    <div className='cart_details' style={{ width: "45rem", padding: 20 }}>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>ProductImage</th>
                                                    <th>Product Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    getdata.map((e) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td>
                                                                        <NavLink to={`/cart/${e.key}`} onClick={handleClose}>
                                                                            <img src={e.image} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                        </NavLink>
                                                                    </td>
                                                                    <td>
                                                                        <p>{e.prname}</p>
                                                                        <p>Price : ₹{e.price}</p>
                                                                        <p>Quantity : {e.qnty}</p>
                                                                        <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.key)}>
                                                                            <i className='fas fa-trash smalltrash'></i>
                                                                        </p>
                                                                    </td>

                                                                    <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.key)}>
                                                                        <i className='fas fa-trash largetrash'></i>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                                <p className='text-center'>Total :₹{price}</p>
                                                <NavLink to={`/payment`} onClick={handleClose} style={{ textDecoration: "none" }}>
                                                    <button className="checkout" type="button"><b>₹{price}<br />Checkout</b></button>
                                                </NavLink>
                                            </tbody>
                                        </Table>
                                    </div> :

                                    <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                        <i className='fas fa-close smallclose'
                                            onClick={handleClose}
                                            style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                        <p style={{ fontSize: 20 }}>Your carts is empty</p>
                                    </div>
                            }

                        </Menu>
                    </Navbar> 
                    
                    :

                    <Navbar bg="dark" variant="light" className='navbar'>
                        <Container>
                            <Nav className="me-auto">
                                <NavLink to="/" className="text-decoration-none text-light mx-3" ><b>Home</b></NavLink>
                                <NavLink to="/SignUp" className="text-decoration-none text-light mx-3" ><b>Register</b></NavLink>
                                <NavLink to="/SignIn" className="text-decoration-none text-light "><b>Login</b></NavLink>

                            </Nav>
                            <Badge badgeContent={getdata.length} color="primary" //cart icon increment
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 30, cursor: "pointer" }} ></i>
                            </Badge>
                        </Container>
                    </Navbar>
            }
        </div>
    )
}

export default Header