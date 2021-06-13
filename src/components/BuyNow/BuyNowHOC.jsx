import withBuyNow from "../../HOC/BuyNow/withBuyNow";

const BuyNowHOC = (props) => {
  return (
    <button
      className="btn theme-btn--dark rounded-5"
      data-toggle="modal"
      data-target="#add-to-cart"
      {...props}
    >
      {props.text || "Button"}
    </button>
  );
};
export default withBuyNow()(BuyNowHOC);
