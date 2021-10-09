import React, { useContext, useEffect, useReducer, useState } from "react";
import { shoes, detailshoes } from "../data";
import reducer from "../reducers/products_reducer";
import {
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FILTERS_OPEN,
  FILTERS_CLOSE,
  SALE_PRODUCTS,
} from "../utils/actions";

const ProductsContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  isFilterOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  sale_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState(shoes.menshoes);
  const [detailProduct, setdetailProduct] = useState(detailshoes.menshoes);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState();
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isWomen, setisWomen] = useState(false);
  const [modalConfirm, setmodalConfirm] = useState(false);

  useEffect(() => {
    setproducts();
  }, []);

  useEffect(() => {
    dispatch({ type: SALE_PRODUCTS });
  }, []);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const openFilters = () => {
    dispatch({ type: FILTERS_OPEN });
  };
  const closeFilters = () => {
    dispatch({ type: FILTERS_CLOSE });
  };

  const setproducts = () => {
    let tempProducts = [];
    shoes.menshoes.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };
  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setdetailProduct(product);
    console.log(detailProduct);
  };
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  const openModal = (id) => {
    const product = getItem(id);
    setdetailProduct(product);
    setModal(true);
  };
  const closeModalY = () => {
    setModal(false);
  };
  const openModalConfirm = (id) => {
    const product = getItem(id);
    setdetailProduct(product);
    setmodalConfirm(true);
  };
  const closeModalConfirm = () => {
    setmodalConfirm(false);
  };
  const fetchSingleProduct = () => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: detailProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        detailProduct,
        setdetailProduct,
        handleDetail,
        openModal,
        closeModalY,
        modal,
        products,
        setProducts,
        fetchSingleProduct,
        amount,
        increase,
        decrease,
        size,
        setSize,
        isUserLoggedIn,
        setisUserLoggedIn,
        user,
        setUser,
        loading,
        setLoading,
        openSidebar,
        closeSidebar,
        openFilters,
        closeFilters,
        isWomen,
        setisWomen,
        openModalConfirm,
        closeModalConfirm,
        modalConfirm,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
