import { useFilterContext } from "./context/filter_context";
import { useProductsContext } from "./context/products_context";

const Sort = () => {
  const { sort, updateSort } = useFilterContext();
  const { openFilters } = useProductsContext();
  return (
    <>
      <div className="sort">
        <p>Sort by : </p>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="default">Default</option>
          <option value="price-highest">Price (high to low)</option>
          <option value="price-lowest">Price (low to high)</option>
        </select>
      </div>
      <div className="sort10">
        <button className="TTW" onClick={() => openFilters()}>
          Filter
        </button>
        <button className="TTW1">
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={updateSort}
            className="remast"
          >
            <option value="default">Sort</option>
            <option value="price-highest">Price (high to low)</option>
            <option value="price-lowest">Price (low to high)</option>
          </select>
        </button>
      </div>
    </>
  );
};

export default Sort;
