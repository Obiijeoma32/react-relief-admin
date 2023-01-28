import { Link } from "react-router-dom";
import home from "./Homepage.png";
import ng from "./ng.png";
import "../App.css";

function GetStarted() {
  return (
    <>
      <div className="getstarted-container">
        <div className="getstarted-details">
          <h1>Let’s get started 👋</h1>
          <form className="getstarted-form">
            <div className="div">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input className="flag" type="email" placeholder="Email address" />
            <br />
            <div className="getstarted-flag-input">
              <img src={ng} alt="flag" />
              <input type="tel" placeholder="Phone number" />
            </div>
            <br />
            <input type="text" placeholder="Address" />
            <br />
            <input type="text" placeholder="State" />
            <br />
            <input className="flag" style={{ paddingRight: "2px", fontFamily: "Euclid Circular B" }} type="date" placeholder="D.O.B" />
            <br />
          </form>
          <div className="getstarted-condition">
            <input type="checkbox" />{" "}
            <label htmlFor="checkbox">
              I have read, understood and I agree to Relief’s <a href="/">Privacy Policy</a> and <a href="/"> Terms and conditions </a>
            </label>
          </div>
          <div className="approved-link">
            <Link className="type-button" to="/kyc">
              Proceed to Dashboard
            </Link>
          </div>
          <p style={{ marginLeft: "6.5rem", marginTop: "15px" }}>
            Already have an account?{" "}
            <span>
              <Link className="register-span" path="/login">
                Login
              </Link>
            </span>
          </p>
        </div>
        <div className="getstarted-img">
          <img src={home} alt="homepage" />
        </div>
      </div>
    </>
  );
}

export default GetStarted;
