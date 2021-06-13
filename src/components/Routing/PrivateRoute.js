import { connect } from "react-redux";
import { Route, useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeHistory = useHistory();
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user.uid ? (
          <Component {...routeProps} />
        ) : (
          routeHistory.push({
            pathname: "/login",
            state: { callBackPath: rest.path },
          })
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
