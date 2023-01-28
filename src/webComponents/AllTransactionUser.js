import { useState } from "react";
import { Link } from "react-router-dom";
import AllTransactionModal from "./AllTransactionModal";
import NewUser from "./NewUser";
import NextDispute from "./NextDispute";
import TransactionDispute from "./TransactionDispute";
import "./Web.css";

function AllTransactionUser() {
  const [modal, setModal] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [next, setNext] = useState(false);
  function closeModal() {
    setModal(false);
  }
  function openTransaction() {
    setModal(false);
    setTransaction(true);
  }
  function closeTransaction() {
    setModal(false);
    setTransaction(false);
  }
  function openNextModal() {
    setModal(false);
    setTransaction(false);
    setNext(true);
  }
  function closeNext() {
    setModal(false);
    setTransaction(false);
    setNext(false);
  }
  return (
    <>
      <NewUser />
      <div className="alltransaction-container">
        <div className="dashboardtransaction-container">
          <div className="dashboardrecent-transaction">
            <h2>Transactions</h2>

            <Link style={{ color: "#0098db" }} className="dashboardrecent-link" to="">
              All Transactions
            </Link>
            <br />
            <br />
            <Link className="dashboardrecent-link" to="">
              Debit Transactions
            </Link>
            <br />
            <br />
            <Link className="dashboardrecent-link" to="">
              Credit Transactions
            </Link>
            <br />
            <br />
          </div>
          <div className="dashboardrecentcontainer">
            <h2>Today</h2>
            <div style={{ cursor: "pointer" }} onClick={() => setModal(true)} className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer to Oluwaseun Orofin</h4>
                <p style={{ color: "#ed5b5c" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
            <div className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#F5FBF8" />
                <path d="M16.9758 19.2273L13.3999 20.1855L12.4418 16.6096" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.1695 13.7342C21.967 13.0399 20.5379 12.8518 19.1967 13.2112C17.8555 13.5705 16.712 14.448 16.0177 15.6505L13.4 20.1845" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer from Emmanuella Etuk</h4>
                <p style={{ color: "#3BA871" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
            <h2>Friday</h2>
            <div className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer to Oluwaseun Orofin</h4>
                <p style={{ color: "#ed5b5c" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
            <div className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer to Oluwaseun Orofin</h4>
                <p style={{ color: "#ed5b5c" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
            <div className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#F5FBF8" />
                <path d="M16.9758 19.2273L13.3999 20.1855L12.4418 16.6096" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.1695 13.7342C21.967 13.0399 20.5379 12.8518 19.1967 13.2112C17.8555 13.5705 16.712 14.448 16.0177 15.6505L13.4 20.1845" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer from Emmanuella Etuk</h4>
                <p style={{ color: "#3BA871" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
            <h2>Earlier</h2>
            <div className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer to Oluwaseun Orofin</h4>
                <p style={{ color: "#ed5b5c" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
            <div className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer to Oluwaseun Orofin</h4>
                <p style={{ color: "#ed5b5c" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
            <div className="dashboardrecent-today">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="16.5" fill="#F5FBF8" />
                <path d="M16.9758 19.2273L13.3999 20.1855L12.4418 16.6096" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.1695 13.7342C21.967 13.0399 20.5379 12.8518 19.1967 13.2112C17.8555 13.5705 16.712 14.448 16.0177 15.6505L13.4 20.1845" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span>
                <h4>Transfer from Emmanuella Etuk</h4>
                <p style={{ color: "#3BA871" }}>500,000 NGN</p>
              </span>
              <p className="p">2021-01-21 13:40:49</p>
            </div>
          </div>
        </div>
      </div>
      {modal && <AllTransactionModal closeModal={closeModal} openTransaction={openTransaction} />}
      {transaction && <TransactionDispute closeTransaction={closeTransaction} openNextModal={openNextModal} />}
      {next && <NextDispute closeNext={closeNext} />}
    </>
  );
}

export default AllTransactionUser;
