import React from "react";
import { toast } from "react-toastify";

const Toastify = (errorMessage, type) => {
  switch (type) {
    case "success":
      return toast.success(
        <div>
          <p>{errorMessage}</p>
        </div>
      );
    case "error":
      return toast.error(
        <div>
          <p>{errorMessage}</p>
        </div>
      );
    case "warning":
      return toast.warning(
        <div>
          <p>{errorMessage}</p>
        </div>
      );
    default:
      return toast.warning(
        <div>
          <p>Toast not defined...</p>
        </div>
      );
  }
};
export default Toastify;


