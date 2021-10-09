import React, { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";

const Alert = ({ msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return (
    <div style={{display:'flex'}}>
      <BiErrorCircle className="wesee" />
      <p className="kingo">{msg}</p>
    </div>
  );
};

export default Alert;
