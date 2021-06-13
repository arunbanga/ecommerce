import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button/Button";
import BuyNowHOC from "../../BuyNow/BuyNowHOC";

const ProductCart = ({
  id,
  productName,
  productImage,
  price,
  index,
  removeClicked,
  onBuyNowClick,
  unit = 1,
  showBuyNowButton = true,
  showTotalPrice = false,
  onUnitChange = null,
  showDelete = false,
}) => (
  <div className="product-cart-animation-rotate row justify">
    <div className="col-12 col-lg-3 d-flex justify-content-center align-self-center">
      <img className="" src={productImage} alt="" />
    </div>
    <div className="col-6 col-lg-2 d-flex justify-content-center align-self-center">
      <p>{productName}</p>
    </div>
    <div className="col-6 col-lg-2 d-flex justify-content-center align-self-center">
      {onUnitChange === null ? (
        <p>{unit}</p>
      ) : (
        <input
          type="number"
          min="1"
          max="10"
          defaultValue={unit}
          id={index}
          onChange={onUnitChange}
        />
      )}
    </div>
    <div className="col-12 col-lg-2 d-flex justify-content-center align-self-center">
      <p>${price}</p>
    </div>
    {showDelete ? (
      <div className="col-6 col-lg-1 d-flex justify-content-center align-self-center">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faTrash}
          id={index}
          name={index}
          onClick={removeClicked}
        />
      </div>
    ) : null}
    <div
      className={`${
        showBuyNowButton
          ? " col-6 col-lg-2 d-flex justify-content-center align-self-center"
          : "d-none"
      }`}
    >
      <Button id={index} onClick={onBuyNowClick} />
    </div>
    {showTotalPrice ? (
      <div className="col-12 col-lg-2 d-flex justify-content-center align-self-center">
        <p>${unit * price}</p>
      </div>
    ) : null}
  </div>
);

export default ProductCart;
