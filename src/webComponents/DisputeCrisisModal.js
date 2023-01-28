import React from "react";

function DisputeCrisisModal({ closeCrisisModal, openConfirmModal }) {
  return (
    <>
      <div className="alldisputemodal-container" onClick={closeCrisisModal}>
        <div className="alldispute-content">
          <div className="alldispute-details">
            <div className="transactiondispute-box">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.175 4.99805H40.85C49.325 4.99805 55 10.948 55 19.798V40.2255C55 49.0505 49.325 54.998 40.85 54.998H19.175C10.7 54.998 5 49.0505 5 40.2255V19.798C5 10.948 10.7 4.99805 19.175 4.99805ZM29.9749 22.6505C28.7999 22.6505 27.8249 21.673 27.8249 20.4755C27.8249 19.2505 28.7999 18.2755 30.0249 18.2755C31.2249 18.2755 32.1999 19.2505 32.1999 20.4755C32.1999 21.673 31.2249 22.6505 29.9749 22.6505ZM32.1751 39.4506C32.1751 40.6506 31.2001 41.6256 29.9751 41.6256C28.7751 41.6256 27.8001 40.6506 27.8001 39.4506V28.4005C27.8001 27.198 28.7751 26.2005 29.9751 26.2005C31.2001 26.2005 32.1751 27.198 32.1751 28.4005V39.4506Z"
                  fill="#E0545E"
                />
              </svg>

              <h2>Transaction Dispute</h2>
              <p>Are you sure you want to dispute this transaction</p>
              <div style={{ cursor: "pointer" }} onClick={openConfirmModal}>
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisputeCrisisModal;
