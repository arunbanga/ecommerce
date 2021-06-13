import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoutForm = () =>( <div className="container my-3">
<div className="row justify-content-center">
  <div className="col-12 col-lg-6 d-flex flex-column bg-light p-2">
    <h3 className="text-center">Sign Up</h3>
    <div className="form-floating mb-3">
      <input
        type="email"
        className="form-control w-100"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input
        type="password"
        className="form-control w-100"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button className="p-2 px-5 my-2 rounded-2 bg-light w-50 align-self-center">
      Sign Up
    </button>
    <div className="d-flex justify-content-center align-items-center">
      <hr className="w-50" />
      <p className="mb-1 px-2">or</p>
      <hr className="w-50" />
    </div>
    <div className="d-flex flex-column">
      <button className="p-1 p-lg-2 px-lg-3 m-1 rounded-2 bg-primary w-75 align-self-center">
        <FontAwesomeIcon
          className=""
          icon={["fab", "google"]}
          color="white"
        />
        <span className="mx-2">Sign Up with Google</span>
      </button>
      <button className="p-1 p-lg-2 px-lg-3 m-1 rounded-2 bg-light w-75 align-self-center">
        <FontAwesomeIcon
          className=""
          icon={["fab", "facebook"]}
          color="blue"
        />
        <span className="mx-2">Sign Up with Facebook</span>
      </button>
    </div>
    <h6 className="my-3 text-center">
      Already have an account, <a href="">Login</a>
    </h6>
  </div>
</div>
</div>)

export default LogoutForm;