import React from 'react';
import { Navigate} from 'react-router-dom';


const Logout = () => {

  // const navigate = useNavigate();
    sessionStorage.clear();
        // navigate('/SignIn');

  return (
    <div>
     <Navigate to="/SignIn"></Navigate>  
    </div>
  )
}

export default Logout
