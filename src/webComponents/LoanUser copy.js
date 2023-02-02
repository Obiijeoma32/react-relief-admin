import { useState } from "react";
import { Link } from "react-router-dom";
import NewUser from "./NewUser";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndCondition from "./TermsAndCondition";
import "./Web.css";

function LoanUser() {
  const [policy, setPolicy] = useState(false);
  const [terms, setTerms] = useState(false);

  function handlePolicyClose() {
    setPolicy(false);
  }
  function handleTermsClose() {
    setTerms(false);
  }
  return (
    <>
      <NewUser />
      <div className="loanuser-container">
        <h1>Loan</h1>
        <p>Let’s get you started with Relief</p>
        <div className="loanuserhome-details">
          <h2 style={{ marginTop: "40px", fontFamily: "PT Sans", fontFtyle: "normal", fontWeight: "400", fontSize: "50px", textAlign: "center", color: "rgba(0, 0, 0, 0.7)" }}>₦0.00</h2>
          <p>Enter Amount</p>
          <div className="loanform-container">
            <div style={{ marginLeft: "7.8rem", height: "47px" }} className="form">
              <input type="tel" placeholder="Select Loan Tenor" />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33335 5.66663L8.00002 10.3333L12.6667 5.66663" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <label style={{ marginRight: "11rem" }} htmlFor="payment">
              Monthly Repayment
            </label>
            <br />
            <input type="number" placeholder="₦50,000.00" />
            <br />
            <label style={{ marginRight: "12rem" }} htmlFor="payment">
              Total Repayment
            </label>
            <br />
            <input type="number" placeholder="₦50,000.00" />
            <br />
            <label style={{ marginRight: "13.5rem" }} htmlFor="payment">
              Interest Rate
            </label>
            <br />
            <input type="number" placeholder="1.33% per month" />
          </div>
          <div className="loanuser-privacy">
            <input type="checkbox" />{" "}
            <label htmlFor="checkbox">
              I have read, understood and I agree to Relief’s <span onClick={() => setPolicy(true)}>Privacy Policy</span> and <span onClick={() => setTerms(true)}> Terms and conditions </span>
            </label>
          </div>
          <div className="loanuser-link">
            <Link className="transferhome-link" to="/loanuser/loanotppage">
              {" "}
              Continue
            </Link>
          </div>
        </div>
      </div>
      {policy && <PrivacyPolicy handlePolicyClose={handlePolicyClose} />}
      {terms && <TermsAndCondition handleTermsClose={handleTermsClose} />}
    </>
  );
}

export default LoanUser;
