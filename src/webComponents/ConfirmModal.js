import { Link } from "react-router-dom";
import NewUser from "./NewUser";
import "./Web.css";

function ConfirmModal() {
  return (
    <>
      <NewUser />
      <div className="confirmmodal-container">
        <h1 style={{ fontWeight: "400", fontSize: "20px", fontFamily: "Euclid Circular B", color: "#162930", marginTop: "30px" }}>Confirm transaction</h1>
        <div className="confirmmodal-details">
          <h2 style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Euclid Circular B", color: "#000", marginTop: "30px" }}>Enter Password</h2>
          <div className="confirmmodal-form">
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
          </div>
          <div className="confirmmodal-link">
            <Link className="link" to="/transferuser/confirmtransaction/confirmmodal/confirm-modal2">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmModal;
