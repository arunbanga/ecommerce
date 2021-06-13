import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LogoutForm from "../../components/Form/LogoutForm/LogoutForm";
import * as UserActionCreator from "../../redux/user/userActionCreator";
import "./Logout.scss";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActionCreator.onLogout());
  });

  return (
    <>
      <LogoutForm />
    </>
  );
};

export default Logout;
