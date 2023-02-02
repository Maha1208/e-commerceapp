import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../layouts/Header";
import { useState } from "react";
import "../../css/payment.css";

const Payment = () => {
  const [fullname, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [address, addressChange] = useState("");
  const [city, cityChange] = useState("");
  const [state, stateChange] = useState("");
  const [zipcode, zipcodeChange] = useState("");

  const orderPlace = (event) => {
    axios
      .post("http://localhost:4000/AddressPayment", {
        name: `${fullname}`,
        email: `${email}`,
        address: `${address}`,
        city: `${city}`,
        state: `${state}`,
        zipcode: `${zipcode}`,
      })
      .then(() => {
        toast.success("Address added successfully");
        toast.success("COD only Available");
      })
      .catch((error) => {
        toast.error(error);
      });
    event.preventDefault();
  };
  const isEnabled =
    email.length > 0 &&
    fullname.length > 0 &&
    address.length > 0 &&
    city.length > 0 &&
    state.length &&
    zipcode.length;

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
            onChange={(e) => nameChange(e.target.value)}
            id="inputvalue"
          />
          <br />

          <label>Email :</label>
          <input
            type="email"
            placeholder="example@example.com"
            name="email"
            onChange={(e) => emailChange(e.target.value)}
            id="inputvalue"
          />
          <br />

          <label>Address :</label>
          <input
            type="text"
            placeholder="Door No - street - locality"
            name="address"
            onChange={(e) => addressChange(e.target.value)}
            id="inputvalue"
          />
          <br />

          <label>City :</label>
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={(e) => cityChange(e.target.value)}
            id="inputvalue"
          />
          <br />

          <label>State :</label>
          <input
            type="text"
            placeholder="state"
            name="state"
            onChange={(e) => stateChange(e.target.value)}
            id="inputvalue"
          />
          <br />

          <label>Zip Code :</label>
          <input
            type="text"
            placeholder="123 456"
            name="zipcode"
            onChange={(e) => zipcodeChange(e.target.value)}
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
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};
export default Payment;
