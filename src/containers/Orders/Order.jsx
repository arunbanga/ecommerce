import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductCart from "../../components/Product/ProductCart/ProductCart";
import UserDetail from "../../components/UserDetail/UserDetail";
import { getOrderedItems } from "../../redux/orders/orderActionCreator";

const Orders = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => {
    return {
      orders: state.orders.orders,
    };
  });

  useEffect(() => {
    dispatch(getOrderedItems());
  }, []);

  return (
    <div className="container my-4">
      {reduxState.orders.map((orderDetails, index) => {
        return (
          <>
            <div
              className="my-3 shadow-sm p-3 rounded d-flex justify-content-between"
              style={{ backgroundColor: "#d7dbdd" }}
              data-bs-toggle="collapse"
              href={`#collapseExample${index}`}
              role="button"
              aria-expanded="false"
              aria-controls={`collapseExample${index}`}
            >
              <p className="m-0 p-0">Ordered on {orderDetails.orderedDate}</p>
              <p className="m-0 p-0" style={{ color: "#808b96" }}>
                click to view order details
              </p>
              <p className="m-0 p-0">₹{orderDetails.totalPayment}</p>
            </div>
            <div className="collapse" id={`collapseExample${index}`}>
              <div className="card card-body">
                <UserDetail
                  key={orderDetails.id}
                  details={orderDetails.address}
                  readOnly={true}
                />

                {orderDetails.items?.map((product, index) => (
                  <ProductCart
                    key={product.productId}
                    {...product}
                    showBuyNowButton={false}
                    showTotalPrice={true}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Orders;
