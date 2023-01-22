import React from 'react'
import { useState } from 'react';
import Header from '../layouts/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [fullname, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [address, addresschange] = useState("");
  const [city, citychange] = useState("");
  const [state, statechange] = useState("");
  const [zipcode, zipcodechange] = useState("");


  // const navigate=useNavigate();

  const IsValidate = () => {
    let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (fullname === null || fullname === '') {
            isproceed = false;
            errormessage += ' provide full name';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Invalid email';
        }
        if (address === null || address === '') {
            isproceed = false;
            errormessage += 'address is mandatory';
        }
        if (city === null || city === '') {
            isproceed = false;
            errormessage += 'enter city';
        }
        if (state === null || state === '') {
          isproceed = false;
          errormessage += 'enter state';
      }
      if (zipcode === null || zipcode === '') {
        isproceed = false;
        errormessage += 'enter zipcode';
    }
        if(!isproceed){
          toast.warning(errormessage)
        }
        return isproceed;
      }
      const orderPlace =(e) =>{
        e.preventDefault();
        let obj1={fullname,email,address,city,state,zipcode};
    
        if(IsValidate()){
    
        fetch("http://localhost:4000/AddressPayment",{
          method:"post",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(obj1)
      }).then((response)=>{
        toast.success("Ordered placed Successfully.")
        // navigate('/');
      }).catch((error)=>{
        toast.error("Order declined")
      })
      }
    }

  

  return (
    <div>
      <Header/>
      <link rel='stylesheet' href='css/Payment.css'></link>
      <div className="container">
        <form className='form' onSubmit={orderPlace}>

          <h3 className="title">billing address</h3>

          <label>Full name :</label>
          <input type="text" placeholder="Full name" name="fullname" onChange={e => namechange(e.target.value)}/><br/>

          <label>email :</label>
          <input type="email" placeholder="example@example.com" name="email" onChange={e => emailchange(e.target.value)} /><br/>

          <label>address :</label>
          <input type="text" placeholder="Door No - street - locality" name="address" onChange={e => addresschange(e.target.value)}/><br/>
          <label>city :</label>
          <input type="text" placeholder="city" name="city" onChange={e => citychange(e.target.value)}/><br/>

          <label>state :</label>
          <input type="text" placeholder="state" name="state" onChange={e => statechange(e.target.value)}/><br/>

          <label>zip code :</label>
          <input type="text" placeholder="123 456" name="zipcode" onChange={e => zipcodechange(e.target.value)}/><br/>

          <button type="submit" value="Place Order" className="submit-btn">Place Order</button>

        </form>
        <ToastContainer
            position="top-center"
          />
      </div>
      </div>
      )
}

      export default Payment