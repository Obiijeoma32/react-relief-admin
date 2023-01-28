import { Link } from "react-router-dom";
import home from "./Homepage.png";
import "../App.css";

function Reset() {
  return (
    <>
      <div className="reset-container">
        <div className="reset-details">
          <h1>Reset your password</h1>
          <form className="reset-form">
            <input type="email" placeholder="Email address" />
            <br />
          </form>
          <div className="login-link">
            <Link className="login-button" to="/resetotp">
              Login
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

export default Reset;
