import {
  LOAD_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../utils/actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [];
    if (sort === "price-lowest") {
      tempProducts = filtered_products.sort((a, b) => {
        // if (a.price < b.price) {
        //   return -1
        // }
        // if (a.price > b.price) {
        //   return 1
        // }
        // return 0
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = filtered_products.sort((a, b) => {
        // if (b.price < a.price) {
        //   return -1
        // }
        // if (b.price > a.price) {
        //   return 1
        // }
        // return 0
        return b.price - a.price;
      });
    }
    if (sort === "name-a") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "default") {
      tempProducts = filtered_products.map((product) => {
        return product;
      });
    }
    if (sort === "name-z") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.color === color;
      });
    }
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // filter by shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
