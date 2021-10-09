import "./css/MenProducts.css";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import Colors from "./Colors";
import { useFilterContext } from "./context/filter_context";
import { getUniqueValues } from "./utils/helpers";
import { useState } from "react";

const Filters = () => {
  const {
    filters: { min_price, price, max_price, color, category, shipping },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const categories = getUniqueValues(all_products, "category");
  const colors = getUniqueValues(all_products, "color");
  return (
    <div className="FF">
      <h4 className="pb">Filter by</h4>
      <hr />
      <div className="hola">
        <div className="agrid">
          <p className="cake">Price</p>
          <button className="bla" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <CgMathMinus /> : <CgMathPlus />}
          </button>
        </div>
        <div className="sub-menu-parent">
          <div className={showInfo ? "sub-menu mario" : "sub-menu"}>
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
      <div className="hola">
        <div className="agrid">
          <p className="cake">Color</p>
          <button className="bla" onClick={() => setShowInfo1(!showInfo1)}>
            {showInfo1 ? <CgMathMinus /> : <CgMathPlus />}
          </button>
        </div>
        <div className="sub-menu-parent">
          <div className={showInfo1 ? "sub-menu mario" : "sub-menu"}>
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
      <div className="hola">
        <div className="agrid">
          <p className="cake">Category</p>
          <button className="bla" onClick={() => setShowInfo2(!showInfo2)}>
            {showInfo2 ? <CgMathMinus /> : <CgMathPlus />}
          </button>
        </div>
        <div className="sub-menu-parent">
          <div
            className={showInfo2 ? "sub-menu mario maxedheight" : "sub-menu"}
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
      <div className="form-control shipping">
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
      <div className="INF">
        <button className="ray" onClick={() => clearFilters()}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};
export default Filters;
