import "./Web.css";

function TransactionDispute({ closeTransaction, openNextModal }) {
  return (
    <>
      <div className="alltransactionmodal-container" onClick={closeTransaction}>
        <div className="alltransaction-content">
          <div className="alltransaction-details">
            <div className="transactiondispute-box">
              <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.175 0.998047H35.85C44.325 0.998047 50 6.94805 50 15.798V36.2255C50 45.0505 44.325 50.998 35.85 50.998H14.175C5.7 50.998 0 45.0505 0 36.2255V15.798C0 6.94805 5.7 0.998047 14.175 0.998047ZM24.9749 18.6505C23.7999 18.6505 22.8249 17.673 22.8249 16.4755C22.8249 15.2505 23.7999 14.2755 25.0249 14.2755C26.2249 14.2755 27.1999 15.2505 27.1999 16.4755C27.1999 17.673 26.2249 18.6505 24.9749 18.6505ZM27.1751 35.4506C27.1751 36.6506 26.2001 37.6256 24.9751 37.6256C23.7751 37.6256 22.8001 36.6506 22.8001 35.4506V24.4005C22.8001 23.198 23.7751 22.2005 24.9751 22.2005C26.2001 22.2005 27.1751 23.198 27.1751 24.4005V35.4506Z"
                  fill="#E0545E"
                />
              </svg>
              <h2>Transaction Dispute</h2>
              <p>Are you sure you want to dispute this transaction</p>
              <div onClick={openNextModal}>Continue</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionDispute;
