import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../../redux/actions/Action';
import Header from '../layouts/Header';
import { useCallback } from 'react';
import "../../css/cartdetail.css";


const Cartdetails = () => {

  const [data, setData] = useState([]);

  const { key } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts); // selecting particular data from the cartreducer

  const dispatch = useDispatch();
  // add data
  const send = (e) => {
    dispatch(ADD(e)); //contains the selected products
  }

  const dlt = (key) => {
    dispatch(DLT(key));
    window.history.back();
  }

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }

  //Getting page for selected Products
  const compare = useCallback(() => {
    let comparedata = getdata.filter((e) => {
      return e.key === key
    });
    setData(comparedata);
  },[getdata, key]);

  useEffect(() => {
    compare();
  }, [compare])

  return (
    <>
      <Header />
      <div className="productcontainer mt-5">
        <h2 className='text-center mb-5'>Product Details Page </h2>
        <section className='detailcontainer mt-5'>
          <div className="itemsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.image} alt="images" />
                    </div>

                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Product</strong>  :{ele.prname}</p>
                            <p> <strong>Price</strong>  : ₹{ele.price}</p>
                            <p> <strong>Type</strong>  :{ele.type}</p>
                            <p> <strong>Total</strong>  :₹{ele.price * ele.qnty}</p>
                            <div className='mt-5 mx-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <p style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.key) : () => remove(ele)}>-</p>
                              <p style={{ fontSize: 26 }}>{ele.qnty}</p>
                              <p style={{ fontSize: 24 }} onClick={() => send(ele)}>+</p>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating </strong>: <b className='rating'> {ele.rating}★</b></p>
                            <p><strong>Order Review </strong> {ele.somedata}</p>
                            <p><strong>Remove :</strong><i className='fas fa-trash' onClick={() => dlt(ele.key)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Cartdetails
