import React from 'react';
import { useNavigate } from 'react-router-dom';
import Link from 'react'


const Logout = () => {

  const navigate = useNavigate();

    sessionStorage.clear();
        navigate('/SignIn');

  return (
    <div>
     <Link to="/SignIn"><b>SignIn</b></Link>  
    </div>
  )
}

export default Logout
