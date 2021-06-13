import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchItemsFromCart } from "../../redux/cart/cartActionCreator";
import "./Navbar.scss";

const Navbar = ({ userId, itemsInCart, getItems }) => {
  useEffect(() => {
    if (userId) {
      getItems();
    }
  }, []);

  return (
    <>
      <div className="container-fluid nav_bg shadow-sm p-3 bg-white sticky-top mt-4">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark-gray">
              <div className="container-fluid">
                <NavLink
                  exact
                  className="navbar-brand animate__animated animate__bounce"
                  to="/"
                >
                  Brand
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active animate__animated animate__shakeX"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active animate__animated animate__bounce"
                        className="nav-link"
                        to="/products"
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active animate__animated animate__bounce"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/cart"
                      >
                        <div className="position-relative">
                          <FontAwesomeIcon
                            className="a p-1"
                            icon={faCartPlus}
                            size="2x"
                          />
                          {userId && itemsInCart.length !== 0 ? (
                            <span className="custom-badge cbdg1 border border-2 border-white rounded-circle">
                              {itemsInCart.length}
                            </span>
                          ) : null}
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {userId ? (
                          <>
                            <li>
                              <NavLink
                                activeClassName="menu_active "
                                exact
                                className="nav-link active"
                                aria-current="page"
                                to="/orders"
                              >
                                Orders
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                activeClassName="menu_active"
                                exact
                                className="nav-link active"
                                aria-current="page"
                                to="/login"
                              >
                                Logout
                              </NavLink>
                            </li>
                          </>
                        ) : (
                          <li>
                            <NavLink
                              activeClassName="menu_active "
                              exact
                              className="nav-link active"
                              aria-current="page"
                              to="/login"
                            >
                              Login
                            </NavLink>
                          </li>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.cart.itemsInCart,
    userId: state.user.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(fetchItemsFromCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
