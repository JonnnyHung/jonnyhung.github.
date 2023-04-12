import { creatReducer } from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
};

const categoryReducer = creatReducer(initialStale, {
  GET_CATEGORY_LIST: (state, action) => {
    return {
      ...state,
    };
  },
  GET_CATEGORY_DETAIL: (state, action) => {
    return {
      ...state,
    };
  },
});
