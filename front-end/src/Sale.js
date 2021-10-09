import "./css/MenProducts.css";
import Credits from "./Credits";
import Filters from "./Filters";
import ProductList from "./ProductList";
import Sort from "./Sort";
import { useProductsContext } from "./context/products_context";
import { useEffect } from "react";

const Sale = () => {
  const { setProducts, sale_products: products } = useProductsContext();
  useEffect(() => {
    setProducts(products);
  });
  return (
    <div className="animated">
      <div className="JPI">
        <h3 className="fly" style={{ right: "39%" }}>
          FINAL SALE
        </h3>
        <img
          src={
            "https://i.pinimg.com/236x/af/a9/33/afa933c9251745703e9bedaf27347197.jpg?nii=t"
          }
          alt="black"
          className="jfi"
        />
      </div>
      <div className="RR__">
        <div className="first-grid">
          <Filters />
          <div className="containing">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
      <div className="credits-image expl">
        <div className="les">
          <Credits />
        </div>
      </div>
    </div>
  );
};
export default Sale;
