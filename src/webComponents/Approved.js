import { Link } from "react-router-dom";
import home from "./Homepage.png";
import rectangle from "./rectangle.png";
import "./Web.css";

function Approved() {
  return (
    <>
      <div className="approved-container">
        <div className="approved-details">
          <span>
            <img src={rectangle} alt="approved" />
          </span>
          <h1>Successful</h1>
          <p>You have successfully created your account</p>
          <div className="approved-link">
            <Link className="type-button" to="/login">
              Proceed to Dashboard
            </Link>
          </div>
        </div>
        <div className="otp-img">
          <img src={home} alt="homepage" />
        </div>
      </div>
    </>
  );
}

export default Approved;
