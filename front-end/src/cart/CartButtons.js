import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="__TTR">
      <button type="button" className="another-btn9" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount561">{amount}</h2>
      <button type="button" className="another-btn9" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartButtons;
