import "./css/Product.css";
import { useProductsContext } from "./context/products_context";
import { Link } from "react-router-dom";

const Product = ({ id, title, price, image, image2, sale, oldPrice }) => {
  const {
    handleDetail,
    openModal,
    isWomen,openModalConfirm
  } = useProductsContext();
  return (
    <div className="jjj ssd" key={id}>
      <div>
        <Link
          to={isWomen ? `/womenproducts/${id}` : `/menproducts/${id}`}
          onClick={() => {
            handleDetail(id);
            window.scrollTo(0, 0);
          }}
        >
          <div className="ffd">
            <img
              src={image}
              alt={title}
              className="ffff"
              id="myimage"
              onMouseOver={(e) => (e.currentTarget.src = image2)}
              onMouseOut={(e) => (e.currentTarget.src = image)}
            />
            {sale ? <span className="SUI">Sale</span> : null}
          </div>
          <h2 className="ll">{title}</h2>
          {oldPrice ? (
            <div className="hi_">
              <p className="por" style={{ textDecoration: "line-through" }}>
                ${oldPrice}.00
              </p>
              <p className="por">${price}.00</p>
            </div>
          ) : (
            <p className="por">${price}.00</p>
          )}
        </Link>
      </div>
      <button
        className="fluf"
        onClick={() => {
          openModal(id);
        }}
      >
        Add to Cart
      </button>
      <button
        className="fluf mobile"
        onClick={() => {
          openModalConfirm(id)
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
