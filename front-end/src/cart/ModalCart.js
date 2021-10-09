import { useProductsContext } from "../context/products_context";
import "../css/ModalCart.css";
import AmountButtons from "../AmountButtons";
import { useState } from "react";
import $ from "jquery";
import { useCartContext } from "../context/cart_context";
import Alert from "../Alert";
import Loading from "../Loading";

const ModalCart = () => {
  const {
    modal,
    closeModalY,
    increase,
    decrease,
    amount,
    detailProduct: product,
    single_product_loading: loading,
    size,
    setSize,
  } = useProductsContext();
  const { openCartModal, addToCart } = useCartContext();
  const [alert, setAlert] = useState({ show: false, msg: "" });
  if (loading) {
    return <Loading />;
  }
  const showAlert = (show = false, msg = "") => {
    setAlert({ show, msg });
  };
  $(document).ready(function () {
    $("#GHDS").click(function () {
      $("#waell").css("display", "none");
      $("#hamzee").css("display", "block");
      $("#GHDS").css("background-color", "black");
      $("#GKJlfa").css("background-color", "");
    });
    $("#GKJlfa").click(function () {
      $("#GHDS").css("background-color", "");
      $("#hamzee").css("display", "none");
      $("#waell").css("display", "block");
      $("#GKJlfa").css("background-color", "black");
    });
  });
  const { id, title, price, image, color, image2 } = product;
  const handleSubmit = (id) => {
    console.log(id)
    if (!size) {
      showAlert(true, "please select size");
    } else {
      addToCart(id, amount, product);
      openCartModal();
    }
  };
  return (
    <div className={`${modal ? "modal2" : "modal"}`} key={id}>
      <div className="modal-content animate5">
        <div className="yor">
          <span className="close" title="Close Modal" onClick={closeModalY}>
            &times;
          </span>
          <div className="prod11">
            <section className="prod10">
              <div className="fsaaa">
                <img src={image} alt="w" id="waell" />
                <img
                  src={image2}
                  alt="w"
                  style={{ display: "none" }}
                  id="hamzee"
                />
                {/* <div className='gallery'>
                              <button id='GKJlfa'></button>
                              <button id='GHDS'></button>
                           </div> */}
              </div>
            </section>
            <section className="prod50">
              <h1>{title}</h1>
              <p className="lozi2">${price}.00</p>
              <div style={{display:'flex'}}>
              <label className="spanme">Size</label>
              {alert.show && <Alert {...alert} removeAlert={showAlert} />}
              </div>
              <select
                className="jkll"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option defaultValue disabled hidden>
                  Select
                </option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
              </select>
            
              <div>
                <label
                  className="spanme"
                  style={{ textTransform: "capitalize" }}
                >
                  Color:{" "}
                </label>
                <label style={{ marginLeft: "15px" }}>
                  <button
                    className="color-btn them"
                    style={{ backgroundColor: `${color}`, opacity: "1" }}
                  ></button>
                </label>
              </div>
              <label className="spanme" style={{ textTransform: "capitalize" }}>
                Quantity:{" "}
              </label>
              <div className="alld">
                <AmountButtons
                  increase={increase}
                  decrease={decrease}
                  amount={amount}
                />
              </div>
              <button className="flufy trpp" onClick={() => handleSubmit(id)}>
                Add to Cart
              </button>
              <a
                href={`/menproducts/${id}`}
                style={{ textDecoration: "underline" }}
              >
                View More Details
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
