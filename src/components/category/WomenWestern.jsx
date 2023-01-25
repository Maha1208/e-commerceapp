import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from '../mock/CardsData';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/actions/Action';
import Header from '../layouts/Header';
import "../../css/style.css";
import "../../css/bg.css";
import { toast, ToastContainer } from 'react-toastify';


const WomenWestern = () => {

  const [data, setData] = useState([]);

  const filterResult = (items) => {
    const result = CardsData.filter((curData) => {
      return curData.subcategory === items && curData;
    });
    setData(result)

  }
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Product added in the cart");

  }

  return (
    <>          
      <Header />
      <h1 className="text-center text-black bg-info">Women Western Wear Categories</h1>
      <div className='d-flex nav1'>
        <button className="btn  mb-2 mx-5 layout1" onClick={() => filterResult("tops")}><b>Tops and Tunics</b></button><br />
        <button className="btn  mb-2 mx-5 layout1" onClick={() => filterResult("wtshirt")}><b>T-Shirt</b></button><br />
        <button className="btn  mb-2 mx-5 layout1" onClick={() => filterResult("wjeans")}><b>Jeans</b></button><br />
        <button className="btn  mb-2 mx-5 layout1" onClick={() => filterResult("jumpsuits")}><b>JumpSuits</b></button><br />
      </div>
      <div className='container-fluid mx-5 mt-4'>
        <div className="row mt-5 mx-5">
          {
            data.map((values) => {
              const { key, image, rating, prname, price } = values;
              return (
                <Card key={key} style={{ width: '23rem', border: 'black' }} className="mx-4 mt-4 card_style">
                  <Card.Img variant="top" src={image} style={{ height: "15rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{prname}</Card.Title>
                    <Card.Text>
                      price:₹ {price}
                      <Card.Title className='rating mt-3' style={{ width: '3rem', height: '1.5rem', border: "black", fontSize: '15px' }}>{rating}★</Card.Title>
                    </Card.Text>
                    <div className='button_div d-flex justify-content-center'>
                      <Button variant="info"
                        onClick={() => send(values)}
                        className='col-lg-12'>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              )

            })
          }

        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default WomenWestern
