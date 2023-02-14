import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { ADD_CART } from "../../redux/actions/Action";
import CardsData from '../mock/CardsData';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import WomanIcon from '@mui/icons-material/Woman';
// import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
// import ChildCareIcon from '@mui/icons-material/ChildCare';
import "../../css/category1.css";
import Toastify from '../toast/Toastify';

const Category = () => {
  const [products, setProducts] = useState([]);
  const filterResult = (items) => {
    const result = CardsData.filter((curData) => {
      return curData.subcategory === items;
    });
    setProducts(result);
  };
  const dispatch = useDispatch();
  const sendToCart = (e) => {
    dispatch(ADD_CART(e));
    Toastify("Product added in the cart", "success");
  };
  return (
    <>
      <div class="sidenav">
        {/* code for category buttons */}
        return (
        <div class="sidenav">
          {CardsData.map(categories => (
            <div>
              <h4 className="heading">{categories.icon} {categories.category}</h4>
              {categories.CardsData.map(subCategories => (
                <button onClick={() => filterResult(subCategories.subcategory)}>
                  {subCategories.subcategory}
                </button>
              ))}
            </div>
          ))}
        </div>
        );
      </div>
      <div className="product-container">
        <div className="row">
          {products.map((values) => {
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
                      onClick={() => sendToCart(values)}
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
    </>
  )
}

export default Category