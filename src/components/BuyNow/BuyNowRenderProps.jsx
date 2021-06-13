import { useHistory } from "react-router-dom";

const BuyNowRenderProps = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/checkout");
  };
  return <>{props.render(onClick)} </>;
};

export default BuyNowRenderProps;
