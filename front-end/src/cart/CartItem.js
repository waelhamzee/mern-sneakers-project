import { useCartContext } from "../context/cart_context";
import "../css/Cart.css";
import CartButtons from "./CartButtons";
import { GrClose } from "react-icons/gr";
import { useProductsContext } from "../context/products_context";

const CartItem = ({ id, image, name, color, amount, price }) => {
  const { toggleAmount, removeItem } = useCartContext();
  const { size } = useProductsContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <>
      <div className="FSLL">
        <div className="__FFF">
          <img src={image} alt={name} />
        </div>
        <div className="FDSS_">
          <p>{name}</p>
          <div style={{ marginTop: "13px" }}>
            <p className="_FF_">${price}.00</p>
            <p className="_FF_">Size : {size}</p>
            <p className="_FF_">Color : {color}</p>
          </div>
        </div>
        <div className="__OII">
          <div className="__GG">
            <CartButtons
              amount={amount}
              increase={increase}
              decrease={decrease}
            />
          </div>
        </div>
        <div className="__FFTT">
          <div className="__GG">
            <p className="_YOY">${price * amount}.00</p>
          </div>
        </div>
        <div style={{ width: "50px" }} className="taks">
          <div style={{ float: "right" }}>
            <button className="exbtn" onClick={() => removeItem(id)}>
              <GrClose />
            </button>
          </div>
        </div>
      </div>
      <div className="sim">
        <button onClick={() => removeItem(id)}>Clear Item</button>
      </div>
      <hr className="line" />
    </>
  );
};

export default CartItem;
