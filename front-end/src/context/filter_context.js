import React, { useContext, useEffect, useReducer, useState } from "react";
import { useProductsContext } from "./products_context";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../utils/actions";

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "default",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [email, setEmail] = useState();
  const openModalUN = () => {
    setModal(true);
  };
  const closeModalUN = () => {
    setModal(false);
  };
  const openModal1 = () => {
    setModal1(true);
  };
  const closeModal1 = () => {
    setModal1(false);
  };
  const openModal2 = () => {
    setModal2(true);
  };
  const closeModal2 = () => {
    setModal2(false);
  };
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        clearFilters,
        updateSort,
        modal,
        openModalUN,
        closeModalUN,
        modal1,
        openModal1,
        closeModal1,
        modal2,
        openModal2,
        closeModal2,
        email,
        setEmail,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
