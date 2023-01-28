import { Link } from "react-router-dom";
import home from "./Homepage.png";
import "../App.css";

function CreatePass() {
  return (
    <>
      <div className="createpass-container">
        <div className="createpass-details">
          <h1>Create a new password </h1>
          <p>Your password must be at least 8 characters long, and contain one letter and one digit</p>
          <form className="createpass-form">
            <input className="input1" type="password" placeholder="Enter new password" />
            <br />
            <div className="create-inputfield">
              <input type="password" placeholder="Confirm new password" />
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1433 10.4429L15.7471 13.6838" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.8411 12.2441L11.3412 15.5536" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.15285 12.2427L6.65259 15.5527" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.85373 10.4404L2.24219 13.6969" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.25 8.60303C3.43213 10.3101 5.59927 12.4687 9.00004 12.4687C12.4008 12.4687 14.5679 10.3102 15.7501 8.60305" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </form>
          <div className="createpass-link">
            <Link className="type-button" to="/successful">
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

export default CreatePass;
