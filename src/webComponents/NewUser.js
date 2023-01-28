import { NavLink } from "react-router-dom";
import image from "../components/image.png";
import "./Web.css";

function NewUser({ children }) {
  const userItem = [
    {
      path: "/homeuser",
      name: "Home",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.2495 19.4994V14.9993C14.2495 14.8004 14.1704 14.6096 14.0298 14.469C13.8891 14.3283 13.6984 14.2493 13.4995 14.2493H10.4995C10.3005 14.2493 10.1098 14.3283 9.96912 14.469C9.82847 14.6096 9.74945 14.8004 9.74945 14.9993V19.4994C9.74945 19.6983 9.67045 19.889 9.52981 20.0297C9.38918 20.1703 9.19844 20.2494 8.99954 20.2494L4.50009 20.25C4.40159 20.25 4.30406 20.2306 4.21305 20.1929C4.12205 20.1552 4.03936 20.1 3.9697 20.0304C3.90005 19.9607 3.8448 19.878 3.8071 19.787C3.7694 19.696 3.75 19.5985 3.75 19.5V10.8318C3.75 10.7273 3.77183 10.624 3.8141 10.5284C3.85637 10.4329 3.91814 10.3472 3.99545 10.2769L11.4949 3.45803C11.633 3.3325 11.8129 3.26295 11.9995 3.26294C12.186 3.26293 12.3659 3.33248 12.504 3.45799L20.0045 10.2769C20.0818 10.3472 20.1436 10.4329 20.1859 10.5284C20.2282 10.624 20.25 10.7274 20.25 10.8319V19.5C20.25 19.5985 20.2306 19.696 20.1929 19.787C20.1552 19.878 20.1 19.9607 20.0303 20.0304C19.9606 20.1 19.878 20.1552 19.7869 20.1929C19.6959 20.2306 19.5984 20.25 19.4999 20.25L14.9994 20.2494C14.8005 20.2494 14.6097 20.1703 14.4691 20.0297C14.3285 19.889 14.2494 19.6983 14.2495 19.4994V19.4994Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/transferuser",
      name: "Transfer",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 13.5L19.5 16.5L16.5 19.5" stroke="currentColor" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 16.5H19.5" stroke="currentColor" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 10.5L4.5 7.5L7.5 4.5" stroke="currentColor" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 7.5H4.5" stroke="currentColor" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/billsuser",
      name: "Bills",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.125 9.75H16.875" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.125 12.75H16.875" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M3 19.5V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V19.5L18 18L15 19.5L12 18L9 19.5L6 18L3 19.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/loanuser",
      name: "Loan",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.75V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15.75V17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M9.75 15.75H13.125C13.6223 15.75 14.0992 15.5525 14.4508 15.2008C14.8025 14.8492 15 14.3723 15 13.875C15 13.3777 14.8025 12.9008 14.4508 12.5492C14.0992 12.1975 13.6223 12 13.125 12H10.875C10.3777 12 9.90081 11.8025 9.54917 11.4508C9.19754 11.0992 9 10.6223 9 10.125C9 9.62772 9.19754 9.15081 9.54917 8.79917C9.90081 8.44754 10.3777 8.25 10.875 8.25H14.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/disputeuser",
      name: "Dispute",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.7109 13.5L3 16.5V4.5C3 4.30109 3.07902 4.11032 3.21967 3.96967C3.36032 3.82902 3.55109 3.75 3.75 3.75H15.75C15.9489 3.75 16.1397 3.82902 16.2803 3.96967C16.421 4.11032 16.5 4.30109 16.5 4.5V12.75C16.5 12.9489 16.421 13.1397 16.2803 13.2803C16.1397 13.421 15.9489 13.5 15.75 13.5H6.7109Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 13.5V17.25C7.5 17.4489 7.57902 17.6397 7.71967 17.7803C7.86032 17.921 8.05109 18 8.25 18H17.2891L21 21V9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/accountuser",
      name: "Accounts",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.75 6.75C19.5784 6.75 20.25 6.07843 20.25 5.25C20.25 4.42157 19.5784 3.75 18.75 3.75C17.9216 3.75 17.25 4.42157 17.25 5.25C17.25 6.07843 17.9216 6.75 18.75 6.75Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M18.75 3.75V2.625" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.451 4.5L16.4767 3.9375" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.451 6L16.4767 6.5625" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.75 6.75V7.875" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.0491 6L21.0233 6.5625" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.0491 4.5L21.0233 3.9375" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4962 11.4103C17.0473 12.4318 16.3224 13.3078 15.4029 13.9399C14.4834 14.572 13.4058 14.935 12.2913 14.9882C11.1768 15.0414 10.0695 14.7826 9.094 14.2409C8.1185 13.6993 7.31344 12.8962 6.76934 11.9221C6.22524 10.948 5.96368 9.84137 6.01405 8.72672C6.06443 7.61207 6.42475 6.53357 7.05451 5.61249C7.68426 4.69141 8.55848 3.96426 9.57886 3.51282C10.5992 3.06137 11.7253 2.90353 12.8305 3.05703"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="newuser-sidebar">
        <div className="side-bar-profile">
          <div className="profile-bar">
            <img src={image} alt="img" />

            <h2 style={{ fontFamily: "Euclid Circular B", fontWeight: "700", fontSize: "16px" }}>Yemi Tinubu</h2>
            <svg style={{ paddingLeft: "40px", width: "10", height: "6" }} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 1.5L5 5.25L1.25 1.5" stroke="#94A2AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="newuser-details">
          {userItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={({ isActive }) => (isActive ? "newuser-menu-active" : "newuser-menu")}>
              <span className="newuser-icon">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="newuser-logout">
          <NavLink className="newuser-link" to="/login">
            <span className="newuser-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.262 8.77497C21.2394 8.67072 21.1947 8.57251 21.1311 8.48688C21.0675 8.40124 20.9863 8.33017 20.8931 8.27839L18.6641 7.04101C18.5407 6.80187 18.4059 6.56791 18.261 6.34155L18.3039 3.79038C18.3057 3.68368 18.2847 3.57782 18.2423 3.47988C18.1999 3.38194 18.1371 3.29417 18.0581 3.22244C16.9484 2.21309 15.6338 1.45528 14.2041 1.00082C14.1025 0.968307 13.9952 0.95784 13.8892 0.970114C13.7832 0.982389 13.6811 1.01712 13.5896 1.072L11.4035 2.38372C11.1346 2.3709 10.8645 2.37068 10.5962 2.38308L8.4083 1.07026C8.31678 1.01536 8.2146 0.980619 8.10858 0.968352C8.00257 0.956085 7.89516 0.966576 7.79352 0.999124C6.36454 1.45559 5.05095 2.21518 3.94254 3.22601C3.86357 3.29774 3.80082 3.3855 3.75847 3.48341C3.71612 3.58133 3.69515 3.68715 3.69695 3.79382L3.73984 6.34287C3.59445 6.56924 3.45918 6.80306 3.33563 7.0417L1.10477 8.28013C1.01146 8.33193 0.930289 8.40304 0.866663 8.48871C0.803037 8.57439 0.758426 8.67265 0.73581 8.77695C0.416556 10.2427 0.417587 11.7601 0.738832 13.2254C0.761483 13.3297 0.80611 13.4279 0.869734 13.5135C0.933358 13.5992 1.01452 13.6703 1.10779 13.722L3.33678 14.9594C3.46015 15.1985 3.59496 15.4325 3.73988 15.6589L3.69695 18.21C3.69515 18.3167 3.71615 18.4226 3.75853 18.5205C3.80091 18.6185 3.86371 18.7062 3.94272 18.778C5.05248 19.7873 6.3671 20.5451 7.79672 20.9996C7.89832 21.0321 8.00568 21.0426 8.11165 21.0303C8.21762 21.018 8.31974 20.9833 8.41122 20.9284L10.5973 19.6167C10.8662 19.6295 11.1363 19.6297 11.4046 19.6173L13.5926 20.9302C13.6841 20.9851 13.7863 21.0198 13.8923 21.0321C13.9983 21.0443 14.1057 21.0338 14.2073 21.0013C15.6363 20.5448 16.9499 19.7852 18.0583 18.7744C18.1373 18.7027 18.2 18.6149 18.2424 18.517C18.2847 18.4191 18.3057 18.3133 18.3039 18.2066L18.261 15.6575C18.4064 15.4312 18.5417 15.1974 18.6652 14.9587L20.8961 13.7203C20.9894 13.6685 21.0706 13.5974 21.1342 13.5117C21.1978 13.426 21.2424 13.3278 21.265 13.2235C21.5843 11.7577 21.5833 10.2403 21.262 8.77497ZM15.1254 11.0002C15.1254 11.8161 14.8835 12.6136 14.4302 13.2919C13.977 13.9703 13.3327 14.499 12.579 14.8112C11.8253 15.1234 10.9959 15.2051 10.1957 15.046C9.39551 14.8868 8.66051 14.4939 8.08361 13.917C7.50672 13.3401 7.11385 12.6051 6.95469 11.805C6.79553 11.0048 6.87722 10.1754 7.18943 9.42164C7.50164 8.6679 8.03035 8.02366 8.7087 7.5704C9.38705 7.11714 10.1846 6.87521 11.0004 6.87521C12.0941 6.87645 13.1426 7.31144 13.9159 8.08476C14.6892 8.85808 15.1242 9.90657 15.1254 11.0002Z"
                  fill="#A8B0C0"
                />
              </svg>
            </span>
            Logout
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

export default NewUser;
