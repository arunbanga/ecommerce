import * as itemsToBuyActions from "./itemsToBuyActions";

export const addItemsToBuy = (products) => {
  return (dispatch = () => {
    dispatch(itemsToBuyActions.addItemsToBuy(products));
  });
};

export const removeItemsToBuy = (productId) => {
  return (dispatch) => dispatch(itemsToBuyActions.removeItemsToBuy(productId));
};
