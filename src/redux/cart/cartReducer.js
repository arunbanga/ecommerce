import { updateObject } from "../../utility/updateObject";
import {
  ADD_ITEM_TO_CART,
  API_ERROR,
  FETCH_ITEMS_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  START_TIMER,
  STOP_TIMER,
  TOTAL_PRICE,
  UPDATE_CART,
} from "./cartType";

const initialState = {
  itemsInCart: [],
  totalPrice: 0,
  timer: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_ERROR:
      return updateObject(state, { error: action.payload });
    case FETCH_ITEMS_FROM_CART:
      return updateObject(state, { itemsInCart: action.payload });
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload],
        timer: false,
      };
    case REMOVE_ITEM_FROM_CART:
      return updateObject(state, {
        itemsInCart: state.itemsInCart.filter(
          (product) => product.id !== action.payload
        ),
      });
    case TOTAL_PRICE:
      return updateObject(state, { totalPrice: action.payload });
    case UPDATE_CART:
      const index = state.itemsInCart.indexOf((c) => c.id);
      let cartProducts = [...state.itemsInCart];
      let product = cartProducts[index];
      product = action.payload;
      cartProducts[index] = product;
      return updateObject(state, {
        itemsInCart: cartProducts,
      });
    case START_TIMER:
      return updateObject(state, { timer: true });
    case STOP_TIMER:
      return updateObject(state, { timer: false });
    default:
      return state;
  }
};

export default cartReducer;
