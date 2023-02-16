import React from "react";
import { categories } from "../mock/CardsData";
import CardsData from "../mock/CardsData";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toastify from "../toast/Toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../../redux/actions/Action";
import "../../css/category1.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const filterProducts = (items) => {
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
     <div className="side-nav">
        {categories.map((category) => (
          <div>
            <h3>
              {category.icon}
              {category.name}
            </h3>
            {category.subcategories.map((subcategory) => (
              <button
                key={subcategory.subcategoryType}
                onClick={() => filterProducts(subcategory.subcategoryType)}
              >
                {subcategory.productName}
              </button>
          ))}
          </div>
      ))}
      </div>
      <div className="product-list">
        <div className="row">
          {products.map((values) => {
            const { key, image, rating, productname, price } = values;
            return (
              <Card key={key} className="card_style">
                <Card.Img 
                variant="top" 
                src={image} 
                className="card_img" 
                />
                <Card.Body>
                  <Card.Title>{productname}</Card.Title>
                  <Card.Text>
                    price:₹ {price}
                  <Card.Title className="rating"> {rating}★</Card.Title>
                  </Card.Text>
                  <div className="button_div d-flex">
                    <Button
                    variant="info"
                    onClick={() => sendToCart(values)}
                    className="col-lg-12">
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
  );
}

export default ProductList;
