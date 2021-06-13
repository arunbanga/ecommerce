import { faListUl, faSearch, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBarMin = () => (
  <div className="container navbar-fixed d-none d-xl-block p-0">
    <div className="row mx-1 mx-xl-1 py-1 p-md-1 bg-light">
      <div className="col-3 col-xl-1 d-flex justify-content-evenly align-items-center">
        <FontAwesomeIcon icon={faListUl} />
        <FontAwesomeIcon icon={faTh} />
      </div>
      <div className="col-9 col-xl-3 offset-xl-8 d-flex justify-content-end align-items-center">
        <input
          className="border border-2 rounded-3"
          type="text"
          placeholder="Search"
        />
        <FontAwesomeIcon className="mx-2" icon={faSearch} />
      </div>
    </div>
  </div>
);

export default NavigationBarMin;
