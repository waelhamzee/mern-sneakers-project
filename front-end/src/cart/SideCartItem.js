import { useCartContext } from "../context/cart_context";
import SideCartButtons from "./SideCartButtons";
import { IoCloseOutline } from "react-icons/io5";

const SideCartItem = ({ id, name, amount, price, image }) => {
  const { toggleAmount, removeItem } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <>
      <div className="FJSH" key={id}>
        <div className="HJFDSKJ">
          <img src={image} alt={name} />
        </div>
        <div className="side-img">
          <p className="sbv">{name}</p>
          <p className="sbv1">${price}.00</p>
          <div className="sbv2">
            <SideCartButtons
              amount={amount}
              increase={increase}
              decrease={decrease}
            />
          </div>
        </div>
        <div className="howi">
          <button className="LKK_" onClick={() => removeItem(id)}>
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideCartItem;
