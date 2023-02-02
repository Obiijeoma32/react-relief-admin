import { useState } from "react";
import { Link } from "react-router-dom";
import "./Web.css";

function TypeAccount() {
  const [individual, setIndividual] = useState(false);
  const [business, setBusiness] = useState(false);

  return (
    <>
      <div className="typeofaccount">
        <div style={{ fontFamily: "Euclid Circular B" }} className="type-container">
          <h1>Select account type</h1>
          <p className="p">Select the type of account you are trying to create</p>
          <form>
            <div className="type-list-container">
              <div
                onClick={() => {
                  setBusiness(false);
                  setIndividual(true);
                }}
                className={` ${individual === true && "type-active"} type-list`}
              >
                <div className="type-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M33.7512 11.25H6.25122C5.56086 11.25 5.00122 11.8096 5.00122 12.5V32.5C5.00122 33.1904 5.56086 33.75 6.25122 33.75H33.7512C34.4416 33.75 35.0012 33.1904 35.0012 32.5V12.5C35.0012 11.8096 34.4416 11.25 33.7512 11.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M35.0013 19.7354C30.4424 22.3729 25.2669 23.7578 20 23.7495C14.734 23.7578 9.55941 22.3734 5.00104 19.7367" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.125 18.75H21.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="type-detail">
                  <label htmlFor="business">
                    Business <input type="radio" value="Yes" name="business" />
                  </label>
                  <p>Choose the type of account you would like to get started with.</p>
                </div>
              </div>

              <div
                onClick={() => {
                  setIndividual(false);
                  setBusiness(true);
                }}
                className={`${business === true && "type-active"} type-list`}
              >
                <div className="type-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M20 25C23.4518 25 26.25 22.2018 26.25 18.75C26.25 15.2982 23.4518 12.5 20 12.5C16.5482 12.5 13.75 15.2982 13.75 18.75C13.75 22.2018 16.5482 25 20 25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.9686 31.1522C10.9102 29.301 12.3457 27.7464 14.1161 26.6606C15.8866 25.5747 17.923 25 20 25C22.0769 25 24.1133 25.5747 25.8838 26.6605C27.6543 27.7464 29.0898 29.3009 30.0314 31.1522"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="type-detail">
                  <label htmlFor="personal">
                    Personal <input type="radio" value="No" name="personal" />
                  </label>
                  <p>Choose the type of account you would like to get started with.</p>
                </div>
              </div>
            </div>
          </form>
          <div className="type-link">
            <Link className="type-button" to="/register">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeAccount;
