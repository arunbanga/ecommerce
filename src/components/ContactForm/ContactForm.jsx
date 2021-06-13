import Button from "../Button/Button";
import Required from "../Required/Required";

const ContactForm = ({ formik, toggleFormOpen, handleFormSubmit }) => {
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 d-flex flex-column  p-2">
            <div className="my-3 rounded d-flex justify-content-center">
              <button
                className="p-1 p-lg-2 px-lg-3 m-1 rounded-2 w-75 align-self-center"
                data-bs-toggle="collapse"
                href={`#collapseExampleGmail`}
                role="button"
                aria-expanded="false"
                aria-controls={`collapseExampleGmail`}
              >
                <span className="mx-2">Connect with Developer</span>
              </button>
            </div>
            <div className="collapse" id={`collapseExampleGmail`}>
              <div className="card card-body">
                <p className="ms-1 p-0">
                  Please fill the form and I will reply back soon.
                </p>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-floating mb-3 mt-2">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    <label for="floatingInput" className="d-flex">
                      <div className="">User Name</div>
                      {formik.touched.username && formik.errors.username ? (
                        <Required />
                      ) : null}
                    </label>
                  </div>
                  <div className="form-floating mb-3 mt-2">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    <label for="floatingInput" className="d-flex">
                      <div className="">Email</div>
                      {formik.touched.email && formik.errors.email ? (
                        <Required />
                      ) : null}
                    </label>
                  </div>
                  <div className="form-floating mb-3 mt-2">
                    <input
                      type="text"
                      className="form-control"
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="contactNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contactNumber}
                    />
                    <label for="floatingInput" className="d-flex">
                      <div className="">Contact Number</div>
                      {formik.touched.contactNumber &&
                      formik.errors.contactNumber ? (
                        <Required />
                      ) : null}
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="message"
                      id="message"
                      name="message"
                      onBlur={formik.handleBlur}
                      style={{ height: "100px" }}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    ></textarea>
                    <label for="floatingTextarea2" className="d-flex">
                      <div className="">Message</div>
                      {formik.touched.message && formik.errors.message ? (
                        <Required />
                      ) : null}
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn theme-btn--dark rounded-5"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
