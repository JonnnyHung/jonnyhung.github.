import { creatReducer } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const productReducer = creatReducer(initialStale, {
  GET_PRODUCT_LIST: (state, action) => {
    return {
      ...state,
    };
  },
  GET_PRODUCT_DETAIL: (state, action) => {
    return {
      ...state,
    };
  },
});
