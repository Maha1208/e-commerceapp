import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({
   isAuthenticated, 
   component: Component,
   ...restProps
}) => (
   <Route
      {...restProps}
      component={(props) =>
         isAuthenticated ? (
            <Component {...props} />
         ) : (
            <Redirect to="/signin" />
         )
      }
   />
);
export default PrivateRoute;