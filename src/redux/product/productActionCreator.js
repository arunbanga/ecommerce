import firebaseApp from "../../config/firebaseConfig";
import fetch from "../../utility/API";
import { getValueFromSnapshot } from "../../utility/getValueFromSnapshot";
import * as ProductActions from "./productActions";

const db = firebaseApp.firestore();

export const fetchProductsByFamily = (productFamily) => {
  return (dispatch) => {
    fetch(() => {
      if ((productFamily === null) | (productFamily === undefined)) {
        productFamily = "shoes";
      }
      db.collection(productFamily?.toLowerCase())
        // .orderBy("price")
        .limit(5)
        .get()
        .then(function (querySnapshot) {
          const fetchedProduct = getValueFromSnapshot(querySnapshot);
          dispatch(ProductActions.getProductsByFamily(fetchedProduct));
        });
    }, dispatch);
  };
};

export const fetchProductFamilies = () => {
  return (dispatch) => {
    db.collection("family")
      .get()
      .then(function (querySnapshot) {
        const fetchedFamily = [];
        querySnapshot.forEach(function (doc) {
          fetchedFamily.push(doc.data());
        });
        dispatch(ProductActions.getProductFamilies(fetchedFamily));
      });
  };
};
