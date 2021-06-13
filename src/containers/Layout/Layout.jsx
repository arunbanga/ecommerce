import { connect, useDispatch } from "react-redux";
import Footer from "../../components/Footer/Footer";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import Navbar from "../Navbar/Navbar";
import PageLoading from "../PageLoading/PageLoading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Layout.css";
import { useEffect } from "react";
import { PageLoadingActionType } from "../../redux/page-loading/page-loading";
import TextScroller from "../../components/TextScroller/TextScroller";

const Layout = ({ loadingCounter, children, messages }) => {
  return (
    <>
      <div className="d-none d-lg-block">
        {process.env.REACT_APP_JOB_SEARCH == 1 ? <Banner /> : null}
        <Navbar />
      </div>
      <div className="d-lg-none">
        <SideNavbar />
      </div>
      <main>
        {messages.successMessage.messages.length > 0 &&
          messages.successMessage.messages.map((message) => (
            <Toast
              messageType={messages.successMessage.type}
              message={message}
            />
          ))}
        {messages.errorMessage.messages.length > 0 &&
          messages.errorMessage.messages.map((message) => (
            <Toast messageType={messages.errorMessage.type} message={message} />
          ))}
        {loadingCounter > 0 && <PageLoading />}
        <div className={`${loadingCounter > 0 ? "invisible" : "visible"}`}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

function Toast({ messageType, message }) {
  const dispatch = useDispatch();

  useEffect(() => notifyAccordingToMessageType(), []);

  const notifyAccordingToMessageType = () => {
    switch (messageType) {
      case "success":
        toast.success(message, {
          onClose: () =>
            dispatch({ type: PageLoadingActionType.RemoveSuccessMessage }),
        });
        break;
      case "error":
        toast.error(message, {
          onClose: () =>
            dispatch({ type: PageLoadingActionType.RemoveErrorMessage }),
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ...state.loader };
};

const Banner = () => {
  return (
    <div className="container-fluid nav_bg p-3 bg-white fixed-top">
      <TextScroller text="Actively looking for a JOB, Immediate Joiner, Tech Stack - React.js, Node.js, .NetCore, SQL Server" />
    </div>
  );
};

export default connect(mapStateToProps)(Layout);
