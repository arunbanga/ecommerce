const CartFooter = (props) => (
  <div className="row py-2 primary-color justify-content-center mt-3x">
    <div className="col-6 col-lg-2 d-flex justify-content-center align-items-center">
      <h6 className="m-0">Total Price: ${props.totalPrice()}</h6>
    </div>
    <div className="col-6 col-lg-2">
      <button
        className="btn theme-btn--dark rounded-5"
        data-toggle="modal"
        data-target="#add-to-cart"
        onClick={() => props.proceedToPayEvent()}
      >
        Proceed to pay
      </button>
    </div>
  </div>
);

export default CartFooter;
