// import React from 'react'
// // import CardsData from '../mock/CardsData';
// // import { useState } from 'react';
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useDispatch } from "react-redux";
// import { ADD_CART } from "../../redux/actions/Action";
// import "../../css/category1.css";
// import Header from '../layouts/Header';
// import { toast, ToastContainer } from "react-toastify";

// const Category = (props) => {
//   const dispatch = useDispatch();

//   const send = (e) => {
//     dispatch(ADD_CART(e));
//     toast.success("Product added in the cart");
//   };

//   return (
//     <>
//     <Header/>
//       <div className="product-container">
//         <div className="row">
//           {props.data?.map((values) => {
//             const { key, image, rating, productname, price } = values;
//             return (
//               <Card
//                 key={key} className="card_style"
//               >
//                 <Card.Img
//                   variant="top"
//                   src={image}
//                   className="card_img"
//                 />
//                 <Card.Body>
//                   <Card.Title>{productname}</Card.Title>
//                   <Card.Text>
//                     price:₹ {price}
//                     <Card.Title
//                       className="rating1"
//                     >
//                       {rating}★
//                     </Card.Title>
//                   </Card.Text>
//                   <div className="button_div d-flex">
//                     <Button
//                       variant="info"
//                       onClick={() => send(values)}
//                       className="col-lg-12"
//                     >
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   )
// }

// export default Category

import React from 'react'
import CardsData from '../mock/CardsData';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../../redux/actions/Action";
import "../../css/category1.css";
import Header from '../layouts/Header';
import { toast, ToastContainer } from "react-toastify";
import WomanIcon from '@mui/icons-material/Woman';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ChildCareIcon from '@mui/icons-material/ChildCare';


const Category = () => {
  const [data, setData] = useState([]);

  const filterResult = (items) => {
    const result = CardsData.filter((curData) => {
      return curData.subcategory === items;
    });
    setData(result);
  };
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD_CART(e));
    toast.success("Product added in the cart");
  };

  return (
    <>
    <Header/>
  <div>
  <div class="sidenav">

  <div>
  <h4 className='heading'><ChildCareIcon/>KidsWears</h4> 
  <button onClick={() => filterResult("gowns")}>Gowns</button>
  <button onClick={() => filterResult("girl")}>Girl Set</button> 
  <button onClick={() => filterResult("boy")}>Boy Set</button>
  <button onClick={() => filterResult("nightwear")}>Night Wear</button>
  </div><br/>

  <div>
  <h4><WomanIcon/>EthnicWears</h4> 
  <button onClick={() => filterResult("sarees")}>Saree Collections</button>
  <button onClick={() => filterResult("lehenga")}>Lehenga Collections</button> 
  <button onClick={() => filterResult("kurtas")}>Kutas Collection</button>
  <button onClick={() => filterResult("plazoo")}>Plazoo Collections</button>
  </div><br/>

  <div>
  <h4><WomanIcon/>WesternWears</h4> 
  <button onClick={() => filterResult("tops")}>Women Tops & Tunics</button>
  <button onClick={() => filterResult("wtshirt")}>Women T-Shirts</button> 
  <button onClick={() => filterResult("wjeans")}>Women Jeans</button>
  <button onClick={() => filterResult("jumpsuits")}>Women Jump Suits</button>
  </div><br/>

  <div>
  <h4><EmojiPeopleIcon/>Mens Wear</h4> 
  <button onClick={() => filterResult("formal")}>Men Formal Pants</button>
  <button onClick={() => filterResult("mshirt")}>Men Shirts</button> 
  <button onClick={() => filterResult("mtshirt")}>Men T-shirts</button>
  <button onClick={() => filterResult("mjeans")}>Men Jeans</button>
  </div><br/>
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
      </div>
      <ToastContainer />
    </>
  )
}

export default Category