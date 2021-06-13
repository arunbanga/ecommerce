import {
  faCartPlus,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button/Button";
import BuyNowRenderProps from "../../BuyNow/BuyNowRenderProps";
import "./ProductMax.scss";

const ProductMax = ({
  productName,
  productImage,
  price,
  discount,
  type,
  index,
  addToCartOnClick,
  onBuyNowClick,
}) => (
  // <div className="product-max-animation-rotate product-max-animation-simple row card-body mx-1 my-2 p-1 border border-start-0 animate__animated animate__backInRight">
  <div className="row card-body mx-1 my-2 p-1 border border-start-0 animate__animated animate__backInRight">
    <div className="col-12 col-md-3 d-flex justify-content-end align-items-start align-items-md-start shadow-sm">
      {discount ? (
        <span className="badge bg-danger position-absolute">
          {discount} off
        </span>
      ) : null}
      <div className="col-12 products-max-img-div d-flex justify-content-center">
        <img className="products-max-img" src={productImage} alt="" />
      </div>
      <ul className="product-links list-unstyled position-absolute d-flex flex-column align-self-end">
        <li className="">
          <FontAwesomeIcon
            className="a p-1"
            color="#F33535"
            icon={faHeart}
            size="2x"
          />
        </li>
        <li>
          <FontAwesomeIcon className="a p-1" icon={faSearch} size="2x" />
        </li>
        <li>
          <FontAwesomeIcon
            className="a p-1"
            icon={faCartPlus}
            size="2x"
            id={index}
            onClick={addToCartOnClick}
          />
        </li>
      </ul>
    </div>
    <div className="col-12 col-md-9">
      <h6 className="col-md-12 mt-md-3">{productName}</h6>
      <h6 className="col-md-12 mt-md-4 overflow-hidden text-truncate">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda
        voluptas repudiandae, fuga aut omnis dolorum ut deserunt laudantium
        aperiam illum natus voluptate odit molestiae praesentium quasi officia
        expedita mollitia?
      </h6>
      <div className="row mt-3 mt-md-5 mt-xl-5 mt-xxl-5">
        <div className="col-6 col-md-3 d-flex align-items-center">
          <h6 className="">${price}</h6>
        </div>

        <div className="col-6 col-md-9 d-flex justify-content-end">
          {/* <BuyNow text="Buy Now" /> */}
          <BuyNowRenderProps
            render={() => <Button id={index} onClick={onBuyNowClick} />}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ProductMax;
