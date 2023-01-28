import { Link } from "react-router-dom";
import NewUser from "./NewUser";
import eked from "./eked.png";
import "./Web.css";

function BillsTransaction() {
  return (
    <>
      <NewUser />
      <div className="transferhome-container">
        <h1>Confirm Transaction</h1>
        <div className="confirmhome-details">
          <img style={{ marginTop: "30px" }} src={eked} alt="eked" />
          <h2>Segun Oriyomi</h2>
          <p className="p">12345678890 - Gtbank</p>
          <p className="p2">Amount</p>
          <h3 style={{ fontFamily: "Euclid Circular B" }}>₦5,000.00</h3>
          <div className="confirmhome-box">
            <div>
              <span style={{ textAlign: "left", marginTop: "20px" }}>
                <h4>From:</h4>
                <h5>0123456789</h5>
              </span>
              <span style={{ textAlign: "right", marginTop: "20px" }}>
                <h4>Transaction fee:</h4>
                <h5>₦10.00</h5>
              </span>
            </div>
            <div>
              <span style={{ textAlign: "left", marginTop: "20px" }}>
                <h4>Beneficiary bank:</h4>
                <h5>GTBank</h5>
              </span>
              <span style={{ textAlign: "right", marginTop: "20px" }}>
                <h4>Description:</h4>
                <h5>Transfer</h5>
              </span>
            </div>
          </div>
          <div className="confirmcheckbox">
            <input type="checkbox" />
            <label htmlFor>Save as Beneficiary</label>
          </div>
          <div className="confirmlink">
            <Link className="link" to="/billsuser/billusermodal/billstransaction/billstransactionmodal">
              Proceed
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default BillsTransaction;
