import { useState, useEffect } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import AmountButtons from "./AmountButtons";
import { useProductsContext } from "./context/products_context";
import Credits from "./Credits";
import "./css/ProductDetails.css";
import "./css/ModalCart.css";
import { useHistory } from "react-router";
import Loading from "./Loading";
import Error from "./Error";
import { useCartContext } from "./context/cart_context";
import Alert from "./Alert";
import { AiFillLock } from "react-icons/ai";

const ProductDetails = () => {
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    detailProduct: product,
    fetchSingleProduct,
    increase,
    decrease,
    amount,
    size,
    setSize,
  } = useProductsContext();
  const { openCartModal, addToCart } = useCartContext();
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "" });
  useEffect(() => {
    fetchSingleProduct();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const showAlert = (show = false, msg = "") => {
    setAlert({ show, msg });
  };

  const {
    id,
    title,
    price,
    image,
    desc,
    color,
    category,
    shipping,
    sale,
    oldPrice,
  } = product;
  const handleSubmit = (id) => {
    if (!size) {
      showAlert(true, "please select size");
    } else {
      openCartModal();
      addToCart(id, amount, product);
    }
  };
  // const images =[image,image2]
  return (
    <>
      <div className="prod" key={id}>
        <div className="prod1">
          <nav className="prod2">
            <div className="inner">
              <a href="/" className="trex">
                Home
              </a>{" "}
              /
              <a href="/menproducts" className="trex">
                {" "}
                Men{" "}
              </a>{" "}
              /
              <a href="/menproducts" className="trex">
                {" "}
                Women{" "}
              </a>{" "}
              /
              <p style={{ marginLeft: "5px", color: "rgb(167, 162, 162)" }}>
                {" "}
                I'm a Product{" "}
              </p>
            </div>
          </nav>
          <div className="prod3">
            <section className="prod4">
              <div className="fsaa">
                {/* <ProductImages images={images}/> */}
                <img src={image} alt="w" />
              </div>
              <div className="whorea">
                <p>{desc}</p>
              </div>
            </section>
            <section className="prod5">
              <h1>{title}</h1>
              <p className="lozi">Product Number {id}</p>
              {sale ? (
                <div style={{ display: "flex" }}>
                  <span
                    className="lozi2"
                    style={{ textDecoration: "line-through" }}
                  >
                    ${oldPrice}.00
                  </span>
                  <span className="lozi2" style={{ marginLeft: "15px" }}>
                    ${price}.00
                  </span>
                </div>
              ) : (
                <p className="lozi2">${price}.00</p>
              )}
              <label className="spanme">Size</label>
              <br />
              <div style={{ display: "flex" }}>
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
                {alert.show && <Alert {...alert} removeAlert={showAlert} />}
              </div>
              <label className="spanme" style={{ textTransform: "capitalize" }}>
                Category : {category}
              </label>
              <div className="_35LeV" style={{ marginTop: "10px" }}>
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
              <div className="_35LeV">
                <label
                  className="spanme"
                  style={{ textTransform: "capitalize" }}
                >
                  Quantity:{" "}
                </label>
                <AmountButtons
                  increase={increase}
                  decrease={decrease}
                  amount={amount}
                />
              </div>
              <button
                className="flufy"
                onClick={() => {
                  handleSubmit(id);
                }}
              >
                Add to Cart
              </button>
              <div style={{position:'relative'}}>
                <button className="flufy2">Buy Now</button>
                <AiFillLock className='lock'/>
              </div>
              <p className="overy">{desc}</p>
              {shipping ? (
                <p className="waelhamze">this product is free for shipping</p>
              ) : (
                <p className="waelhamze">
                  this product is not free for shipping
                </p>
              )}
              <div className="holaa">
                <div className="agridd">
                  <p className="cakes">PRODUCT INFO</p>
                  <button
                    className="blaa"
                    onClick={() => setShowInfo(!showInfo)}
                  >
                    {showInfo ? <CgMathMinus /> : <CgMathPlus />}
                  </button>
                </div>
                <div className="junn">
                  <div className="sub-menu-parent">
                    <div
                      className={
                        showInfo ? "sub-menu mario maxedheight" : "sub-menu"
                      }
                    >
                      <p>
                        I'm a product detail. I'm a great place to add more
                        information about your product such as sizing, material,
                        care and cleaning instructions. This is also a great
                        space to write what makes this product special and how
                        your customers can benefit from this item. Buyers like
                        what they’re getting before they purchase, so give them
                        as much information as possible so they can buy with
                        confidence and certainty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{ marginTop: "30px", marginBottom: "-15px" }} />
              <div className="holaa">
                <div className="agridd">
                  <p className="cakes">RETURN AND REFUND POLICY</p>
                  <button
                    className="blaa"
                    onClick={() => setShowInfo1(!showInfo1)}
                  >
                    {showInfo1 ? <CgMathMinus /> : <CgMathPlus />}
                  </button>
                </div>
                <div className="junn">
                  <div className="sub-menu-parent">
                    <div
                      className={
                        showInfo1 ? "sub-menu mario maxedheight" : "sub-menu"
                      }
                    >
                      <p>
                        I’m a Return and Refund policy. I’m a great place to let
                        your customers know what to do in case they are
                        dissatisfied with their purchase. Having a
                        straightforward refund or exchange policy is a great way
                        to build trust and reassure your customers that they can
                        buy with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

export default ProductDetails;
