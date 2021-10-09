import { useCartContext } from "../context/cart_context";
import "../css/ModalCart.css";
import SideCartItem from "./SideCartItem";
import SideCartTotal from "./SideCartTotal";
import { MdKeyboardArrowRight } from "react-icons/md";

const SideCart = () => {
  const { modal, closeCartModal, cart } = useCartContext();
  console.log(cart);
  if (cart.length < 1) {
    return (
      <div className={`${modal ? "modal3" : "modal"}`}>
        <div className="kldfs">
          <div className="modal-content1"></div>
          <div className="modal-content2 animate">
            <div style={{ height: "120px" }}>
              <div className="lessssgsa">
                <button className="yoyoy" onClick={closeCartModal}>
                  <MdKeyboardArrowRight />
                </button>
                <div className="trip">
                  <h1>Cart</h1>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <h3>Cart is empty.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`${modal ? "modal3" : "modal"}`}>
      <div className="kldfs">
        <div className="modal-content1"></div>
        <div className="modal-content2 animate">
          <div style={{ height: "120px" }}>
            <div className="lessssgsa">
              <button className="yoyoy" onClick={closeCartModal}>
                <MdKeyboardArrowRight />
              </button>
              <div className="trip">
                <h1>Cart</h1>
              </div>
            </div>
          </div>
          <div className="KLGd">
            <div className="FDSFD">
              {cart.map((cartItem) => {
                return <SideCartItem key={cartItem.id} {...cartItem} />;
              })}
            </div>
          </div>
          <SideCartTotal />
        </div>
      </div>
    </div>
  );
};

export default SideCart;
