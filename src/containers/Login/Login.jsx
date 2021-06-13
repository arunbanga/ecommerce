import LoginForm from "../../components/Form/LoginForm/LoginForm";
import "./Login.scss";
import { useDispatch } from "react-redux";
import * as UserActionCreator from "../../redux/user/userActionCreator";
import { useHistory, withRouter } from "react-router";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useContactFormHook } from "../../service/CustomHook";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const contactForm = useContactFormHook();

  useEffect(() => {
    dispatch(UserActionCreator.onLogout());
  });

  const onLoginClick = () => {
    dispatch(UserActionCreator.onLogin(history));
  };
  return (
    <>
      <LoginForm onLoginClick={onLoginClick} />
      <ContactForm
        formik={contactForm.formik}
        toggleFormOpen={contactForm.toggleFormOpen}
        handleFormSubmit={contactForm.formik.handleSubmit}
      />
    </>
  );
};

export default withRouter(Login);
