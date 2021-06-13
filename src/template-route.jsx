import { Redirect, Switch } from "react-router-dom";
import Products from "./containers/Products/Products";
import Cart from "./containers/Cart/Cart";
import Checkout from "./containers/Checkout/Checkout";
import OrderConfirmation from "./containers/OrderConfirmed/OrderConfirmation";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import Home from "./containers/Home/Home";
import PrivateRoute from "./components/Routing/PrivateRoute";
import PublicRoute from "./components/Routing/PublicRoute";
import { memo } from "react";
import Orders from "./containers/Orders/Order";

const TemplateRoute = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/products" component={Products} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <PrivateRoute
          exact
          path="/order-conformation"
          component={OrderConfirmation}
        />
        <PrivateRoute exact path="/orders" component={Orders} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default memo(TemplateRoute);
