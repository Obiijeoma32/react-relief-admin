import "./Web.css";

function DisputeUserModal({ closeUserDispute, closeUserModal1 }) {
  return (
    <>
      <div className="alldisputemodal-container" onClick={closeUserModal1}>
        <div className="alldispute-content">
          <div style={{ height: "550px" }} className="alltransaction-details">
            <div className="disputemodal-container">
              <h1 style={{ fontFamily: "Product Sans", fontSize: "30px", color: "rgba(0, 0, 0, 0.7)", fontWeight: "400", textAlign: "center" }}>Dispute</h1>
              <p style={{ fontFamily: "Euclid Circulars", fontSize: "14px", color: " rgba(47, 46, 46, 0.7)", fontWeight: "400", textAlign: "center" }}>Fill the information below to continue</p>
              <form className="disputeuser-form">
                <div className="disputemodal-box">
                  <input type="number" placeholder="Select Dispute Type" />
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33335 5.66663L8.00002 10.3333L12.6667 5.66663" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <input type="text" placeholder="Enter Terminal ID" />
                <br />
                <input type="number" placeholder="Enter Reference Number" />
                <br />
                <input type="number" placeholder="Enter Amount" />
                <br />
                <input className="disputeuser-input" type="date" placeholder="Select Date" />
                <br />
              </form>
              <div onClick={closeUserDispute} className="dispute-button">
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisputeUserModal;
