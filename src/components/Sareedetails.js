import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Sareedetails = () => {

const[data,setData] = useState([])

const {id} =useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const compare =() =>{
    let comparedata = getdata.filter((e)=>{
      return e.id === id
    });
    console.log(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id]);


  return (
    <>
    <div className="container mt-2">
      <h2 className='text-center'>Items Details Page
      </h2>

      <section className='container mt-3'>
        <div className="iteamsdetails">
          {
            data.map((element)=>
            {
              return(
                <>
                <div className="items_img">
            <img src={element.image} alt="" />
          </div>

          <div className="details">
            <Table>
              <tr>
                <td>
                  <p> <strong>ProductItems</strong>  :{element.prname} </p>
                  <p> <strong>Price</strong>  : ₹{element.price}</p>
                  <p> <strong>Type</strong>  :{element.address}</p>
                  <p> <strong>Total</strong>  :₹90</p>
               </td>
                <td>
                  <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {element.rating}	</span></p>
                  <p><strong>Order Review :</strong> <span> {element.somedata}	</span></p>
                  <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span></p>
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

export default Sareedetails