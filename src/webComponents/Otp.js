import { Link } from "react-router-dom";
import home from "./Homepage.png";
import "../App.css";

function Otp() {
  return (
    <>
      <div className="otp-container">
        <div className="otp-details">
          <h1>Enter OTP</h1>
          <p>Enter 4 digit verification code sent to your number.</p>
          <div className="otp-form">
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
          </div>
          <p className="p">Resend OTP</p>
          <div className="otp-link">
            <Link className="type-button" to="/approved">
              Continue
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

export default Otp;
