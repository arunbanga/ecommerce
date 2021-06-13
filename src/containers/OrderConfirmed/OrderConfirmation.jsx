import { useSelector } from "react-redux";
import OrderConfirmationListItem from "../../components/ListItem/OrderConfirmationListItem/OrderConfirmationListItem";
import "./OrderConfirmation.scss";

const OrderConfirmation = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return <OrderConfirmationListItem totalPrice={totalPrice} />;
};

export default OrderConfirmation;
