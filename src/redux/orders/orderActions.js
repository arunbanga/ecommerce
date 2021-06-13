import { ADD_ITEMS_ORDERED, GET_ORDERED_ITEMS } from "./orderType";

export const addOrders = (data) => {
  return { type: ADD_ITEMS_ORDERED, payload: data };
};

export const getOrderedItems = (data) => {
  return { type: GET_ORDERED_ITEMS, payload: data };
};
