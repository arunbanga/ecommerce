import { updateObject } from "../../utility/updateObject";
import * as ProductType from "./productType";

const initialState = {
  productFamilies: [],
  products: [],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductType.FETCH_PRODUCTS_BY_PRODUCT_FAMILY:
      return updateObject(state, { products: action.payload });
    case ProductType.FETCH_PRODUCT_FAMILIES:
      return updateObject(state, { productFamilies: action.payload });
    default:
      return state;
  }
};

export default productsReducer;
