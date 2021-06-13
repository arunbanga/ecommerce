import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import itemsToBuyReducer from "./itemsToBuy/itemsToBuyReducer";
import { orderReducer } from "./orders/orderReducer";
import { pageLoadingReducer } from "./page-loading/page-loading";
import productsReducer from "./product/productReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productsReducer,
  loader: pageLoadingReducer,
  itemsToBuy: itemsToBuyReducer,
  orders: orderReducer,
});

export default rootReducer;
