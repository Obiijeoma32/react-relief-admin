import React from "react";
import { Link } from "react-router-dom";

function DisputeConfirm({ handleCloseModal }) {
  return (
    <>
      <div className="alldisputemodal-container" onClick={handleCloseModal}>
        <div className="alldispute-content">
          <div className="alldispute-details">
            <div className="transactiondispute-box">
              <svg width="67" height="64" viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.2207 5.33301H45.2077C54.5867 5.33301 60.867 11.6797 60.867 21.1197V42.909C60.867 52.3197 54.5867 58.6663 45.2077 58.6663H21.2207C11.8417 58.6663 5.53369 52.3197 5.53369 42.909V21.1197C5.53369 11.6797 11.8417 5.33301 21.2207 5.33301ZM31.6233 39.973L44.7649 27.3063C45.7056 26.3997 45.7056 24.933 44.7649 23.9997C43.8243 23.093 42.2749 23.093 41.3343 23.9997L29.9079 35.013L25.0663 30.3463C24.1256 29.4397 22.5763 29.4397 21.6356 30.3463C20.6949 31.253 20.6949 32.7197 21.6356 33.653L28.2203 39.973C28.6906 40.4263 29.2993 40.6397 29.9079 40.6397C30.5443 40.6397 31.1529 40.4263 31.6233 39.973Z"
                  fill="#669D62"
                />
              </svg>
              <h2>Transaction Dispute</h2>
              <p>You’d be notified on the progress of your dispute</p>
              <div>
                <Link className="confirmmodallink" to="">
                  Continue
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisputeConfirm;
