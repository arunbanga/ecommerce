import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

const Footer = () => (
  <>
    <div className="container-fluid primary-color p-3 footer">
      <div className="row">
        {process.env.REACT_APP_JOB_SEARCH == 1 ? (
          <DeveloperProfile />
        ) : (
          <EcommerceFooter />
        )}
      </div>
    </div>
  </>
);
const EcommerceFooter = () => (
  <>
    <div className="col-12 col-md-3 col-lg-3">
      <h3>Brand Name</h3>
    </div>
    <div className="col-12 col-md-3 col-lg-3">
      <h5 className="mb-3">CUSTOMER SERVICE</h5>
      <p>Order history</p>
      <p>Order tracking</p>
      <p>My Account</p>
      <p>Careers</p>
      <p>Help and FAQs</p>
    </div>
    <div className="col-12 col-md-3 col-lg-3">
      <h5 className="mb-3">CONTACT INFO</h5>
      <h6>
        <b>Address</b>
      </h6>
      <p>St 123, Mumbai</p>
      <h6>
        <b>Phone</b>
      </h6>
      <p>Toll free (123) 456-7890</p>
      <h6>
        <b>Email</b>
      </h6>
      <p>mail@domain.com</p>
      <h6>
        <b>Working day/hours</b>
      </h6>
      <p>Mon-Friday/10:00AM - 05:00PM</p>
    </div>
    <div className="col-12 col-md-3 col-lg-3">
      <h5 className="mb-3">Follow us on</h5>
      <FontAwesomeIcon
        className="m-1"
        color="#50ABF1"
        icon={["fab", "twitter"]}
        size="lg"
      />
      <FontAwesomeIcon
        className="m-1"
        color="red"
        icon={["fab", "youtube"]}
        size="lg"
      />
      <FontAwesomeIcon
        className="m-1"
        color="#4867AA"
        icon={["fab", "facebook"]}
        size="lg"
      />
      <FontAwesomeIcon
        className="m-1"
        color="#694DC6"
        icon={["fab", "instagram"]}
        size="lg"
      />
    </div>
  </>
);

const DeveloperProfile = () => {
  return (
    <>
      <div className="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center">
        <h3>Developer's Profile</h3>
        <div>
          <img
            className="rounded-circle"
            height="200"
            width="200"
            src="./bippan.jpeg"
          ></img>
        </div>
      </div>
      <div className="col-12 col-md-3 col-lg-4">
        <h5>Introdution</h5>
        <div>
          <p>
            Hi everyone, my name is bippan and I am a full stack developer. I
            care deeply about bringing ideas to life and this ecommerce website
            is one of my project in development that will help local vendors to
            digitalise their business through the application. <br />
            My recent work - Pocket money films{" "}
            <a href="https://www.pocketmoneyfilms.com" target="_blank">
              www.pocketmoneyfilms.com
            </a>
            <br /> An OTT platform where a bunch of movie enthusiasts will try
            to uphold cinemas that are impactful and honest in what each story
            wants to convey. The hand-curated collection of Independent Films
            screening over a virtual theatre will be an amazing experience for
            all of us.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-3 col-lg-2">
        <h5>Current application tech stack</h5>
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>Firebase</li>
        </ul>
        <p className="ml-2">Get the code on github</p>
      </div>
      <div className="col-12 col-md-3 col-lg-2">
        <h5>Tech Stack that I ❤️ to use</h5>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>.Net Core</li>
          <li>SQL Server</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="col-12 col-md-3 col-lg-2">
        <h5>Get in touch</h5>
        <div className="d-flex">
          <a href="https://twitter.com/bippan8" target="_black">
            <FontAwesomeIcon
              className="m-0"
              color="#50ABF1"
              icon={["fab", "twitter"]}
              size="lg"
            />
          </a>
          <a href="https://github.com/bippan1407" target="_black">
            <FontAwesomeIcon
              className="ms-4"
              color="black"
              icon={["fab", "github"]}
              size="lg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bippan-kumar-09769616a/"
            target="_black"
          >
            <FontAwesomeIcon
              className="ms-4"
              color="blue"
              icon={["fab", "linkedin"]}
              size="lg"
            />
          </a>
        </div>
        <div className="my-4">
          <p className="ml-2">🇮🇳 +91 82888-21577</p>
          <p className="ml-2">bippan1407@gmail.com</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
