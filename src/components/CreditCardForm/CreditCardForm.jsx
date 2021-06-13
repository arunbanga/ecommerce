const CreditCardForm = ({ formik, handleFormSubmit, toggleFormOpen }) => (
  <>
    <div className="address-form-background container-fluid row justify-content-center position-fixed vh-100 animate__animated animate__slideInRight">
      <div className="col-5">
        <form onSubmit={handleFormSubmit}>
          <div className="form-floating mb-3 mt-2">
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              placeholder="User name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            <label for="floatingInput" className="d-flex">
              <div className="">Name</div>
              {formik.touched.userName && formik.errors.userName ? (
                <Required />
              ) : null}
            </label>
          </div>
          <div className="form-floating mb-3 mt-2">
            <input
              type="number"
              className="form-control"
              id="creditCardNumber"
              name="creditCardNumber"
              placeholder="creditCardNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.personalName}
            />
            <label for="floatingInput" className="d-flex">
              <div className="">Credit Card Number</div>
              {formik.touched.creditCardNumber &&
              formik.errors.creditCardNumber ? (
                <Required errorMessage={formik.errors.creditCardNumber} />
              ) : null}
            </label>
          </div>
          <button type="submit" className="rounded-3">
            Submit
          </button>
          <button
            type="button"
            className="mx-3 rounded-3"
            onClick={toggleFormOpen}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  </>
);
const Required = ({ errorMessage = "Required" }) => (
  <div className="required text-danger rounded-3 mx-2">{errorMessage}</div>
);

export default CreditCardForm;
