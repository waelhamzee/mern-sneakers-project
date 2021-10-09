import { GrClose } from "react-icons/gr";
import { useProductsContext } from "./context/products_context";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import { useFilterContext } from "./context/filter_context";
import { useState } from "react";
import { getUniqueValues } from "./utils/helpers";
import Colors from "./Colors";

const FiltersBar = () => {
  const {
    filters: { min_price, price, max_price, color, category, shipping },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();
  const { isFilterOpen, closeFilters } = useProductsContext();
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const categories = getUniqueValues(all_products, "category");
  const colors = getUniqueValues(all_products, "color");
  return (
    <aside className={`${isFilterOpen ? "sidebar1 show-sidebar1" : "sidebar"}`}>
      <div className="rom">
        <div className="rom1">
          <div className="rom2">
            <hr />
            <div className="rom3">
              <p>Filter by</p>
              <button onClick={() => closeFilters()}>
                <GrClose />
              </button>
            </div>
            <hr />
          </div>
          <div className="ye">
            <div className="rom4">
              <p>
                Price (${min_price}.00 - ${max_price}.00)
              </p>
              <button onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <CgMathMinus /> : <CgMathPlus />}
              </button>
            </div>
            <div className="sub-menu-parent">
              <div
                className={showInfo ? "sub-menu mario marginTop" : "sub-menu"}
              >
                <div>
                  <span className="qq">${price}.00</span>
                </div>
                <form className="fss">
                  <input
                    type="range"
                    name="price"
                    onChange={updateFilters}
                    min={min_price}
                    max={max_price}
                    value={price}
                  />
                </form>
              </div>
            </div>
          </div>
          <hr />
          <div className="ye">
            <div className="rom4">
              <p>Color </p>
              <button onClick={() => setShowInfo2(!showInfo2)}>
                {showInfo2 ? <CgMathMinus /> : <CgMathPlus />}
              </button>
            </div>
            <div className="sub-menu-parent">
              <div
                className={showInfo2 ? "sub-menu mario marginTop" : "sub-menu"}
              >
                <ul className="Xgz5B">
                  <Colors
                    colors={colors}
                    color={color}
                    updateFilters={updateFilters}
                  />
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="ye">
            <div className="rom4">
              <p>Category </p>
              <button onClick={() => setShowInfo1(!showInfo1)}>
                {showInfo1 ? <CgMathMinus /> : <CgMathPlus />}
              </button>
            </div>
            <div className="sub-menu-parent">
              <div
                className={
                  showInfo1
                    ? "sub-menu mario maxedheight marginTop"
                    : "sub-menu"
                }
              >
                {categories.map((c, index) => {
                  return (
                    <button
                      key={index}
                      onClick={updateFilters}
                      type="button"
                      name="category"
                      className={`${
                        category === c.toLowerCase()
                          ? "cat-btn active eno"
                          : "cat-btn"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <hr />
          <div className="ye">
            <div className="rom4">
              <label htmlFor="shipping">free shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                checked={shipping}
                onChange={updateFilters}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div className="rom5">
            <button onClick={() => clearFilters()}>Clear Filters</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FiltersBar;
