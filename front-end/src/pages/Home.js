import "../css/Home.css";
import Credits from "../Credits";
import { shoe1, shoe2, shoe } from "../utils/helpers";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { shoes } from "../data";

const Home = () => {
  const { products, handleDetail, setdetailProduct } = useProductsContext();
  const getWomenItem = (id) => {
    const product = shoes.womenshoes.find((item) => item.id === id);
    return product;
  };
  const handleWomenDetail = (id) => {
    const product = getWomenItem(id);
    setdetailProduct(product);
  };
  return (
    <div className="animated">
      <div style={{ height: "80px" }}></div>
      <div className="hero-image">
        <div className="pewd">
          <img src={shoe} alt="Woman Shoe" className="pewds" />
        </div>
        <div className="hero-text">
          <p>as</p>
          <h3 style={{ color: "white" }}>awesome sneakers</h3>
          <a href="./menproducts">
            <button className="btn--commerce-secondary">shop now</button>
          </a>
        </div>
      </div>
      <div className="shoe-grid">
        <div className="idk">
          <a href="/menproducts">
            <h3 className="text">men collection</h3>
            <img src={shoe1} alt="whatever" className="menshoe" />
          </a>
        </div>
        <div className="idk">
          <a href="/womenproducts">
            <h3 className="text">women collection</h3>
            <img src={shoe2} alt="whatever" className="womenshoe" />
          </a>
        </div>
      </div>
      <div className="grid-container">
        {products.slice(1, 4).map((product) => {
          const { id, image } = product;
          return (
            <div className="grid-item" key={id}>
              <Link
                to={`/menproducts/${id}`}
                onClick={() => {
                  handleDetail(id);
                  window.scrollTo(0, 0);
                }}
                style={{ display: "flex" }}
              >
                <img src={image} alt="N" className="lesme" />
              </Link>
            </div>
          );
        })}
        {shoes.womenshoes.slice(1, 4).map((product) => {
          const { id, image } = product;
          return (
            <div className="grid-item" key={id}>
              <Link
                to={`/womenproducts/${id}`}
                onClick={() => {
                  handleWomenDetail(id);
                  window.scrollTo(0, 0);
                }}
                style={{ display: "flex" }}
              >
                <img src={image} alt="N" className="lesme" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="credits">
        <div className="credits-image">
          <div>
            <p className="who">as</p>
          </div>
          <Credits />
        </div>
      </div>
    </div>
  );
};

export default Home;
