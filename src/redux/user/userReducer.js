import setObjectValue from "../../utility/setObjectValue";
import { updateObject } from "../../utility/updateObject";
import {
  ADD_CREDIT_CARD_DETAILS,
  ADD_DELIVERY_ADDRESS,
  ADD_USER_PROFILE,
  DELETE_CREDIT_CARD_DETAILS,
  DELETE_DELIVERY_ADDRESS,
  FETCH_CREDIT_CARD_DETAILS,
  FETCH_DELIVERY_ADDRESS,
  REMOVE_USER_PROFILE,
} from "./userType";

const initialState = {
  displayName: localStorage.getItem("displayName"),
  email: localStorage.getItem("email"),
  photoURL: localStorage.getItem("photoURL"),
  uid: localStorage.getItem("uid"),
  deliveryAddress: [],
  creditCardDetails: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_PROFILE:
      return updateObject(state, action.payload);
    case REMOVE_USER_PROFILE:
      return setObjectValue(state, null);
    case FETCH_DELIVERY_ADDRESS:
      return updateObject(state, { deliveryAddress: action.payload });
    case ADD_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: [...state.deliveryAddress, action.payload],
      };
    case DELETE_DELIVERY_ADDRESS:
      return updateObject(state, {
        deliveryAddress: state.deliveryAddress.filter(
          (address) => address.id !== action.payload
        ),
      });
    case FETCH_CREDIT_CARD_DETAILS:
      return updateObject(state, { creditCardDetails: action.payload });
    case ADD_CREDIT_CARD_DETAILS:
      return {
        ...state,
        creditCardDetails: [...state.creditCardDetails, action.payload],
      };
    case DELETE_CREDIT_CARD_DETAILS:
      return updateObject(state, {
        creditCardDetails: state.creditCardDetails.filter(
          (creditCard) => creditCard.id !== action.payload
        ),
      });
    default:
      return state;
  }
};

export default userReducer;
