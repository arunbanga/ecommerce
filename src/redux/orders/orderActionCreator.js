import firebaseApp from "../../config/firebaseConfig";
import { getValueFromSnapshot } from "../../utility/getValueFromSnapshot";
import { errorHandler } from "../page-loading/pageLoadingActions";
import * as OrderActions from "./orderActions";

const db = firebaseApp.firestore();

export const addOrderedItems = (orderDetails) => {
  return (dispatch) => {
    db.collection("orders")
      .doc(localStorage.getItem("uid"))
      .collection("items")
      .add(orderDetails)
      .then((response) => {
        fetch(process.env.REACT_APP_SEND_EMAIL_APP_URL, {
          method: "POST",
          body: JSON.stringify({
            uid: localStorage.getItem("uid"),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      })
      .catch((error) => dispatch(errorHandler("something went wrong")));
  };
};

export const getOrderedItems = () => {
  return (dispatch) => {
    db.collection("orders")
      .doc(localStorage.getItem("uid"))
      .collection("items")
      .get()
      .then((querySnapshot) => {
        dispatch(
          OrderActions.getOrderedItems(getValueFromSnapshot(querySnapshot))
        );
      })
      .catch((error) => dispatch(errorHandler("something went wrong")));
  };
};
