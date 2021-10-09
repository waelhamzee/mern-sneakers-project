import { useFilterContext } from "./context/filter_context";
import { useProductsContext } from "./context/products_context";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Axios from "axios";
import { useCartContext } from "./context/cart_context";

const Navbar = () => {
  const { openModalUN } = useFilterContext();
  const {total_items,openCartModal} = useCartContext()
  const { isUserLoggedIn, user, loading, openSidebar } = useProductsContext();
  const submitLogout = (e) => {
    e?.preventDefault();
    Axios.post(`http://localhost:4000/logout`);
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav className="nav-initial">
      <div className="nav-center">
        <div className="nav-header">
          <p className="logo-sl">as</p>
          <p className="logo-dl" style={{ color: "white" }}>
            awesome sneakers
          </p>
          <button className="nav-toggle" onClick={() => openSidebar()}>
            <FaBars />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <div className="dropdown">
                <p className="shop">Shop</p>
                <div className="dropdown-content">
                  <a href="/menproducts">Men</a>
                  <a href="/womenproducts">Women</a>
                  <a href="/sale">Sale</a>
                </div>
              </div>
            </li>
            <li>
              <a href="/aboutas">About AS</a>
            </li>
            <li>
              <a href="/customerservice">Customer Service</a>
            </li>
            {isUserLoggedIn ? (
              <>
                {loading ? (
                  <p style={{ color: "white" }} className="loading"></p>
                ) : (
                  <>
                    <li>
                      <button onClick={() => submitLogout()}>Log out</button>
                    </li>
                    <li>
                      <p className="shop">Hi, {user}</p>
                    </li>
                  </>
                )}
              </>
            ) : (
              <li>
                <button onClick={() => openModalUN()}>Log in</button>
              </li>
            )}
            <li style={{position:'relative'}}>
              <button style={{color:'orange',fontSize:'40px'}} onClick={() => openCartModal()}>
                <AiOutlineShoppingCart />
                {/* <p>0</p> */}
              </button>
              <div className='amount-container'>
                <p>{total_items}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
