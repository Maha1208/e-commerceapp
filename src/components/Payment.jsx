import React from 'react'
import Header from './Header'

const Payment = () => {
  return (
    <>
    <Header/>
    <div>
      <link rel='stylesheet' href='CSS/Payment.css'></link>

      <div className="container">

        <form method="post">

          <div className="row">

            <div className="col">

              <h3 className="title">billing address</h3>

              <div className="inputBox">
                <span>Full name :</span>
                <input type="text" placeholder="Full name" name="name" />
              </div>
              <div className="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" name="email" />
              </div>
              <div className="inputBox">
                <span>address :</span>
                <input type="text" placeholder="Door No - street - locality" name="address" />
              </div>
              <div className="inputBox">
                <span>city :</span>
                <input type="text" placeholder="city" name="city" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="state" name="state" />
                </div>
                <div className="inputBox">
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456" name="zipcode" />
                </div>
              </div>

            </div>

            <div className="col">

              <h3 className="title">payment</h3>

              <div className="inputBox">
                <span>cards accepted :</span>
                <img src="/Images/card_img.png" alt="" />
              </div>
              <div className="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="name" />
              </div>
              <div className="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="month" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="exp year" />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="123" />
                </div>
              </div>

            </div>

          </div>

          <input type="submit" value="proceed to checkout" className="submit-btn" />

        </form>

      </div>

    </div>
    </>
  )
}

export default Payment