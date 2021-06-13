import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as UserActions from "../redux/user/userActionCreator";
// import * as emailjs from "emailjs-com";

const useAddressFormHook = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const dispatch = useDispatch();

  const validate = (values) => {
    let errors = {};
    if (!values.personalName) {
      errors.personalName = "Required";
    }
    if (!values.contactDetails) {
      errors.contactDetails = "Required";
    }
    if (!values.pincode) {
      errors.pincode = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      personalName: "",
      contactDetails: "",
      pincode: "",
      address: "",
      landmark: "",
    },
    onSubmit: (values) => {
      dispatch(UserActions.addDeliveryAddress(values));
      formik.resetForm();
      toggleFormOpen();
    },
    validate,
  });

  const toggleFormOpen = () => {
    formik.resetForm();
    setFormIsOpen(!formIsOpen);
  };

  return {
    formik,
    toggleFormOpen,
    formIsOpen,
  };
};

const useCreditCardFormHook = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const dispatch = useDispatch();

  const validate = (values) => {
    let errors = {};
    if (!values.userName) {
      errors.userName = "Required";
    }
    if (!values.creditCardNumber) {
      errors.creditCardNumber = "Required";
    }
    if ((values.creditCardNumber + "").length !== 12) {
      errors.creditCardNumber = "Credit card number should be 12 digit";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      creditCardNumber: "",
      creditCardCompany: "cc-paypal",
    },
    onSubmit: (values) => {
      dispatch(UserActions.addCreditCardDetails(formik.values));
      formik.resetForm();
      toggleFormOpen();
    },
    validate,
  });

  const toggleFormOpen = () => {
    formik.resetForm();
    setFormIsOpen(!formIsOpen);
  };

  return {
    formik,
    toggleFormOpen,
    formIsOpen,
  };
};

const useContactFormHook = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const dispatch = useDispatch();

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (values.message.length <= 5) {
      errors.message = "Message cannot be empty";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      contactNumber: "",
      username: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(UserActions.connectDeveloper(values));
      formik.resetForm();
      toggleFormOpen();
    },
    validate,
  });

  const toggleFormOpen = () => {
    formik.resetForm();
    setFormIsOpen(!formIsOpen);
  };

  return {
    formik,
    toggleFormOpen,
    formIsOpen,
  };
};

export { useAddressFormHook, useCreditCardFormHook, useContactFormHook };
