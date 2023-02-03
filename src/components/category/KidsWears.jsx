import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "../mock/CardsData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/Action";
import Header from "../layouts/Header";
import "../../css/style.css";
import { toast, ToastContainer } from "react-toastify";

const KidsWears = () => {
  const [data, setData] = useState([]);

  const filterResult = (items) => {
    const result = CardsData.filter((curData) => {
      return curData.subcategory === items;
    });
    setData(result);
  };

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Product added in the cart");
  };
  return (
    <>
      <Header />
      <div className="d-flex nav1">
        <button
          className="layout1"
          onClick={() => filterResult("girl")}
        >
          <b>Girl set</b>
        </button>
        <br />
        <button
          className="layout1"
          onClick={() => filterResult("boy")}
        >
          <b>Boy set</b>
        </button>
        <br />
        <button
          className="layout1"
          onClick={() => filterResult("gowns")}
        >
          <b>Gowns</b>
        </button>
        <br />
        <button
          className="layout1"
          onClick={() => filterResult("nightwear")}
        >
          <b>NightWear</b>
        </button>
        <br />
      </div>
      <div className="product-container">
        <div className="row">
          {data.map((values) => {
            const { key, image, rating, productname, price } = values;
            return (
              <Card
                key={key} className="card_style"
              >
                <Card.Img
                  variant="top"
                  src={image}
                  className="card_img"
                />
                <Card.Body>
                  <Card.Title>{productname}</Card.Title>
                  <Card.Text>
                    price:₹ {price}
                    <Card.Title
                      className="rating1"
                    >
                      {rating}★
                    </Card.Title>
                  </Card.Text>
                  <div className="button_div d-flex">
                    <Button
                      variant="info"
                      onClick={() => send(values)}
                      className="col-lg-12"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default KidsWears;
