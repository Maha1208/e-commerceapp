import React from 'react'
import Header from '../Layouts/Header'

const Payment = () => {
  return (
    <div>
      <Header/>
      <link rel='stylesheet' href='CSS/Payment.css'></link>
      <div className="container">
        <form className='form'>

          <h3 className="title">billing address</h3>

          <label>Full name :</label>
          <input type="text" placeholder="Full name" name="name" /><br/>

          <label>email :</label>
          <input type="email" placeholder="example@example.com" name="email" /><br/>

          <label>address :</label>
          <input type="text" placeholder="Door No - street - locality" name="address" /><br/>

          <label>city :</label>
          <input type="text" placeholder="city" name="city" /><br/>

          <label>state :</label>
          <input type="text" placeholder="state" name="state" /><br/>

          <label>zip code :</label>
          <input type="text" placeholder="123 456" name="zipcode" /><br/>

          <button type="submit" value="Place Order" className="submit-btn">Place Order</button>

        </form>
      </div>
      </div>
      )
}

      export default Payment