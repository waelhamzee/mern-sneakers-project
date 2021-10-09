import "../css/MenProducts.css";
import Credits from "../Credits";
import Filters from "../Filters";
import ProductList from "../ProductList";
import Sort from "../Sort";

const MenProducts = () => {
  return (
    <div className="animated">
      <div className="JPI">
        <h3 style={{ right: "28%" }}>MEN'S SNEAKERS</h3>
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

export default MenProducts;
