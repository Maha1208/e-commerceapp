import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../redux/actions/action';
import Header from './layouts/Header';
import { useCallback } from 'react';

const Cartdetails = () => {

  const [data, setData] = useState([]);

  const { key } = useParams();

  // const history = useNavigate();
  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  // add data
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
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
  
  },[getdata,key]);

  useEffect(() => {
    compare();
  },[compare]) 


  return (
    <>
      <Header />

      <div className="container mt-5">
        <h2 className='text-center mb-5'>Product Details Page
        </h2>

        <section className='container mt-5'>
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
                            <p> <strong>Product</strong>  :<b>{ele.prname}</b> </p>
                            <p> <strong>Price</strong>  : <b>₹{ele.price}</b></p>
                            <p> <strong>Type</strong>  :<b>{ele.type}</b></p>
                            <p> <strong>Total</strong>  :<b>₹{ele.price * ele.qnty}</b></p>
                            <div className='mt-5 mx-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.key) : () => remove(ele)}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span className='rating'> {ele.rating}★</span></p>
                            <p><strong>Order Review :</strong> <span> {ele.somedata}</span></p>
                            <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => dlt(ele.key)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span></p>
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
