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
import { shoes } from "../data";

const products_reducer = (state, action) => {
  if (action.type === SALE_PRODUCTS) {
    const menproduct = shoes.menshoes.filter((item) => item.sale === true);
    const womenProduct = shoes.womenshoes.filter((item) => item.sale === true);
    const products = menproduct.concat(womenProduct);
    return { ...state, sale_products: [...products] };
  }
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === FILTERS_OPEN) {
    return { ...state, isFilterOpen: true };
  }
  if (action.type === FILTERS_CLOSE) {
    return { ...state, isFilterOpen: false };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
};

export default products_reducer;
