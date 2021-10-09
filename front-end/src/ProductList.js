import { useFilterContext } from "./context/filter_context";
import Product from "./Product";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();
  if (products.length < 1) {
    return <p className="ford">No products matched your search.</p>;
  } else {
    return (
      <div className="second-grid">
        {products?.map((product) => {
          const { id } = product;
          return <Product key={id} {...product} />;
        })}
      </div>
    );
  }
};

export default ProductList;
