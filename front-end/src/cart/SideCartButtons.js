import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SideCartButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="HJFDSHJ">
      <button type="button" className="another-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount56">{amount}</h2>
      <button type="button" className="another-btn" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default SideCartButtons;
