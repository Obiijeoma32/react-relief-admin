import { Link } from "react-router-dom";
import NewUser from "./NewUser";
import "./Web.css";

function LoanOtpPage() {
  return (
    <>
      <NewUser />
      <div className="confirmmodal-container">
        <h1 style={{ fontWeight: "600", fontSize: "20px", fontFamily: "Euclid Circular B", color: "#162930", marginTop: "35px" }}>Loan</h1>
        <p style={{ fontWeight: "500", fontSize: "16px", fontFamily: "Euclid Circular B", color: "#68717F", marginTop: "5px" }}>Let’s get you started with Relief</p>

        <div className="confirmmodal-details">
          <h2 style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Euclid Circular B", color: "#000", marginTop: "30px" }}>Enter Password</h2>
          <div className="confirmmodal-form">
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
          </div>
          <div className="confirmmodal-link">
            <Link className="link" to="/loanuser/loanotppage/loanconfirmpage">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoanOtpPage;
