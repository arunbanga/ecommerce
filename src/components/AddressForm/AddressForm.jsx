import Required from "../Required/Required";
import "./AddressForm.scss";

const AddressForm = ({ formik, toggleFormOpen, handleFormSubmit }) => (
  <>
    <div className="address-form-background container-fluid row justify-content-center position-fixed vh-100 animate__animated animate__slideInRight">
      <div className="col-md-6">
        <form onSubmit={handleFormSubmit}>
          <div className="form-floating mb-3 mt-2">
            <input
              type="text"
              className="form-control"
              id="personalName"
              name="personalName"
              placeholder="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.personalName}
            />
            <label for="floatingInput" className="d-flex">
              <div className="">User Name</div>
              {formik.touched.personalName && formik.errors.personalName ? (
                <Required />
              ) : null}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="contactDetails"
              name="contactDetails"
              onBlur={formik.handleBlur}
              placeholder="Contact Details"
              onChange={formik.handleChange}
              value={formik.values.contactDetails}
            />
            <label for="floatingInput" className="d-flex">
              <div className="">Contact Details</div>
              {formik.touched.contactDetails && formik.errors.contactDetails ? (
                <Required />
              ) : null}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="pincode"
              name="pincode"
              onBlur={formik.handleBlur}
              placeholder="Pincode"
              onChange={formik.handleChange}
              value={formik.values.pincode}
            />
            <label for="floatingInput" className="d-flex">
              <div className="">Pincode</div>
              {formik.touched.pincode && formik.errors.pincode ? (
                <Required />
              ) : null}
            </label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Address"
              id="address"
              name="address"
              onBlur={formik.handleBlur}
              style={{ height: "100px" }}
              onChange={formik.handleChange}
              value={formik.values.address}
            ></textarea>
            <label for="floatingTextarea2" className="d-flex">
              <div className="">Address</div>
              {formik.touched.address && formik.errors.address ? (
                <Required />
              ) : null}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="landmark"
              name="landmark"
              placeholder="Landmark"
              onChange={formik.handleChange}
              value={formik.values.landmark}
            />
            <label for="floatingInput">Landmark</label>
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

export default AddressForm;
