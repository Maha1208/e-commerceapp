import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../redux/actions/action';
import Header from './Header';

const Cartdetails = () => {

  const [data, setData] = useState([]);

  const { key } = useParams();

  // const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.key === key
    });
    setData(comparedata);
  }

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


  useEffect(() => {
    compare();
  }, [key])


  return (
    <>
      <Header/>

      <div className="container mt-2">
        <h2 className='text-center'>Product Details Page
        </h2>

        <section className='container mt-3'>
          <div className="itemsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.image} alt="images"/>
                    </div>

                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Product</strong>  :{ele.prname} </p>
                            <p> <strong>Price</strong>  : ₹{ele.price}</p>
                            <p> <strong>Type</strong>  :{ele.type}</p>
                            <p> <strong>Total</strong>  :₹{ele.price * ele.qnty}</p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
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
        <button className='Backbutton'>Go Back</button>
      </div>
    </>
  )
}

export default Cartdetails