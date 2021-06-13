const OrderConfirmationListItem = ({ totalPrice }) => (
  <>
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h3>Thanks for ordering</h3>
          <h6>Your order has been placed successfully</h6>
        </div>
        <div className="row">
          <div className="col-12 border-dotted">
            <p className="shadow-sm p-3 m-3 bg-light rounded">
              <b>Order Number</b>: 12345
            </p>
            <p className="shadow-sm p-3 m-3 bg-light rounded">
              <b>Date of order</b>: {new Date().toString()}
            </p>
            <p className="shadow-sm p-3 m-3 bg-light rounded">
              <b>Total amount paid</b>: ${totalPrice}
            </p>
            <p className="shadow-sm p-3 m-3 bg-light rounded">
              <b>Payment method</b>: cash on delivery
            </p>
            <p className="shadow-sm p-3 m-3 bg-light rounded">
              <b>Delivery location</b>: House no. 123, St. 123, Pincode
              12345,Mumbai
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default OrderConfirmationListItem;
