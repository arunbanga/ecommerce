import { updateObject } from "../../utility/updateObject";
import { ADD_ITEMS_TO_BUY, REMOVE_ITEMS_TO_BUY } from "./itemsToBuyType";

const initialState = {
  products: [],
  totalPrice: 0,
};

const itemsToBuyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS_TO_BUY:
      return updateObject(state, { products: action.payload });
    case REMOVE_ITEMS_TO_BUY:
      return updateObject(state, {
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      });
    default:
      return state;
  }
};

export default itemsToBuyReducer;
