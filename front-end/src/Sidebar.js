import { AiOutlineCloseCircle } from "react-icons/ai";
import { useProductsContext } from "./context/products_context";
import "./index.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useFilterContext } from "./context/filter_context";
import Axios from "axios";
import { useCartContext } from "./context/cart_context";

const Sidebar = () => {
  const { total_items, openCartModal } = useCartContext();
  const [showInfo, setShowInfo] = useState(false);
  const { isSidebarOpen, closeSidebar, isUserLoggedIn, user } =
    useProductsContext();
  const { openModalUN } = useFilterContext();
  const submitLogout = (e) => {
    e?.preventDefault();
    Axios.post(`http://localhost:4000/logout`);
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div style={{ height: "80px" }} className=""></div>
      <div className="W0">
        <div className="W1">
          <div className="W2">
            <div style={{ display: "flex" }}>
              <button className="Yer">
                {" "}
                <FaRegUserCircle />
              </button>
              {isUserLoggedIn ? (
                <div>
                  <p className="user">Hi, {user}</p>
                  <button className="Yar2" onClick={() => submitLogout()}>
                    Logout
                  </button>
                </div>
              ) : (
                <button onClick={() => openModalUN()} className="Yar2">
                  Login
                </button>
              )}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  marginLeft: "10px",
                }}
              >
                <button
                  style={{
                    color: "orange",
                    fontSize: "30px",
                    background: "white",
                    border: "transparent",
                    cursor:'pointer'
                  }}
                  onClick={() => openCartModal()}
                >
                  <AiOutlineShoppingCart />
                  {/* <p>0</p> */}
                </button>
                <div className="amount-container-sidebar">
                  <p>{total_items}</p>
                </div>
              </div>
            </div>
            <button className="par rak" onClick={() => closeSidebar()}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        </div>
        <hr />
        <div className="W1">
          <div className="W2">
            <a href="/" style={{ color: "red" }} className="Yar3">
              Home
            </a>
          </div>
        </div>
        <hr />
        <div className="W1">
          <div className="W2">
            <div className="Yar4">
              <div className="Yar5">
                <div className="YARI">
                  <p className="Yar6">Shop</p>
                </div>
                <div className="sub-menu-parent">
                  <div
                    className={
                      showInfo ? "sub-menu mario maxedheight" : "sub-menu"
                    }
                  >
                    <div className="same">
                      <a href="/menproducts" style={{ color: "black" }}>
                        Men
                      </a>
                    </div>
                    <div className="same">
                      <a href="/womenproducts" style={{ color: "black" }}>
                        Women
                      </a>
                    </div>
                    <div className="same">
                      <a href="/sale" style={{ color: "black" }}>
                        Sale
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="bla" onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
          </div>
        </div>
        <hr />
        <div className="W1">
          <div className="W2">
            <a href="/aboutas" style={{ color: "black" }} className="Yar3">
              About AS
            </a>
          </div>
        </div>
        <hr />
        <div className="W1">
          <div className="W2">
            <a href="/customerservice" style={{ color: "black" }} className="Yar3">
              Customer Service
            </a>
          </div>
        </div>
        <hr />
      </div>
    </aside>
  );
};

export default Sidebar;
