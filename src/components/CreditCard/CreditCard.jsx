import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreditCard.scss";

const CreditCard = ({
  creditCardDetails,
  onDeleteCreditCard,
  selectCreditCard = null,
  isSelectedCreditCard = false,
}) => (
  <div className="col-12 col-md-6 col-lg-3 mb-2 ">
    <div
      className={`shadow-none p-2 mb-3 rounded d-flex justify-content-start ${
        isSelectedCreditCard ? "selectColor" : "bg-light"
      }`}
    >
      <div className="w-100">
        <FontAwesomeIcon icon={["fab", creditCardDetails.creditCardCompany]} />
        <p className="my-1">Card Number</p>
        <p className="my-1">
          **** **** ****
          {(creditCardDetails.creditCardNumber + "").substring(8)}
        </p>
        <p className="my-1">{creditCardDetails.userName}</p>
      </div>
      <div className="d-flex align-content-between justify-content-end flex-wrap">
        {isSelectedCreditCard ? null : (
          <button
            className="userDetail-close-button"
            onClick={onDeleteCreditCard}
            id={creditCardDetails.id}
          >
            <FontAwesomeIcon
              className="rounded-circle mx-2"
              icon={faTimesCircle}
              color="red"
              size="1x"
            />
          </button>
        )}
        <button
          className="userDetail-close-button"
          onClick={selectCreditCard}
          id={creditCardDetails.id}
        >
          <FontAwesomeIcon
            className="rounded-circle mx-2"
            icon={faCheckCircle}
            color={`${isSelectedCreditCard ? "blue" : "grey"}`}
            size="1x"
          />
        </button>
      </div>
    </div>
  </div>
);

export default CreditCard;
