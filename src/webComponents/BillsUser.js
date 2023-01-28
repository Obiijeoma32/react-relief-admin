import { Link } from "react-router-dom";
import NewUser from "./NewUser";
import "./Web.css";

function BillsUser() {
  return (
    <>
      <NewUser />
      <div className="billsuser-container">
        <h1 style={{ fontWeight: "600", fontSize: "20px", fontFamily: "Euclid Circular B", color: "#162930", marginTop: "30px" }}>Bills Payment</h1>
        <div className="confirmmodal-details">
          <div className="bills-icon-container">
            <div className="billsuser-icon">
              <Link className="billsuser-link" to="/billsuser/billusermodal">
                <svg style={{ marginTop: "15px" }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 28.124L13.125 18.749L5.625 15.9365L18.75 1.87402L16.875 11.249L24.375 14.0615L11.25 28.124Z" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 style={{ fontFamily: "Euclid Circular B", fontSize: "16px", fontWeight: "400", color: "#2F2E2E", marginTop: "18px", textAlign: "center" }}>Electricity</h3>
              </Link>
            </div>
            <div className="billsuser-icon">
              <svg style={{ marginTop: "15px" }} width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5261 18.1629C11.5962 17.176 13.0192 16.6252 14.4991 16.6252C15.979 16.6252 17.402 17.176 18.4722 18.1629" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.68115 14.4506C8.77116 12.479 11.5771 11.3752 14.4991 11.3752C17.4211 11.3752 20.227 12.479 22.3171 14.4506" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.83923 10.7383C5.94783 7.78221 10.1359 6.12524 14.4991 6.12524C18.8623 6.12524 23.0504 7.78221 26.159 10.7383" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.5 23.1875C15.2508 23.1875 15.8594 22.5999 15.8594 21.875C15.8594 21.1501 15.2508 20.5625 14.5 20.5625C13.7492 20.5625 13.1406 21.1501 13.1406 21.875C13.1406 22.5999 13.7492 23.1875 14.5 23.1875Z" fill="#0098DB" />
              </svg>
              <h3 style={{ fontFamily: "Euclid Circular B", fontSize: "16px", fontWeight: "400", color: "#2F2E2E", marginTop: "18px", textAlign: "center" }}>Internet</h3>
            </div>
            <div className="billsuser-icon">
              <svg style={{ marginTop: "15px" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.875 10.5L14 3.5L27.125 10.5L14 17.5L0.875 10.5Z" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.5625 26.25V14L14 10.5" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M24.0625 12.1333V18.0965C24.0629 18.2853 24.0018 18.469 23.8886 18.6201C23.1518 19.6006 20.0433 23.1875 14 23.1875C7.95672 23.1875 4.84818 19.6006 4.11135 18.6201C3.99816 18.469 3.93714 18.2853 3.9375 18.0965V12.1333"
                  stroke="#0098DB"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 style={{ fontFamily: "Euclid Circular B", fontSize: "16px", fontWeight: "400", color: "#2F2E2E", marginTop: "18px", textAlign: "center" }}>Education</h3>
            </div>
          </div>
          <div className="bills-icon-container">
            <div className="billsuser-icon">
              <svg style={{ marginTop: "15px" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 13.125H26.25" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M24.5 20.125V22.75C24.5 22.9821 24.4078 23.2046 24.2437 23.3687C24.0796 23.5328 23.8571 23.625 23.625 23.625H21C20.7679 23.625 20.5454 23.5328 20.3813 23.3687C20.2172 23.2046 20.125 22.9821 20.125 22.75V20.125"
                  stroke="#0098DB"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.875 20.125V22.75C7.875 22.9821 7.78281 23.2046 7.61872 23.3687C7.45462 23.5328 7.23206 23.625 7 23.625H4.375C4.14294 23.625 3.92038 23.5328 3.75628 23.3687C3.59219 23.2046 3.5 22.9821 3.5 22.75V20.125"
                  stroke="#0098DB"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M7 16.625H8.75" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.25 16.625H21" stroke="#0098DB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M24.5 13.125L21.2309 5.76963C21.1622 5.61496 21.0501 5.48355 20.9082 5.39132C20.7662 5.29909 20.6006 5.25 20.4314 5.25H7.56864C7.39938 5.25 7.23376 5.29909 7.09184 5.39132C6.94992 5.48355 6.8378 5.61496 6.76906 5.76963L3.5 13.125V20.125H24.5V13.125Z"
                  stroke="#0098DB"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 style={{ fontFamily: "Euclid Circular B", fontSize: "16px", fontWeight: "400", color: "#2F2E2E", marginTop: "18px", textAlign: "center" }}>Transport</h3>
            </div>
            <div className="billsuser-icon">
              <svg style={{ marginTop: "15px" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 4.375H7C5.55025 4.375 4.375 5.55025 4.375 7V21C4.375 22.4497 5.55025 23.625 7 23.625H21C22.4497 23.625 23.625 22.4497 23.625 21V7C23.625 5.55025 22.4497 4.375 21 4.375Z"
                  stroke="#0098DB"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M10.0625 11.375C10.7874 11.375 11.375 10.7874 11.375 10.0625C11.375 9.33763 10.7874 8.75 10.0625 8.75C9.33763 8.75 8.75 9.33763 8.75 10.0625C8.75 10.7874 9.33763 11.375 10.0625 11.375Z" fill="#0098DB" />
                <path d="M14 15.3125C14.7249 15.3125 15.3125 14.7249 15.3125 14C15.3125 13.2751 14.7249 12.6875 14 12.6875C13.2751 12.6875 12.6875 13.2751 12.6875 14C12.6875 14.7249 13.2751 15.3125 14 15.3125Z" fill="#0098DB" />
                <path d="M17.9375 19.25C18.6624 19.25 19.25 18.6624 19.25 17.9375C19.25 17.2126 18.6624 16.625 17.9375 16.625C17.2126 16.625 16.625 17.2126 16.625 17.9375C16.625 18.6624 17.2126 19.25 17.9375 19.25Z" fill="#0098DB" />
              </svg>
              <h3 style={{ fontFamily: "Euclid Circular B", fontSize: "16px", fontWeight: "400", color: "#2F2E2E", marginTop: "18px", textAlign: "center" }}>Lotto</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillsUser;
