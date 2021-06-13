import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddressForm from "../../components/AddressForm/AddressForm";
import CreditCard from "../../components/CreditCard/CreditCard";
import UserDetail from "../../components/UserDetail/UserDetail";
import "./Checkout.scss";
import {
  useAddressFormHook,
  useCreditCardFormHook,
} from "../../service/CustomHook";
import { useDispatch, useSelector } from "react-redux";
import * as UserActions from "../../redux/user/userActionCreator";
import * as CartActions from "../../redux/cart/cartActionCreator";
import * as OrderActions from "../../redux/orders/orderActionCreator";
import CreditCardForm from "../../components/CreditCardForm/CreditCardForm";
import ProductCart from "../../components/Product/ProductCart/ProductCart";
import { removeItemsToBuy } from "../../redux/itemsToBuy/itemsToBuyActions";
import { errorHandler } from "../../redux/page-loading/pageLoadingActions";
import { addDays } from "../../utility/addDays";
import EmptyContainer from "../../components/EmptyContainer/EmptyContainer";

const Checkout = () => {
  const history = useHistory();
  const formAddress = useAddressFormHook();
  const formCreditCard = useCreditCardFormHook();
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => {
    return {
      deliveryAddress: state.user.deliveryAddress,
      creditCardDetails: state.user.creditCardDetails,
      itemsBought: state.itemsToBuy.products,
    };
  });

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCreditCard, setSelectedCreditCard] = useState(null);

  useEffect(() => {
    dispatch(UserActions.fetchDeliveryAddress());
    dispatch(UserActions.fetchCreditCardDetails());
  }, []);

  // TODO
  const onDeleteAddress = (e) => {
    if (e.target.id === "") {
      return;
    }
    dispatch(UserActions.deleteDeliveryAddress(e.target.id));
  };

  // TODO
  const onDeleteCreditCard = (e) => {
    if (e.target.id === "") {
      return;
    }
    dispatch(UserActions.deleteCreditCardDetails(e.target.id));
  };

  const proceedToPayEvent = () => {
    if (preChecksProceedToPay()) {
      dispatch(
        OrderActions.addOrderedItems({
          orderedDate: new Date().toLocaleDateString(),
          address: selectedAddress,
          paymentDetails: selectedCreditCard,
          totalPayment: totalPrice(),
          expectedDeliveryDate: addDays(new Date(), 1),
          items: reduxState.itemsBought,
        })
      );
      dispatch(CartActions.buyItemInCart(reduxState.itemsBought));
      history.push("/order-conformation");
    }
  };

  const totalPrice = () => {
    let sum = 0;
    reduxState.itemsBought.forEach((element) => {
      sum = sum + element.price * element.unit;
    });
    return sum;
  };

  const removeClicked = (e) => {
    let productIdToRemove = reduxState.itemsBought[e.currentTarget.id].id;
    dispatch(removeItemsToBuy(productIdToRemove));
  };

  const selectAddress = (e) => {
    if (e.target.id === "") {
      return;
    }
    const findAddress = reduxState.deliveryAddress.find(
      (address) => address.id === e.target.id
    );
    if ((findAddress !== null) | (findAddress !== undefined)) {
      setSelectedAddress(findAddress);
    }
  };

  const selectCreditCard = (e) => {
    if (e.target.id === "") {
      return;
    }
    const findCreditCardDetails = reduxState.creditCardDetails.find(
      (creditCard) => creditCard.id === e.target.id
    );
    if (
      (findCreditCardDetails !== null) |
      (findCreditCardDetails !== undefined)
    ) {
      setSelectedCreditCard(findCreditCardDetails);
    }
  };

  const preChecksProceedToPay = () => {
    if (selectedAddress == null) {
      dispatch(errorHandler("please select address for delivery"));
      return false;
    } else if (selectedCreditCard == null) {
      dispatch(errorHandler("please select credit card for payment"));
      return false;
    }
    return true;
  };

  const addressDetails = reduxState.deliveryAddress?.map((addressDetails) => (
    <UserDetail
      key={addressDetails.id}
      details={addressDetails}
      onDeleteAddress={onDeleteAddress}
      selectAddress={selectAddress}
      isSelectedAddress={selectedAddress?.id === addressDetails.id}
    />
  ));

  const creditCardDetails = reduxState.creditCardDetails?.map(
    (creditCardDetails) => (
      <CreditCard
        key={creditCardDetails.id}
        creditCardDetails={creditCardDetails}
        onDeleteCreditCard={onDeleteCreditCard}
        selectCreditCard={selectCreditCard}
        isSelectedCreditCard={selectedCreditCard?.id === creditCardDetails.id}
      />
    )
  );

  const itemsInCart = reduxState.itemsBought.map((product, index) => (
    <ProductCart
      key={product.productId}
      {...product}
      showBuyNowButton={false}
      showTotalPrice={true}
      index={index}
      removeClicked={removeClicked}
    />
  ));

  return (
    <>
      {formAddress.formIsOpen && (
        <AddressForm
          formik={formAddress.formik}
          toggleFormOpen={formAddress.toggleFormOpen}
          handleFormSubmit={formAddress.formik.handleSubmit}
        />
      )}
      {formCreditCard.formIsOpen && (
        <CreditCardForm
          formik={formCreditCard.formik}
          toggleFormOpen={formCreditCard.toggleFormOpen}
          handleFormSubmit={formCreditCard.formik.handleSubmit}
        />
      )}
      <div className="container shadow my-4 bg-white rounded">
        <div className="row p-2">
          <div className="col-6 col-md-9 col-lg-9 d-flex justify-content-start align-items-center">
            <p className="m-0">
              <b>Delivery Address</b>
            </p>
          </div>
          <div className="col-6 col-md-3 col-lg-3 d-flex justify-content-end align-items-center cursor-pointer">
            <FontAwesomeIcon
              className="rounded-circle mx-2"
              icon={faPlus}
              color="red"
              size="1x"
              onClick={formAddress.toggleFormOpen}
            />
            <p className="m-0 text-truncate">Add address</p>
          </div>
        </div>
        <div className="row my-3">
          {addressDetails?.length === 0 ? (
            <EmptyContainer message="Add address" />
          ) : (
            addressDetails
          )}
        </div>
      </div>
      <div className="container shadow mb-4 bg-white rounded">
        <div className="row">
          <div className="col-5 col-md-8 col-lg-9 d-flex justify-content-start align-items-center">
            <p className="m-0 ">
              <b>Payment options</b>
            </p>
          </div>
          <div className="col-7 col-md-4 col-lg-3 d-flex justify-content-end align-items-center cursor-pointer">
            <FontAwesomeIcon
              className="rounded-circle mx-2"
              icon={faPlus}
              color="red"
              size="1x"
              onClick={formCreditCard.toggleFormOpen}
            />
            <p className="m-0 text-truncate">Add payment options</p>
          </div>
        </div>
        <div className="row my-3">
          {creditCardDetails?.length === 0 ? (
            <EmptyContainer message="Add credit card details" />
          ) : (
            creditCardDetails
          )}
        </div>
      </div>
      <div className="container shadow my-4 bg-white rounded">
        <div className="row p-2">
          <div className="col-6 col-md-9 col-lg-9 d-flex justify-content-start align-items-center">
            <p className="m-0">
              <b>Items to buy</b>
            </p>
          </div>
        </div>
        <div className="row my-3">{itemsInCart}</div>
        <div className="d-flex flex-row-reverse p-1">
          <div className="col-6 col-md-9 col-lg-2 d-flex justify-content-center align-items-center">
            <p className="mx-1">
              <b>${totalPrice()}</b>
            </p>
          </div>
          <div className="col-6 col-md-9 col-lg-2 d-flex justify-content-end align-items-center">
            <p className="mx-1">
              <b>Total Price </b>
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-12 px-1 d-flex justify-content-end">
            <button
              className="btn theme-btn--dark rounded-5"
              data-toggle="modal"
              data-target="#add-to-cart"
              onClick={() => proceedToPayEvent()}
            >
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
