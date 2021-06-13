import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withBuyNow from "../../../HOC/BuyNow/withBuyNow";
import Button from "../../Button/Button";

const ProductMin = ({ productName, productImage, price, discount, key }) => {
  // This is not the way to implement HOC it is just for understanding the behaviour of HOC
  const withBuyNowCallToHOC = withBuyNow({
    params: null,
  })(Button)();

  return (
    <div className="col-12 col-md-4 col-lg-3 my-3">
      <div className="card">
        {/* <div className="product-image"> */}
        <img src={productImage} className="card-img-top" alt="..." />
        {/* </div> */}
        <div className="card-body">
          <div className="row justify-content-evenly">
            <div className="col-6 col-md-6 col-lg-6">
              <h5 className="card-title">{productName}</h5>
            </div>
            <div className="col-6 col-md-6 col-lg-6 ">
              <div className="star-rating d-flex justify-content-end my-2">
                {[1, 2, 3, 4, 5].map((arr) => {
                  return <FontAwesomeIcon icon={faStar} />;
                })}
              </div>
            </div>
            <div className="col-12 my-1 d-flex justify-content-between">
              <FontAwesomeIcon icon={faCartPlus} size="2x" />
              {withBuyNowCallToHOC}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMin;
