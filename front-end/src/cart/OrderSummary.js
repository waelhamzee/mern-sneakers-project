import { useEffect, useState } from "react";
import { useCartContext } from "../context/cart_context";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";

const shippingPrice = 20;

const OrderSummary = () => {
  const { total_amount } = useCartContext();
  const { shipping, openModalUN } = useFilterContext();
  const [checkout, setCheckout] = useState(false);
  const { isUserLoggedIn } = useProductsContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCheckout(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [checkout]);

  return (
    <div className="orderSummary" id="myHeader">
      <div className="thechamp">
        <h3 className="daug">order summary</h3>
        <hr className="line" />
      </div>
      <div className="totals">
        <div className="__YUYU">
          <p>Subtotal</p>
          <p>${total_amount}.00</p>
        </div>
        <div className="__YUYU">
          <p>Shipping</p>
          {shipping ? <p>FREE</p> : <p>${shippingPrice}.00</p>}
        </div>
        <hr className="line2" />
        <div className="__YUYU">
          <p style={{ fontSize: "25px" }}>Total</p>
          {shipping ? (
            <p style={{ fontSize: "25px" }}>${total_amount}.00</p>
          ) : (
            <p style={{ fontSize: "25px" }}>
              ${total_amount + shippingPrice}.00
            </p>
          )}
        </div>
        <div className="butn">
          {isUserLoggedIn ? (
            <button onClick={() => setCheckout(!checkout)}>Checkout</button>
          ) : (
            <button onClick={() => openModalUN()}>Login</button>
          )}
        </div>
        <div>
          {checkout && (
            <p style={{ width: "fit-content", marginTop: "10px" }}>
              No real checkout will be done due to demo products.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
