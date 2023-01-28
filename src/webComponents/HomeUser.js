import { Link } from "react-router-dom";
import NewUser from "./NewUser";
import "./Web.css";

function HomeUser() {
  return (
    <>
      <NewUser />
      <div className="dashboarduser-container">
        <h1 className="h1">Welcome Yemi 👋</h1>
        <p className="p">Let’s get you started with Relief</p>
        <div className="transferuser-container">
          <div className="home-transfer">
            <span className="span1">
              <h1>₦0.00</h1>
              <p>Total Balance in NGN</p>
            </span>
            <span className="span2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5236 10.0965C17.056 9.63856 17.5456 9.133 17.9862 8.5861C18.0902 8.45715 18.1388 8.29218 18.1212 8.12744C18.1036 7.9627 18.0214 7.81167 17.8925 7.70755C17.7636 7.60344 17.5987 7.55475 17.4339 7.57219C17.2692 7.58964 17.1181 7.67178 17.0139 7.80058C16.525 8.40893 15.967 8.95831 15.351 9.43762C15.3468 9.44059 15.343 9.44387 15.3389 9.44696C13.8137 10.6332 11.9321 11.2686 10 11.25C8.06747 11.2686 6.18545 10.6329 4.66006 9.44616C4.6553 9.44254 4.65081 9.43868 4.64591 9.43517C4.03118 8.95646 3.47417 8.40791 2.9861 7.80058C2.93452 7.73674 2.87087 7.68368 2.79879 7.64443C2.72671 7.60519 2.6476 7.58053 2.56599 7.57186C2.48437 7.56319 2.40185 7.57067 2.32313 7.5939C2.24441 7.61712 2.17103 7.65561 2.10719 7.70719C2.04335 7.75877 1.99029 7.82242 1.95105 7.8945C1.91181 7.96658 1.88714 8.04569 1.87847 8.12731C1.8698 8.20892 1.87729 8.29144 1.90051 8.37016C1.92373 8.44888 1.96223 8.52226 2.01381 8.5861C2.45353 9.13193 2.94206 9.63657 3.47333 10.0938L1.9501 12.7321C1.90906 12.8031 1.88243 12.8816 1.87171 12.963C1.861 13.0443 1.86641 13.127 1.88765 13.2063C1.90889 13.2856 1.94554 13.3599 1.9955 13.425C2.04546 13.4901 2.10776 13.5448 2.17883 13.5858C2.24991 13.6268 2.32837 13.6535 2.40974 13.6642C2.49111 13.6749 2.57379 13.6695 2.65307 13.6482C2.73234 13.627 2.80666 13.5904 2.87177 13.5404C2.93689 13.4904 2.99152 13.4281 3.03256 13.3571L4.47709 10.8551C5.32216 11.4215 6.25145 11.8508 7.23056 12.1271L6.77631 14.7035C6.74755 14.8667 6.78482 15.0347 6.8799 15.1705C6.97499 15.3063 7.12011 15.3987 7.28336 15.4275C7.31943 15.4339 7.35598 15.437 7.39261 15.4371C7.53943 15.4368 7.68149 15.385 7.79389 15.2905C7.9063 15.1961 7.98188 15.0651 8.00738 14.9205L8.45405 12.3871C9.47686 12.5372 10.5161 12.5376 11.539 12.3882L11.9857 14.9215C12.0113 15.0661 12.0868 15.1971 12.1992 15.2915C12.3117 15.386 12.4537 15.4378 12.6005 15.4381C12.6372 15.438 12.6737 15.4348 12.7098 15.4285C12.8731 15.3997 13.0182 15.3072 13.1133 15.1714C13.2083 15.0356 13.2456 14.8677 13.2168 14.7044L12.7627 12.1291C13.743 11.8532 14.6734 11.424 15.5196 10.8573L16.9557 13.3447C17.0386 13.4882 17.1751 13.593 17.3352 13.6359C17.4953 13.6788 17.6659 13.6563 17.8094 13.5734C17.9529 13.4906 18.0577 13.354 18.1006 13.1939C18.1435 13.0338 18.121 12.8632 18.0381 12.7197L16.5236 10.0965Z"
                  fill="white"
                />
              </svg>
              <h3>Hide balance</h3>
            </span>
          </div>
          <div className="home-box-container">
            <div className="span3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0312 9.85181L14.2188 12.0393L12.0312 14.2268" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.28125 12.0393H14.2188" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.46875 7.66431L3.28125 5.47681L5.46875 3.28931" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.2188 5.47681H3.28125" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Transfer
            </div>
            <div className="span4">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.3821 5.87426L11.5586 2.05078C11.5532 2.0453 11.5472 2.04049 11.5416 2.03529C11.5342 2.02851 11.527 2.0215 11.5193 2.01513C11.5141 2.01092 11.5086 2.00725 11.5033 2.00321C11.4944 1.99637 11.4855 1.98943 11.4762 1.98312C11.472 1.98028 11.4675 1.97791 11.4632 1.97521C11.4523 1.96836 11.4415 1.96155 11.4301 1.95545C11.4271 1.95381 11.4239 1.95254 11.4208 1.95097C11.408 1.94436 11.395 1.93802 11.3816 1.93245C11.3796 1.93158 11.3774 1.93094 11.3753 1.93011C11.3609 1.92434 11.3463 1.91893 11.3313 1.91439C11.3292 1.91372 11.3269 1.91332 11.3248 1.91269C11.3099 1.90838 11.295 1.90441 11.2796 1.90134C11.2747 1.90037 11.2697 1.89994 11.2648 1.8991C11.2521 1.8969 11.2395 1.89466 11.2266 1.89339C11.2084 1.89155 11.1902 1.89063 11.1719 1.89062H4.60889C4.31891 1.89096 4.0409 2.0063 3.83585 2.21134C3.63081 2.41639 3.51547 2.6944 3.51514 2.98438V15.0156C3.51547 15.3056 3.63081 15.5836 3.83585 15.7887C4.0409 15.9937 4.31891 16.109 4.60889 16.1094H14.4532C14.7431 16.109 15.0212 15.9937 15.2262 15.7887C15.4312 15.5836 15.5466 15.3056 15.5469 15.0156V6.27621C15.547 6.27263 15.5475 6.2692 15.5475 6.26562C15.5475 6.19264 15.5329 6.1204 15.5045 6.05317C15.4761 5.98594 15.4345 5.9251 15.3821 5.87426ZM11.7188 12.2812H7.3438C7.19876 12.2812 7.05966 12.2236 6.9571 12.1211C6.85454 12.0185 6.79692 11.8794 6.79692 11.7344C6.79692 11.5893 6.85454 11.4502 6.9571 11.3477C7.05966 11.2451 7.19876 11.1875 7.3438 11.1875H11.7188C11.8638 11.1875 12.0029 11.2451 12.1055 11.3477C12.2081 11.4502 12.2657 11.5893 12.2657 11.7344C12.2657 11.8794 12.2081 12.0185 12.1055 12.1211C12.0029 12.2236 11.8638 12.2812 11.7188 12.2812ZM11.7188 10.0938H7.3438C7.19876 10.0938 7.05966 10.0361 6.9571 9.93357C6.85454 9.83102 6.79692 9.69192 6.79692 9.54688C6.79692 9.40183 6.85454 9.26273 6.9571 9.16018C7.05966 9.05762 7.19876 9 7.3438 9H11.7188C11.8638 9 12.0029 9.05762 12.1055 9.16018C12.2081 9.26273 12.2657 9.40183 12.2657 9.54688C12.2657 9.69192 12.2081 9.83102 12.1055 9.93357C12.0029 10.0361 11.8638 10.0938 11.7188 10.0938ZM11.1719 6.26562V3.21088L14.2266 6.26562H11.1719Z"
                  fill="#0098DB"
                />
              </svg>
              Generate statement
            </div>
          </div>
        </div>
        <div className="dashboardtransaction-container">
          <div className="dashboardrecent-transaction">
            <h2>Recent Transactions</h2>

            <Link className="dashboardrecent-link" to="/homeuser/alltransactionuser">
              All Transactions
            </Link>
            <br />
            <br />
            <Link className="dashboardrecent-link" to="/">
              Debit Transactions
            </Link>
            <br />
            <br />
            <Link className="dashboardrecent-link" to="/">
              Credit Transactions
            </Link>
            <br />
            <br />
          </div>
          <div className="dashboardrecentcontainer">
            <h2>Today</h2>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeUser;
