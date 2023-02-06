import React from "react";
import { Route, Redirect } from "react-router-dom";
const PublicRoute = ({
   isAuthenticated,
   component: Component,
   ...restProps
}) => (
   <Route
       {...restProps}
       component={(props) =>
          isAuthenticated 
          ?  <Redirect to="/" /> 
          :  <Component {...props} />
       }
   />
);
export default PublicRoute;