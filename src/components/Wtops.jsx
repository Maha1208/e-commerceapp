import React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from './CardsData';
import { useState } from 'react'
import "./style.css";
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action'


const Wtops = () => {

  const [data, setData] = useState(CardsData.TopsProductItems);

  const dispatch = useDispatch();

  const send= (e) => {
    dispatch(ADD(e));
    // setData(ADD);  // problem remove this line
  }


  return (
    <>
      <Header />
      <div className='container mt-3'>
        <h2 className='text-center'>Sarees Collection</h2>

        <div className='row d-flex justify-content-center align-items-center '>
          {
            data.map((element,key) => {
              return (
                
                  <Card key={key} style={{ width: '20rem',border:"black" }} className="mx-3 mt-3 card_style">
                    <Card.Img variant="top" src={element.image} style={{height:"16rem"}} className="mt-3" />
                    <Card.Body>
                      <Card.Title>{element.prname}</Card.Title>
                      <Card.Text>
                        price:₹ {element.price}
                        <Card.Title className='rating mt-3' style={{ width: '3rem',height:'1.5rem',border:"black",fontSize:'15px' }}>{element.rating}★</Card.Title>
                      </Card.Text>
                      <div className='button_div d-flex justify-content-center'>
                      <Button variant="primary"
                      onClick={() => send(element)}
                      className='col-lg-12'>Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                
              )

            })
          }

        </div>
      </div>
    </>
  )
}

export default Wtops