import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  FETCH_ITEMS_FROM_CART,
  API_ERROR,
  TOTAL_PRICE,
  UPDATE_CART,
  START_TIMER,
  STOP_TIMER,
} from "./cartType";

export const getAll = (data) => {
  return {
    type: FETCH_ITEMS_FROM_CART,
    payload: data,
  };
};

export const add = (data) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: data,
  };
};

export const remove = (index) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: index,
  };
};

export const apiError = (data) => {
  return {
    type: API_ERROR,
    payload: data,
  };
};

export const totalPrice = (data) => {
  return {
    type: TOTAL_PRICE,
    payload: data,
  };
};

export const updateCart = (data) => {
  return {
    type: UPDATE_CART,
    payload: data,
  };
};

export const startTimer = () => {
  return {
    type: START_TIMER,
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
  };
};
