import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../css/payment.css";
import swal from "sweetalert";
import Toastify from "../toast/Toastify";
import FormInput from "../clubComponent/FormInput";

const Payment = () => {
  const [address, addressChange] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleAddress = (e) => {
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
    <form className="paymentform" onSubmit={placingOrder}>
      <h3 className="title"> Address for the Delivery</h3>
      <FormInput
      datatestid="fullname_test"
      label="Full Name"
      type="text"
      name="fullName"
      onInput={handleAddress}
      />
      <FormInput
      datatestid="email_test"
      label="Email"
      type="email"
      name="email"
      onInput={handleAddress}
      />
      <FormInput
      datatestid="address_test"
      label="Address"
      type="text"
      placeholder="Door No - street - locality"
      name="address"
      onInput={handleAddress}
      />
      <FormInput
      datatestid="city_test"
      label="City"
      type="text"
      name="city"
      onInput={handleAddress}
      />
      <FormInput
      datatestid="state_test"
      label="State"
      type="text"
      name="state"
      onInput={handleAddress}
      />
      <FormInput
      datatestid="zipcode_test"
      label="Zip Code"
      type="number"
      name="zipcode"
      onInput={handleAddress}
      />
      <FormInput
      type="submit"
      className="submit-button"
      disabled={!isEnabled}
      value="Place Order"
      />
    </form>
  );
};
export default Payment;
