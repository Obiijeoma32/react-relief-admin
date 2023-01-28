import "./Web.css";

function DisputeDetails({ closeDisputeDetails, openCrisisModal }) {
  return (
    <>
      <div className="alldisputemodal-container" onClick={closeDisputeDetails}>
        <div className="alldispute-content">
          <div className="alldispute-details">
            <div className="disputediv-box">
              <div
                style={{
                  width: "448px",
                  height: "50px",
                  paddingBottom: "30px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                }}
                className="disputeuser-div"
              >
                <h1 className="h1">Dispute Details</h1>
                <h3 className="h3">22-08-2020</h3>
              </div>
              <div style={{ marginTop: "30px" }} className="disputeuser-div">
                <h1 style={{ textAlign: "left" }} className="segun">
                  Segun Oriyomi
                </h1>
                <span style={{ textAlign: "right" }}>
                  <h1 className="segun">₦50,000.00</h1>
                  <h3 className="transfer">Transfer</h3>
                </span>
              </div>
              <div className="disputeuser-div">
                <span style={{ textAlign: "left" }}>
                  <h3 className="merchant">Merchant Name Location:</h3>
                  <h2 className="lang">2HIGSS01 SAFE PAY LANG</h2>
                </span>
                <span style={{ textAlign: "right" }}>
                  <h3 className="merchant">Credit Account:</h3>
                  <h2 className="lang">8056560425</h2>
                </span>
              </div>
              <div className="disputeuser-div">
                <span style={{ textAlign: "left" }}>
                  <h3 className="merchant">Terminal ID :</h3>
                  <h2 className="lang">2HIGSS01</h2>
                </span>
                <span style={{ textAlign: "right" }}>
                  <h3 className="merchant">Account Number:</h3>
                  <h2 className="lang">N/A</h2>
                </span>
              </div>
              <div className="disputeuser-div">
                <span style={{ textAlign: "left" }}>
                  <h3 className="merchant">ID:</h3>
                  <h2 className="lang">3333333</h2>
                </span>
                <span style={{ textAlign: "right" }}>
                  <h3 className="merchant">Transaction Status:</h3>
                  <h2 className="lang">Transaction Approved</h2>
                </span>
              </div>
              <div className="disputeuser-div">
                <span style={{ textAlign: "left" }}>
                  <h3 className="merchant">Masked Pan:</h3>
                  <h2 className="lang">134655592********111989</h2>
                </span>
                <span style={{ textAlign: "right" }}>
                  <h3 className="merchant">Posting Status:</h3>
                  <h2 className="lang">Processed</h2>
                </span>
              </div>
              <div className="disputeuser-div">
                <span style={{ textAlign: "left" }}>
                  <h3 className="merchant">Request Time:</h3>
                  <h2 className="lang">12-01-2020T13:25:24</h2>
                </span>
                <span style={{ textAlign: "right" }}>
                  <h3 className="merchant">Request Time:</h3>
                  <h2 className="lang">12-01-2020T13:25:24</h2>
                </span>
              </div>
              <div onClick={openCrisisModal} className="click">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.99996 14C7.80133 14.0012 7.60686 13.9431 7.44134 13.8333C7.27582 13.7235 7.14675 13.5669 7.07059 13.3835C6.99442 13.2 6.97461 12.9981 7.01368 12.8033C7.05275 12.6086 7.14893 12.4299 7.28996 12.29L10.59 9L7.28996 5.71C7.10165 5.5217 6.99586 5.2663 6.99586 5C6.99586 4.7337 7.10165 4.47831 7.28996 4.29C7.47826 4.1017 7.73365 3.99591 7.99996 3.99591C8.26626 3.99591 8.52165 4.1017 8.70996 4.29L12.71 8.29C12.8962 8.47736 13.0007 8.73082 13.0007 8.995C13.0007 9.25919 12.8962 9.51264 12.71 9.7L8.70996 13.7C8.61734 13.7945 8.5069 13.8697 8.38502 13.9212C8.26315 13.9727 8.13226 13.9995 7.99996 14Z"
                    fill="#67C15F"
                  />
                  <path
                    d="M19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V11C2 10.2044 2.31607 9.44129 2.87868 8.87868C3.44129 8.31607 4.20435 8 5 8H12C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10H16C15.7348 10 15.4804 9.89464 15.2929 9.70711C15.1054 9.51957 15 9.26522 15 9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8H19C19.7956 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2044 22 11V17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20Z"
                    fill="#67C15F"
                  />
                </svg>
                <h1>Reopen Dispute</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisputeDetails;
