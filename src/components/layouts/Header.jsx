import React, { useState, useEffect, useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import { Table } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../../redux/actions/Action';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../../css/style.css";

const Header = () => {
    //navbar update
    const user = sessionStorage.getItem('email');
    
    // const navigate = useNavigate();
    const history = useNavigate();

    const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.cartreducer.carts); //products from the cartreducer

    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = useState(null); //menu open
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
        getdata.map((ele,key) => { //,key 
           return price = ele.price * ele.qnty + price
        });
        setPrice(price);
    },[getdata]);

    useEffect(() => {
        total();
    }, [total]) //grant total


    return (
        <>
            {
                user ?
                    <Navbar bg="dark" className='navbar'>
                        <Container>
                            <NavLink onClick={() => (history(-1))} className="text-decoration-none text-light"><b>Back</b></NavLink>
                            <Nav className="me-auto">
                                <NavLink to="/" className="text-decoration-none text-light mx-4" ><b>Home</b></NavLink>
                                <NavLink to="/Category" className="text-decoration-none text-light"><b>Category</b></NavLink>
                                <Link to="/logout" className="text-decoration-none text-light mx-4"><b>Logout</b></Link>
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
                                    <div className='cart_details' style={{ width: "55rem", padding: 20 }}>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th><b>Product Image</b></th>
                                                    <th><b>Product Name</b></th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    getdata.map((e) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td>
                                                                        <Link to={`/cart/${e.key}`} onClick={handleClose}>
                                                                            <img src={e.image} style={{ width: "10rem", height: "10rem" }} alt="" />
                                                                        </Link>
                                                                    </td>
                                                                    <td>
                                                                        <th>{e.prname}</th><br/>
                                                                        <th>Price : ₹{e.price}</th><br/>
                                                                        <th>Quantity : {e.qnty}</th><br/>
                                                                    </td>-

                                                                    <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.key)}>
                                                                        <i className='fas fa-trash largetrash'></i>
                                                                    </td>
                                                                </tr>
                                                                

                                                            </>
                                                        )
                                                    })
                                                }
                                                <NavLink to={`/checkout`} onClick={handleClose} style={{ textDecoration: "none" }}>
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
                                <NavLink to="/" className="text-decoration-none text-light" ><b>Home</b></NavLink>
                                <NavLink to="/SignUp" className="text-decoration-none text-light mx-5" ><b>Register</b></NavLink>
                                <NavLink to="/SignIn" className="text-decoration-none text-light mx-2 "><b>Login</b></NavLink>
                            </Nav>
                        </Container>
                    </Navbar>
            }
        </>
    )
}

export default Header