import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import {
  faCheckCircle,
  faPlus,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserDetail.scss";

const UserDetail = ({
  details,
  onDeleteAddress,
  selectAddress = null,
  isSelectedAddress = false,
  readOnly = false,
}) => (
  <div className="col-12 col-md-6 col-lg-3 mb-2 ">
    <div
      className={`shadow-none p-2 mb-3 rounded d-flex justify-content-start ${
        isSelectedAddress ? "selectColor" : "bg-light"
      }`}
    >
      <div className="w-100">
        <h6>
          <b>{details.personalName}</b>
        </h6>
        <p className="my-1">Contact Details: {details.contactDetails}</p>
        {details.landmark && (
          <p className="my-1">Landmark: {details.landmark}</p>
        )}
        <p className="address-height overflow-hidden">
          Address: {details.address}
        </p>
      </div>
      {readOnly ? null : (
        <>
          <div className="d-flex align-content-between justify-content-end flex-wrap">
            {isSelectedAddress ? null : (
              <button
                className="userDetail-close-button"
                onClick={onDeleteAddress}
                id={details.id}
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
              onClick={selectAddress}
              id={details.id}
            >
              <FontAwesomeIcon
                className="rounded-circle mx-2"
                icon={faCheckCircle}
                color={`${isSelectedAddress ? "blue" : "grey"}`}
                size="1x"
              />
            </button>
          </div>
        </>
      )}
    </div>
  </div>
);

export default UserDetail;
