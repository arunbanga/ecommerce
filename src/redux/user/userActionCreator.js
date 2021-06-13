import firebase from "firebase/app";
import firebaseApp from "../../config/firebaseConfig";
import fetch from "../../utility/API";
import { getValueFromSnapshot } from "../../utility/getValueFromSnapshot";
import * as CartActions from "../cart/cartActionCreator";
import { PageLoadingActionType } from "../page-loading/page-loading";
import { errorHandler } from "../page-loading/pageLoadingActions";
import * as UserAction from "./userActions";
import * as UserActionType from "./userType";

const db = firebaseApp.firestore();

export const onLogin = (history) => {
  return (dispatch) => {
    dispatch({ type: PageLoadingActionType.Start });
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        localStorage.setItem("displayName", user.displayName);
        localStorage.setItem("email", user.email);
        localStorage.setItem("photoURL", user.photoURL);
        localStorage.setItem("uid", user.uid);
        dispatch({
          type: UserActionType.ADD_USER_PROFILE,
          payload: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          },
        });
        dispatch({ type: PageLoadingActionType.Done });
        if (
          history.location.state?.callBackPath !== undefined &&
          history.location.state?.callBackPath !== null
        ) {
          history.push(history.location.state?.callBackPath);
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        dispatch({ type: PageLoadingActionType.Done });
      });
  };
};

export const onLogout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        dispatch({
          type: UserActionType.REMOVE_USER_PROFILE,
          payload: null,
        });
      })
      .catch((error) => {});
  };
};

export const fetchDeliveryAddress = () => {
  return (dispatch) => {
    fetch(
      () =>
        db
          .collection("address")
          .doc(localStorage.getItem("uid"))
          .collection("address")
          .get()
          .then((querySnapshot) => {
            const fetchedAddress = getValueFromSnapshot(querySnapshot);
            dispatch(UserAction.fetchDeliveryAddress(fetchedAddress));
          }),
      dispatch
    );
  };
};

export const addDeliveryAddress = (values) => {
  return (dispatch) => {
    db.collection("address")
      .doc(localStorage.getItem("uid"))
      .collection("address")
      .add(values)
      .then(() => {
        dispatch(fetchDeliveryAddress());
        dispatch({
          type: PageLoadingActionType.SuccessMessage,
          payload: "Address added successfully",
        });
      });
  };
};

export const deleteDeliveryAddress = (id) => {
  return (dispatch) => {
    db.collection("address")
      .doc(localStorage.getItem("uid"))
      .collection("address")
      .doc(id)
      .delete()
      .then(() => {
        dispatch(fetchDeliveryAddress());
        // dispatch(UserAction.deleteDeliveryAddress(id));

        dispatch({
          type: PageLoadingActionType.SuccessMessage,
          payload: "Address deleted successfully",
        });
      });
  };
};

export const fetchCreditCardDetails = () => {
  return (dispatch) => {
    fetch(
      () =>
        db
          .collection("creditCardDetails")
          .doc(localStorage.getItem("uid"))
          .collection("creditCardDetails")
          .get()
          .then((querySnapshot) => {
            const fetchCreditCardDetails = getValueFromSnapshot(querySnapshot);
            dispatch(UserAction.fetchCreditCardDetails(fetchCreditCardDetails));
          }),
      dispatch
    );
  };
};

export const addCreditCardDetails = (values) => {
  return (dispatch) => {
    db.collection("creditCardDetails")
      .doc(localStorage.getItem("uid"))
      .collection("creditCardDetails")
      .add(values)
      .then((querySnapshot) => {
        dispatch(fetchCreditCardDetails());
        dispatch({
          type: PageLoadingActionType.SuccessMessage,
          payload: "Credit card details added successfully",
        });
      });
  };
};

export const deleteCreditCardDetails = (id) => {
  return (dispatch) => {
    db.collection("creditCardDetails")
      .doc(localStorage.getItem("uid"))
      .collection("creditCardDetails")
      .doc(id)
      .delete()
      .then(() => {
        dispatch(fetchCreditCardDetails());
        // dispatch(UserAction.deleteDeliveryAddress(id));

        dispatch({
          type: PageLoadingActionType.SuccessMessage,
          payload: "Credit card deleted successfully",
        });
      });
  };
};

export const connectDeveloper = (data) => {
  return (dispatch) => {
    db.collection("contactDeveloper")
      .add(data)
      .then((response) => console.log("send"))
      .catch((error) => dispatch(errorHandler("something went wrong")));
  };
};
