import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.scss";

const SideNavbar = () => {
  const [navigationProperty, setNavigationProperty] = useState("");
  const onMenuClicked = () => {
    navigationProperty === ""
      ? setNavigationProperty("nav_active")
      : setNavigationProperty("");
  };

  return (
    <>
      <div className={`navigation position-fixed h-100 ${navigationProperty}`}>
        <ul className="list-unstyled d-flex flex-column justify-content-center">
          <li className="list-group-item-action py-2" onClick={onMenuClicked}>
            <NavLink
              exact
              className="nav-link"
              aria-current="page"
              to="/"
              onClick={onMenuClicked}
            >
              <span className="text-start">Home</span>
            </NavLink>
          </li>
          <li className="list-group-item-action py-2">
            <NavLink
              exact
              className="nav-link"
              aria-current="page"
              to="/products"
              onClick={onMenuClicked}
            >
              <span className="text-start">Products</span>
            </NavLink>
          </li>
          <li className="list-group-item-action py-2">
            <NavLink
              exact
              className="nav-link"
              aria-current="page"
              to="/cart"
              onClick={onMenuClicked}
            >
              <span className="text-start">Cart</span>
            </NavLink>
          </li>
          <li className="list-group-item-action py-2">
            <NavLink
              exact
              className="nav-link"
              aria-current="page"
              to="/login"
              onClick={onMenuClicked}
            >
              <span className="text-start">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className="d-xl-none toggle position-fixed d-flex justify-content-center align-items-center"
        onClick={onMenuClicked}
      >
        <FontAwesomeIcon
          className="home_icon"
          icon={navigationProperty === "" ? faBars : faTimesCircle}
          size="2x"
        />
      </div>
    </>
  );
};

export default SideNavbar;
