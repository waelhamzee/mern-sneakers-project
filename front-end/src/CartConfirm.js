import { useCartContext } from "./context/cart_context";
import { useProductsContext } from "./context/products_context";

const CartConfirm = () => {
  const { modalConfirm,closeModalConfirm } = useProductsContext();
  const {
    amount,
    detailProduct: product,
  } = useProductsContext();
  const { openCartModal, addToCart } = useCartContext();
  const {id} = product
  const submitCart = () => {
    addToCart(id, amount, product);
    closeModalConfirm()
    openCartModal();
  };
  return (
    <div className={`${modalConfirm ? "modal2" : "modal"}`}>
      <div className="modal-content5 animate">
        <div>
          <div className='confirm-container'>
            <p>Are you sure you want to add this item?</p>
            <ul className="cd-buttons">
              <li>
                <button onClick={() => submitCart()} style={{background:'rgb(255, 79, 79)'}}>Yes</button>
              </li>
              <li>
                <button onClick={() =>closeModalConfirm()} style={{background:'#324d67'}}>No</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartConfirm;
