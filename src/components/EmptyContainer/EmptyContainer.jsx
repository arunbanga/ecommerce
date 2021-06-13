import "./EmptyContainer.scss";

const EmptyContainer = ({ message }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center emptyContainerHeight">
        <p className="text-center emptyContainerTextColor">{message}</p>
      </div>
    </>
  );
};

export default EmptyContainer;
