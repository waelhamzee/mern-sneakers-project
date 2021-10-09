import CartItem from "./CartItem";
import { useCartContext } from "../context/cart_context";
import Credits from "../Credits";
import "../css/Cart.css";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  if (cart.length < 1) {
    return (
      <>
        <div style={{ height: "80px" }}></div>
        <div className="cart">
          <div className="cart-margin">
            <div className="trapped">
              <h1>Your cart is empty</h1>
              <a href="/">
                <button>BACK HOME</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div style={{ height: "80px" }}></div>
      <div className="cart">
        <div className="cart-margin">
          <div style={{ display: "flex" }}>
            <div className="cart-container">
              <div className="mycart">
                <div className="thechamp">
                  <h3 className="daug">my cart</h3>
                  <hr className="line" />
                </div>
                {cart.map((cartItem) => {
                  return <CartItem key={cartItem.id} {...cartItem} />;
                })}
                <div className="waelbtn">
                  <button onClick={() => clearCart()}>Clear Cart</button>
                </div>
              </div>
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <div className="credits-image expl">
        <div className="les">
          <Credits />
        </div>
      </div>
    </>
  );
};

export default Cart;
