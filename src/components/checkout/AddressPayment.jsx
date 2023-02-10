import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../css/payment.css";
import swal from 'sweetalert';
import Header from "../layouts/Header";
import Toastify from "../toast/Toastify";
const Payment = () => {
  const [address, addressChange] = useState({
    fullname:"",
    email:"",
    address:"",
    city:"",
    state:"",
    zipcode:""
  });

  const handleAddress=(e)=>{
    const {name,value}=e.target;
    addressChange((prev)=>{
    return{...prev,[name]:value}
    })
    };
  const navigate = useNavigate();

  const orderPlace = (event) => {
    axios
      .post("http://localhost:4000/AddressPayment", {
        name: `${address.fullname}`,
        email: `${address.email}`,
        address: `${address.address}`,
        city: `${address.city}`,
        state: `${address.state}`,
        zipcode: `${address.zipcode}`,
      })
      .then(() => {
        swal("Order Placed successfully", "Cash On Delivery", "success");
        navigate("/");

      })
      .catch((error) => {
        Toastify("Failed:" + error.message,'error');
      });
    event.preventDefault();
  };
  const isEnabled =
  address.email.length > 0 &&
  address.fullname.length > 0 &&
  address.address.length > 0 &&
  address.city.length > 0 &&
  address.state.length &&
  address.zipcode.length;

  return (
    <div>
      <Header />
      <div>
        <form className="paymentform" onSubmit={orderPlace}>
          <h3 className="title"> Address for the Delivery</h3>

          <label>Full Name :</label>
          <input
            type="text"
            placeholder="Full name"
            name="fullname"
            value={address.fullname}
            onInput={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>Email :</label>
          <input
            type="email"
            placeholder="example@example.com"
            name="email"
            onInput={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>Address :</label>
          <input
            type="text"
            placeholder="Door No - street - locality"
            name="address"
            onInput={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>City :</label>
          <input
            type="text"
            placeholder="city"
            name="city"
            onInput={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>State :</label>
          <input
            type="text"
            placeholder="state"
            name="state"
            onInput={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>Zip Code :</label>
          <input
            type="text"
            placeholder="123 456"
            name="zipcode"
            onInput={handleAddress}
            id="inputvalue"
            maxLength={6}
          />
          <br />

          <button
            type="submit"
            value="Place Order"
            className="submit-btn"
            disabled={!isEnabled}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};
export default Payment;
