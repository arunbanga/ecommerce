import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  );
};

export default PublicRoute;
