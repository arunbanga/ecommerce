import { updateObject } from "../../utility/updateObject";
import { ADD_ITEMS_ORDERED, GET_ORDERED_ITEMS } from "./orderType";

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS_ORDERED:
      return state;
    case GET_ORDERED_ITEMS:
      return updateObject(state, { orders: action.payload });
    default:
      return state;
  }
};
