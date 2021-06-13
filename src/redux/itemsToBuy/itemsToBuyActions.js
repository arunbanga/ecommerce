import { ADD_ITEMS_TO_BUY, REMOVE_ITEMS_TO_BUY } from "./itemsToBuyType";

export const addItemsToBuy = (data) => {
  return { type: ADD_ITEMS_TO_BUY, payload: data };
};

export const removeItemsToBuy = (data) => {
  return { type: REMOVE_ITEMS_TO_BUY, payload: data };
};
