import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ onNext, onPrevious, activePage }) => (
  <>
    <div className="row">
      <div className="col-12">
        <nav className="pagination-section mt-30">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center">
              <ul className="pagination">
                <li className="page-item">
                  {/* <a className="page-link" href="#" onClick={onPrevious}> */}
                  <FontAwesomeIcon
                    className="mx-2"
                    icon={faArrowLeft}
                    onClick={onPrevious}
                  />
                  {/* </a> */}
                </li>
                <li className="page-item">
                  {activePage === 1 ? null : (
                    <a className="page-link">{activePage - 1}</a>
                  )}
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    {activePage}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">{activePage + 1}</a>
                </li>
                <li className="page-item">
                  {/* <a className="page-link" href="#"> */}
                  <FontAwesomeIcon
                    className="mx-2"
                    icon={faArrowRight}
                    onClick={onNext}
                  />
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </>
);

export default Pagination;
