import { Link } from "react-router-dom";
import home from "./Homepage.png";
import "../App.css";

function Kyc() {
  return (
    <>
      <div className="kyc-container">
        <div className="kyc-details">
          <h1>KYC Information</h1>
          <form className="kyc-form">
            <select name="banks">
              <option value="select">Select Bank</option>
              <option value="acces">Access Bank</option>
              <option value="fidelity">Fidelity Bank</option>
              <option value="fcmb">First City Monument Bank </option>
              <option value="first">First Bank of Nigeria</option>
              <option value="Gtb">Guaranty Trust Holding Company</option>
              <option value="union">Union Bank of Nigeria </option>
              <option value="Uba">United Bank for Africa </option>
              <option value="zenith">Zenith Bank </option>
            </select>
            <br />
            <input type="number" placeholder="Enter RC Number" />
            <br />
            <input type="number" placeholder="Enter Tax Identification Number" />
            <br />
            <input type="text" placeholder="Enter Form CAC 1.1" />
            <br />
            <input type="text" placeholder="Enter Certificate of Incorporation" />
            <br />
            <input type="text" placeholder="Enter Director’s Details" />
            <br />
            <input type="text" placeholder="Enter Beneficial Owner" />
            <br />
            <input type="text" placeholder="Enter Memo&Articles of Association" />
            <br />
          </form>
          <div className="register-link">
            <Link className="type-button" to="/otp">
              Continue
            </Link>
          </div>
          <p>
            Already have an account?{" "}
            <span>
              <Link className="register-span" to="/login">
                Login
              </Link>
            </span>
          </p>
        </div>
        <div className="kyc-img">
          <img src={home} alt="homepage" />
        </div>
      </div>
    </>
  );
}

export default Kyc;
