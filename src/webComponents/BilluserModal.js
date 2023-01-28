import { Link } from "react-router-dom";
import NewUser from "./NewUser";
import "./Web.css";

function BilluserModal() {
  return (
    <>
      <NewUser />
      <div className="transferhome-container">
        <h1>Send Money</h1>
        <div className="transferhome-details">
          <h2 style={{ marginTop: "20px" }}>₦0.00</h2>
          <p>Enter Amount</p>
          <div className="div-container">
            <div className="div">
              <input type="number" placeholder="Select Debit account" />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33335 5.66663L8.00002 10.3333L12.6667 5.66663" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <input className="div2" type="number" placeholder="Enter recipent’s account number" />
            <div className="div">
              <input type="text" placeholder="Select Beneficiary" />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33335 5.66663L8.00002 10.3333L12.6667 5.66663" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <h3>
            <Link className="transferhome-link" to="/billsuser/billusermodal/billstransaction">
              {" "}
              Continue
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default BilluserModal;
