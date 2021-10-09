import "./css/MenProducts.css";
import { FaCheck } from "react-icons/fa";

const Colors = ({ colors, color, updateFilters }) => {
  return (
    <div className="sfjdlL">
      {colors.map((c, index) => {
        if (c === "all") {
          return (
            <button
              key={index}
              name="color"
              onClick={updateFilters}
              data-color="all"
              className={`${color === "all" ? "all-btn active" : "all-btn"}`}
            >
              all
            </button>
          );
        } else if (c === "white") {
          return (
            <button
              key={index}
              name="color"
              style={{ backgroundColor: "Cornsilk" }}
              className={`${color === c ? "color-btn active" : "color-btn"}`}
              data-color={c}
              onClick={updateFilters}
            >
              {color === "white" ? <FaCheck className="trip" /> : null}
            </button>
          );
        }
        return (
          <button
            key={index}
            name="color"
            style={{ background: c }}
            className={`${color === c ? "color-btn active" : "color-btn"}`}
            data-color={c}
            onClick={updateFilters}
          >
            {color === c ? <FaCheck className="trip" /> : null}
          </button>
        );
      })}
    </div>
  );
};

export default Colors;
