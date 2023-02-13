import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CART } from "../../redux/actions/Action";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { Table } from "@mui/material";
import "../../css/style.css";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const user = sessionStorage.getItem("email");
  const history = useNavigate();
  const [price, setPrice] = useState(0);
  const products = useSelector((state) => state.cartreducer.carts);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const deleteCart = (key) => {
    dispatch(DELETE_CART(key));
  };

  const total = useCallback(() => {
    let price = 0;
    products.map((ele) => {
      return (price = ele.price * ele.qnty + price);
    });
    setPrice(price);
  }, [products]);

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      {user ? (
        <Navbar bg="dark" className="navbar">
          <Container>
            <NavLink
              onClick={() => history(-1)}
              className="text-decoration-none link-color"
            >
              <b>Back</b>
            </NavLink>
            <Nav className="me-auto">
              <NavLink to="/" className="text-decoration-none link-color">
                <b>Home</b>
              </NavLink>
              <NavLink
                to="/products"
                className="text-decoration-none link-color"
              >
                <b>Category</b>
              </NavLink>
              <Link
                to="/logout"
                className="text-decoration-none link-color"
              >
                <b>Logout</b>
              </Link>
            </Nav>
            <Badge
              badgeContent={products.length}
              color="primary" 
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                className="fa-solid fa-cart-shopping shopping-cart"
              ></i>
            </Badge>
          </Container>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {products.length ? (
              <div
                className="cart_details"
              >
                <Table>
                  <thead>
                    <tr>
                      <th>
                        Product Image
                      </th>
                      <th>
                        Product Details
                      </th>
                    </tr>
                    <hr/>
                  </thead>
                  <tbody>
                    {products.map((e) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <Link to={`/cart/${e.key}`}>
                                <img
                                  src={e.image}
                                  alt="" className="cart_image"
                                />
                                <br />
                              </Link>
                            </td>
                            <td>
                              <th>{e.productname}</th>
                              <br />
                              <th>Price : ₹{e.price}</th>
                              <br />
                              <th>Quantity : {e.qnty}</th>
                              <br />
                            </td>
                            -
                            <td
                              onClick={() => deleteCart(e.key)}
                            >
                              <i className="fas fa-trash trash_button"></i>
                            </td>
                          </tr>
                          <hr/>
                        </>
                      );
                    })}
                    <NavLink
                      to={`/checkout`}
                      className="text-decoration-none"
                    >
                      <button className="checkout" type="button">
                        <b>
                          ₹{price}
                          <br />
                          Checkout
                        </b>
                      </button>
                    </NavLink>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_details d-flex"
              >
                <i
                  className="fas fa-close close_button"
                  onClick={handleClose}
                ></i>
                <p>Your cart is empty</p>
              </div>
            )}
          </Menu>
        </Navbar>
      ) : (
        <Navbar className="navbar">
          <Container>
            <Nav className="me-auto">
              <NavLink to="/" className="text-decoration-none link-color">
                <b>Home</b>
              </NavLink>
              <NavLink
                to="/SignUp"
                className="text-decoration-none link-color"
              >
                <b>Register</b>
              </NavLink>
              <NavLink
                to="/SignIn"
                className="text-decoration-none link-color"
              >
                <b>Login</b>
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      )}
      <ToastContainer position="top-center"/>
    </>
  );
};

export default Header;
