import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../css/payment.css";
import swal from "sweetalert";
import Toastify from "../toast/Toastify";

const Payment = () => {
  const [address, addressChange] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handlingAddress = (e) => {
    const { name, value } = e.target;
    addressChange((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const navigate = useNavigate();
  const placingOrder = (event) => {
    fetch("http://localhost:4000/AddressPayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${address.fullName}`,
        email: `${address.email}`,
        address: `${address.address}`,
        city: `${address.city}`,
        state: `${address.state}`,
        zipcode: `${address.zipcode}`,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        swal("Order Placed successfully", "Cash On Delivery", "success");
        navigate("/");
      })
      .catch((error) => {
        Toastify("Failed:" + error.message, "error");
      });
    event.preventDefault();
  };

  const isEnabled =
    Object.values(address).every(value => value.length > 0);
  return (
    <div>
      <div>
        <form className="paymentform" onSubmit={placingOrder}>
          <h3 className="title"> Address for the Delivery</h3>
          <label>Full Name </label>
          <input
            type="text"
            name="fullName"
            onInput={handlingAddress}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onInput={handlingAddress}
          />
          <label>Address</label>
          <input
            type="text"
            placeholder="Door No - street - locality"
            name="address"
            onInput={handlingAddress}
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            onInput={handlingAddress}
          />
          <label>State</label>
          <input
            type="text"
            name="state"
            onInput={handlingAddress}
          />
          <label>Zip Code</label>
          <input
            type="text"
            name="zipcode"
            onInput={handlingAddress}
            maxLength={6}
          /><br />
          <button
            type="submit"
            value="Place Order"
            className="submit-button"
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
