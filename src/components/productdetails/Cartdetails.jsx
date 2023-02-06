import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CART, ADD_CART, REMOVE_ITEM } from "../../redux/actions/Action";
import Header from "../layouts/Header";
import { useCallback } from "react";
import "../../css/cartdetail.css";

const Cartdetails = () => {
  const [data, setData] = useState([]);

  const { key } = useParams();

  const products = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();
  // add data
  const send = (e) => {
    dispatch(ADD_CART(e)); //contains the selected products
  };

  const deleteCart = (key) => {
    dispatch(DELETE_CART(key));
  };

  // remove one
  const removeItem = (item) => {
    dispatch(REMOVE_ITEM(item));
  };

  //Getting page for selected Products
  const compare = useCallback(() => {
    let comparedata = products.filter((e) => {
      return e.key === key;
    });
    setData(comparedata);
  }, [products, key]);

  useEffect(() => {
    compare();
  }, [compare]);

  return (
    <>
      <Header />
      <div className="productcontainer">
        <h2 className="text-center">Product Details Page </h2>
        <section className="detailcontainer">
          <div className="itemsdetails">
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
                              <b className="rating"> {ele.rating}★</b>
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
                            style={{
                              background: "#ddd",
                            }}
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
                              onClick={() => send(ele)}
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

export default Cartdetails;
