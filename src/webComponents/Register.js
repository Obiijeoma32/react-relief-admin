import { Link } from "react-router-dom";
import home from "./Homepage.png";
import "../App.css";

function Register() {
  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <h1>Business Information</h1>
          <form className="form1">
            <input type="text" placeholder="Enter Company Name" />
            <br />
            <input type="number" placeholder="Enter Company Registration Number" />
            <br />
            <input type="email" placeholder="Enter Email Addressnter Company Registration Number" />
            <br />
            <input type="text" placeholder="Enter Office Address" />
            <br />
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
            <input type="number" placeholder="Enter bank account number" />
            <br />
            <select name="business sector">
              <option value="business">Select Business sector</option>
              <option value="goods">Industrial and Consumer Goods</option>
              <option value="tech">Technology, Media, and Telecommunication</option>
              <option value="health">Healthcare & Pharmaceuticals</option>
              <option value="power">Power & Utilities</option>
              <option value="finance">Financial Services</option>
              <option value="agriculture">Agriculture</option>
              <option value="oil">Oil & Gas</option>
            </select>
            <br />
            <input type="email" placeholder="Enter Contact Email Address " />
            <br />
            <input type="number" placeholder="Enter Contact Phone Number " />
            <br />
          </form>
          <div className="register-link">
            <Link className="type-button" to="/kyc">
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
        <div className="register-image">
          <img src={home} alt="homepage" />
        </div>
      </div>
    </>
  );
}

export default Register;
