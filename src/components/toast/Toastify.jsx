import React from "react";
import { toast } from "react-toastify";

const Toastify = (message, type) => {
  switch (type) {
    case "success":
      return toast.success(
        <div>
          <p>{message}</p>
        </div>
      );
    case "error":
      return toast.error(
        <div>
          <p>{message}</p>
        </div>
      );
    case "info":
      return toast.info(
        <div>
          <p>{message}</p>
        </div>
      );
    default:
      return toast.warning(
        <div>
          <p> not defined...</p>
        </div>
      );
  }
};
export default Toastify;


