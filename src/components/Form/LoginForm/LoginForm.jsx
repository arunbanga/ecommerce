import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = ({ onLoginClick }) => (
  <div className="container my-3">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-6 d-flex flex-column  p-2">
        <button
          className="p-1 p-lg-2 px-lg-3 m-1 rounded-2 w-75 align-self-center"
          onClick={onLoginClick}
        >
          <FontAwesomeIcon
            className=""
            icon={["fab", "google"]}
            color="black"
          />
          <span className="mx-2">Login with Google</span>
        </button>
      </div>
    </div>
  </div>
);

export default LoginForm;
