import * as ProductType from "./productType";

export const getProductsByFamily = (data) => {
  return {
    type: ProductType.FETCH_PRODUCTS_BY_PRODUCT_FAMILY,
    payload: data,
  };
};

export const getProductFamilies = (data) => {
  return {
    type: ProductType.FETCH_PRODUCT_FAMILIES,
    payload: data,
  };
};
