import "./PageLoading.scss";

const PageLoading = () => {
  return (
    <>
      <div className="page-loading d-flex justify-content-center align-items-center position-absolute z4">
        <div className="bg-blue spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default PageLoading;
