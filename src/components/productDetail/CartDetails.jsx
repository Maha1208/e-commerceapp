import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CART, ADD_CART, REMOVE_ITEM } from "../../redux/actions/Action";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "../../css/cartdetail.css";

const CartDetails = () => {
  const [data, setData] = useState([]);
  const { key } = useParams();
  const products = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const sendToCart = (e) => {
    dispatch(ADD_CART(e)); 
  };
  const deleteCart = (key) => {
    dispatch(DELETE_CART(key));
  };
  const removeItem = (item) => {
    dispatch(REMOVE_ITEM(item));
  };
  const compare = useCallback(() => {
    let compareData = products.filter((e) => {
      return e.key === key;
    });
    setData(compareData);
  }, [products, key]);

  useEffect(() => {
    compare();
  }, [compare]);

  return (
    <>
      <div className="product-container">
        <h2 className="text-center">Product Details Page </h2>
        <section className="detail-container">
          <div className="items-details">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.image} alt="images" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <div className="detail_size">
                            <p>Product : {ele.productname}</p>
                            <p>Type : {ele.type}</p>
                            <p>Order Review: {ele.somedata}</p>
                            <p>
                              Rating:
                              <b className="product-rating"> {ele.rating}★</b>
                            </p>
                            <p>Price : ₹{ele.price}</p>
                            <p>
                              Remove :
                              <i
                                className="fas fa-trash trash_button"
                                onClick={() => deleteCart(ele.key)}
                              ></i>
                            </p>
                            <p>Total :₹{ele.price * ele.qnty}</p>
                          </div>
                          <div
                            className="d-flex quantity_button"
                          >
                            <p
                              className="quantity_size"
                              onClick={
                                ele.qnty <= 1
                                  ? () => deleteCart(ele.key)
                                  : () => removeItem(ele)
                              }
                            >
                              -
                            </p>
                            <p>
                              <b>{ele.qnty}</b>
                            </p>
                            <p
                              className="quantity_size"
                              onClick={() => sendToCart(ele)}
                            >
                              +
                            </p>
                          </div>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CartDetails;
