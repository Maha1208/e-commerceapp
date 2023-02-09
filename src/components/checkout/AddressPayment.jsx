import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../layouts/Header";
import "../../css/payment.css";
import swal from 'sweetalert';

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
      })
      .catch((error) => {
        swal(error);
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
            onChange={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>Email :</label>
          <input
            type="email"
            placeholder="example@example.com"
            name="email"
            onChange={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>Address :</label>
          <input
            type="text"
            placeholder="Door No - street - locality"
            name="address"
            onChange={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>City :</label>
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>State :</label>
          <input
            type="text"
            placeholder="state"
            name="state"
            onChange={handleAddress}
            id="inputvalue"
          />
          <br />

          <label>Zip Code :</label>
          <input
            type="text"
            placeholder="123 456"
            name="zipcode"
            onChange={handleAddress}
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
