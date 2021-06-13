import firebaseApp from "../../config/firebaseConfig";
import * as CartActions from "./cartActions";
import { getValueFromSnapshot } from "../../utility/getValueFromSnapshot";

const db = firebaseApp.firestore();

export const fetchItemsFromCart = () => {
  return (dispatch) => {
    db.collection("cart")
      .doc(localStorage.getItem("uid"))
      .collection("items-bought")
      .get()
      .then((querySnapshot) => {
        dispatch(CartActions.getAll(getValueFromSnapshot(querySnapshot)));
      })
      .catch((error) => dispatch(CartActions.apiError(error)));
  };
};

export const addItemToCart = (data) => {
  return (dispatch) => {
    dispatch(CartActions.startTimer());
    db.collection("cart")
      .doc(localStorage.getItem("uid"))
      .collection("items-bought")
      .add(data)
      .then((response) => {
        dispatch(CartActions.add({ ...data, id: response.id }));
      })
      .catch((error) => dispatch(CartActions.apiError(error)));
  };
};

export const removeItemFromCart = (id) => {
  return (dispatch) => {
    db.collection("cart")
      .doc(localStorage.getItem("uid"))
      .collection("items-bought")
      .doc(id)
      .delete()
      .then(() => dispatch(CartActions.remove(id)))
      .catch((error) => dispatch(CartActions.apiError(error)));
  };
};

export const totalPriceInCart = (value) => {
  return (dispatch) => {
    dispatch(CartActions.totalPrice(value));
  };
};

export const updateItemInCart = (cartItem) => {
  return (dispatch) => {
    db.collection("cart")
      .doc(localStorage.getItem("uid"))
      .collection("items-bought")
      .doc(cartItem.id)
      .update({ unit: cartItem.unit })
      .then((response) => {
        dispatch(CartActions.updateCart(cartItem));
      })
      .catch((error) => {
        dispatch(CartActions.apiError(error));
      });
  };
};

export const buyItemInCart = (products) => {
  return (dispatch) => {
    products.forEach((product) => {
      db.collection("cart")
        .doc(localStorage.getItem("uid"))
        .collection("items-bought")
        .doc(product.id)
        .delete()
        .then((response) => {
          dispatch(CartActions.remove(product.id));
        })
        .catch((error) => {
          dispatch(CartActions.apiError(error));
        });
    });
  };
};
