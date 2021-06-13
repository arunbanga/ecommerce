const CartHeader = () => (
  <div className="d-none d-lg-flex row my-1 py-2 secondary-color">
    <div className="col-3 col-md-3 col-lg-3 d-flex justify-content-center align-self-center">
      <h6 className="font-color m-0">Product Image</h6>
    </div>
    <div className="col-3 col-md-2 col-lg-2  d-flex justify-content-center align-self-center">
      <h6 className="font-color m-0">Product Name</h6>
    </div>
    <div className="col-3 col-md-2 col-lg-2  d-flex justify-content-center align-self-center">
      <h6 className="font-color m-0">Qty</h6>
    </div>
    <div className="col-3 col-md-2 col-lg-2  d-flex justify-content-center align-self-center">
      <h6 className="font-color m-0">Price</h6>
    </div>
    <div className="col-3 col-md-1 col-lg-1  d-flex justify-content-center align-self-center">
      <h6 className="font-color m-0">Action</h6>
    </div>
    <div className="col-3 col-md-2 col-lg-2  d-flex justify-content-center align-self-center">
      <h6 className="font-color m-0">Checkout</h6>
    </div>
  </div>
);

export default CartHeader;
