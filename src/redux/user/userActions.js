import {
  ADD_CREDIT_CARD_DETAILS,
  ADD_DELIVERY_ADDRESS,
  ADD_USER_PROFILE,
  CONNECT_DEVELOPER,
  DELETE_CREDIT_CARD_DETAILS,
  DELETE_DELIVERY_ADDRESS,
  FETCH_CREDIT_CARD_DETAILS,
  FETCH_DELIVERY_ADDRESS,
  REMOVE_USER_PROFILE,
} from "./userType";

const add = (data) => {
  return {
    type: ADD_USER_PROFILE,
    payload: data,
  };
};

const remove = () => {
  return {
    type: REMOVE_USER_PROFILE,
    payload: null,
  };
};

export const addUserProfile = (data) => {
  return (dispatch) => {
    dispatch(add(data));
  };
};

export const removeUserProfile = (data) => {
  return (dispatch) => {
    dispatch(remove());
  };
};

export const fetchDeliveryAddress = (data) => {
  return {
    type: FETCH_DELIVERY_ADDRESS,
    payload: data,
  };
};

export const addDeliveryAddress = (data) => {
  return {
    type: ADD_DELIVERY_ADDRESS,
    payload: data,
  };
};

export const deleteDeliveryAddress = (id) => {
  return {
    type: DELETE_DELIVERY_ADDRESS,
    payload: id,
  };
};

export const fetchCreditCardDetails = (data) => {
  return {
    type: FETCH_CREDIT_CARD_DETAILS,
    payload: data,
  };
};

export const addCreditCardDetails = (data) => {
  return {
    type: ADD_CREDIT_CARD_DETAILS,
    payload: data,
  };
};

export const deleteCreditCardDetails = (id) => {
  return {
    type: DELETE_CREDIT_CARD_DETAILS,
    payload: id,
  };
};

export const connectDeveloper = (data) => {
  return {
    type: CONNECT_DEVELOPER,
    payload: data,
  };
};
