import { useHistory } from "react-router-dom";
import React from "react";

/*
props are send as parameters as in the function these props cannot 
be copied to the Wrapped component as these were not passed to components.
*/

const withBuyNow = (funProps) => (WrappedComponent) => {
  const WithBuyNow = (props) => {
    const history = useHistory();
    const onClick = () => {
      history.push("/checkout");
    };
    return <WrappedComponent onClick={onClick} {...props} />;
  };

  WithBuyNow.displayName = `WithBuyNow(${WrappedComponent.name})`;
  return WithBuyNow;
};

export default withBuyNow;
