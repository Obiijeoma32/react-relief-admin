import "./Web.css";

function AllTransactionModal({ closeModal, openTransaction }) {
  return (
    <>
      <div className="alltransactionmodal-container" onClick={closeModal}>
        <div className="alltransaction-content">
          <div className="alltransaction-details">
            <div className="div">
              <h2 style={{ marginTop: "30px" }}>Transaction Details</h2>
              <svg style={{ marginTop: "30px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#0097DC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z"
                  stroke="#0097DC"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z"
                  stroke="#0097DC"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M13.9767 6.87207L8.52319 10.3779" stroke="#0097DC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.52319 13.6221L13.9767 17.1279" stroke="#0097DC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div
              style={{
                width: "448px",
                height: "35px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
              }}
              className="div"
            >
              <span>
                <h3> Funds Transfer</h3>
                <h1 style={{ fontSize: "20px" }}>₦50,000.00</h1>
              </span>
              <div onClick={openTransaction} style={{ width: "95px", height: "22px", border: "1px solid #E0545E", textAlign: "center", borderRadius: "7px", color: "#E0545E", padding: "12px", cursor: "pointer" }}>
                Dispute
              </div>
            </div>
            <div className="div">
              <span>
                <h3>Merchant Name Location:</h3>
                <h1>2HIGSS01 SAFE PAY LANG</h1>
              </span>
              <span style={{ textAlign: "right" }}>
                <h3>Credit Account:</h3>
                <h1>8056560425</h1>
              </span>
            </div>
            <div className="div">
              <span>
                <h3>Terminal ID :</h3>
                <h1>2HIGSS01</h1>
              </span>
              <span style={{ textAlign: "right" }}>
                <h3>Account Number:</h3>
                <h1>N/A</h1>
              </span>
            </div>
            <div className="div">
              <span>
                <h3> ID :</h3>
                <h1>3333333</h1>
              </span>
              <span style={{ textAlign: "right" }}>
                <h3>Transaction Status:</h3>
                <h1>Transaction Approved</h1>
              </span>
            </div>
            <div className="div">
              <span>
                <h3>Masked Pan:</h3>
                <h1>134655592********111989</h1>
              </span>
              <span style={{ textAlign: "right" }}>
                <h3>Posting Status:</h3>
                <h1>Processed</h1>
              </span>
            </div>
            <div className="div">
              <span>
                <h3>Request Time:</h3>
                <h1>12-01-2020T13:25:24</h1>
              </span>
              <span style={{ textAlign: "right" }}>
                <h3>Request Time:</h3>
                <h1>12-01-2020T13:25:24</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllTransactionModal;
