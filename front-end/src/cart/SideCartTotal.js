import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";

const SideCartTotal = () => {
  const { total_amount, closeCartModal } = useCartContext();
  const { closeModalY,closeSidebar } = useProductsContext();
  return (
    <div className="fagsg">
      <div style={{ padding: "40px" }}>
        <h1 className="lgfo">Subtotal</h1>
        <p className="pr-yo">${total_amount}.00</p>
      </div>
      <div className="dfdfsdsf"></div>
      <div className="cont3">
        <Link
          to="/cart"
          style={{ width: "100%" }}
          onClick={() => {
            closeCartModal();
            closeModalY();
            window.scroll(0, 0);
          }}
        >
          <button className="btn3" onClick={closeSidebar}>View Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default SideCartTotal;
