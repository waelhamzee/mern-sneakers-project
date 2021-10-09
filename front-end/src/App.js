import Navbar from "./Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import MenProducts from "./pages/MenProducts";
import ProductDetails from "./ProductDetails";
import ModalCart from "./cart/ModalCart";
import SideCart from "./cart/SideCart";
import Cart from "./cart/Cart";
import SignUp from "./userforms/SignUp";
import LogIn from "./userforms/LogIn";
import ForgetPassword from "./userforms/ForgetPassword";
import { useEffect } from "react";
import Axios from "axios";
import { useProductsContext } from "./context/products_context";
import Sidebar from "./Sidebar";
import FiltersBar from "./FiltersBar";
import WomenProducts from "./pages/WomenProducts";
import Sale from "./Sale";
import CustomerService from "./pages/CustomerService";
import AboutAS from "./pages/AboutAS";
import VerifyCode from "./userforms/VerifyCode";
import NewPassword from "./userforms/NewPassword";
import VerifyCodeSignup from "./userforms/VerifyCodeSignup";
import Error from "./Error";
import CartConfirm from "./CartConfirm";

function App() {
  const { setisUserLoggedIn, setUser } = useProductsContext();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:4000/login").then((response) => {
      console.log(response);
      if (response.data.loggedIn === true) {
        setisUserLoggedIn(true);
        setUser(
          response.data.user.email.substring(
            0,
            response.data.user.email.indexOf("@")
          )
        );
      } else {
        setisUserLoggedIn(false);
      }
    });
  }, [setisUserLoggedIn, setUser]);
  useEffect(() => {
    Axios.get("http://localhost:4000/userAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => console.log(response));
  }, []);

  return (
    <Router>
      <ModalCart />
      <SideCart />
      <SignUp />
      <LogIn />
      <Sidebar />
      <FiltersBar />
      <ForgetPassword />
      <CartConfirm/>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/menproducts">
          <Navbar />
          <MenProducts />
        </Route>
        <Route path="/menproducts/:id">
          <Navbar />
          <ProductDetails />
        </Route>
        <Route exact path="/womenproducts">
          <Navbar />
          <WomenProducts />
        </Route>
        <Route path="/womenproducts/:id">
          <Navbar />
          <ProductDetails />
        </Route>
        <Route exact path="/sale">
          <Navbar />
          <Sale />
        </Route>
        <Route exact path="/customerservice">
          <Navbar />
          <CustomerService />
        </Route>
        <Route exact path="/aboutas">
          <Navbar />
          <AboutAS />
        </Route>
        <Route path="/cart">
          <Navbar />
          <Cart />
        </Route>
        <Route exact path="/codecheck">
          <VerifyCode />
        </Route>
        <Route exact path="/codechecksignup">
          <VerifyCodeSignup />
        </Route>
        <Route exact path="/newpassword">
          <NewPassword />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
