import NewUser from "./NewUser";
import "./Web.css";

function DashboardUser() {
  return (
    <>
      <NewUser />
      <div className="homeuser-container">
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
        <div className="homeuser-icon">
          <h3>Recent Transactions</h3>
          <div>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill="#12366C" fillOpacity="0.08" />
              <path
                d="M75.336 48.3479C78.0718 48.8039 80.754 49.5376 83.341 50.5378C87.6487 52.0291 91.6958 54.1867 95.335 56.9319C98.9017 59.5515 101.531 63.2488 102.835 67.4778C103.205 68.6571 103.32 69.9016 103.174 71.1289C103.034 71.7915 102.756 72.4173 102.358 72.9653C101.96 73.5134 101.451 73.9714 100.864 74.3098C98.5724 75.8137 96.0145 76.866 93.328 77.4099C89.1257 78.4913 84.8464 79.2471 80.528 79.6709C76.049 80.1609 71.566 80.4049 67.069 80.6289C63.397 80.8122 59.7303 80.8545 56.069 80.7559C51.229 80.6289 46.387 80.456 41.56 79.906C36.6655 79.4677 31.809 78.6777 27.028 77.542C24.5285 77.0359 22.1296 76.1209 19.928 74.834C16.059 72.278 16.45 71.1579 17.171 67.8699C18.1171 63.9025 20.3798 60.3729 23.59 57.8569C27.6459 54.5151 32.2887 51.9578 37.281 50.3159C39.243 49.6399 41.27 49.1499 43.267 48.5759C43.727 49.0579 43.583 49.6668 43.585 50.2278C43.597 55.2448 43.62 60.2638 43.571 65.2798C43.5253 65.8176 43.6182 66.3581 43.8407 66.8499C44.0632 67.3416 44.4078 67.7682 44.842 68.0889C45.681 68.7119 46.388 69.4888 47.217 70.1228C47.4628 70.3444 47.7792 70.4717 48.11 70.4822C48.4408 70.4926 48.7646 70.3856 49.024 70.1799C50.155 69.4399 51.324 68.7569 52.46 68.0239C52.8095 67.7501 53.2362 67.5931 53.6798 67.5752C54.1235 67.5572 54.5615 67.6792 54.932 67.9238C56.195 68.6708 57.518 69.318 58.77 70.084C59.0973 70.3258 59.4968 70.4499 59.9035 70.4363C60.3103 70.4227 60.7005 70.272 61.011 70.0088C62.101 69.2088 63.275 68.53 64.411 67.804C64.6749 67.6101 64.9926 67.5031 65.32 67.498C65.6474 67.493 65.9683 67.5902 66.2379 67.7759C67.5379 68.5329 68.803 69.3559 70.104 70.1189C70.2452 70.2355 70.4094 70.3211 70.5859 70.3701C70.7624 70.4191 70.9473 70.4304 71.1285 70.4033C71.3096 70.3763 71.483 70.3116 71.6375 70.2131C71.7919 70.1147 71.924 69.9846 72.025 69.8318C72.125 69.7138 71.997 69.8588 72.105 69.7488C75.519 66.2618 74.952 67.617 74.987 62.959C75.018 58.637 74.9869 54.314 75.0009 49.991C75.02 49.438 74.876 48.8289 75.336 48.3479Z"
                fill="white"
                stroke="#12366C"
                strokeOpacity="0.05"
                strokeWidth="0.5"
              />
              <path
                d="M75.337 48.344C75.337 54.093 75.314 59.8442 75.35 65.5891C75.3767 66.0482 75.2978 66.5071 75.1194 66.9309C74.9411 67.3548 74.6679 67.7322 74.321 68.034C73.463 68.811 72.639 69.6341 71.863 70.4891C71.7847 70.6073 71.6815 70.707 71.5605 70.781C71.4396 70.8551 71.3039 70.9016 71.163 70.9175C71.022 70.9334 70.8793 70.9183 70.7449 70.8731C70.6105 70.8279 70.4877 70.7539 70.385 70.656C68.923 69.728 67.396 68.9031 65.94 67.9671C65.772 67.82 65.5554 67.7405 65.3321 67.7442C65.1089 67.7479 64.895 67.8345 64.732 67.9871C63.465 68.8611 62.116 69.6191 60.876 70.5281C60.6159 70.7469 60.2893 70.8708 59.9496 70.8797C59.6098 70.8886 59.2771 70.7818 59.006 70.5769C57.506 69.7159 55.949 68.9371 54.468 68.0371C54.2546 67.8826 53.9967 67.8016 53.7333 67.8067C53.4699 67.8117 53.2153 67.9024 53.008 68.065C51.673 68.906 50.308 69.709 49.008 70.594C48.7863 70.8069 48.4917 70.9273 48.1844 70.9305C47.877 70.9336 47.58 70.8194 47.354 70.6111C46.093 69.6001 44.862 68.5589 43.7 67.4319C43.5238 67.2284 43.3951 66.9883 43.3234 66.7288C43.2516 66.4693 43.2384 66.1971 43.285 65.9319C43.285 60.1446 43.285 54.3577 43.285 48.5711C43.285 45.8711 43.243 43.171 43.3 40.471C43.3291 38.3993 43.8884 36.3696 44.9246 34.5755C45.9607 32.7813 47.4392 31.2825 49.219 30.222C52.4682 28.0082 56.3769 26.9722 60.296 27.2859C66.333 27.7699 71.417 30.0209 74.272 35.7959C74.9814 37.2106 75.3476 38.7725 75.341 40.355C75.323 43.025 75.334 45.687 75.337 48.344Z"
                fill="white"
                stroke="#12366C"
                strokeOpacity="0.08"
                strokeWidth="0.5"
              />
              <path
                d="M63.464 56.0119C63.5239 57.2418 63.4758 58.4744 63.32 59.6958C63.1198 60.769 62.52 61.7265 61.6416 62.3747C60.7632 63.023 59.6715 63.314 58.587 63.1889C57.5433 63.0774 56.5746 62.5943 55.8572 61.8281C55.1399 61.0619 54.7217 60.0636 54.679 59.0149C54.626 58.0149 54.662 57.0149 54.657 56.0149C54.8134 55.8712 54.9994 55.7635 55.2018 55.6992C55.4043 55.6349 55.6183 55.6156 55.829 55.6428C57.983 55.6161 60.1373 55.6161 62.292 55.6428C62.5024 55.6154 62.7163 55.6342 62.9188 55.698C63.1212 55.7617 63.3072 55.8689 63.464 56.0119Z"
                fill="#F96259"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path
                d="M63.466 56.0121H54.659C54.043 55.9951 53.428 55.9901 52.813 55.9601C52.6477 55.9683 52.4826 55.9412 52.3286 55.8805C52.1747 55.8198 52.0355 55.7271 51.9203 55.6083C51.8051 55.4895 51.7166 55.3475 51.6607 55.1918C51.6047 55.036 51.5827 54.8701 51.596 54.7052C51.57 53.8882 51.947 53.34 52.803 53.336C56.965 53.316 61.1267 53.316 65.288 53.336C65.464 53.322 65.641 53.3487 65.8052 53.4137C65.9693 53.4787 66.1164 53.5805 66.2351 53.7113C66.3538 53.8421 66.4409 53.9981 66.4898 54.1678C66.5386 54.3375 66.548 54.5162 66.517 54.69C66.5295 54.8648 66.5035 55.0401 66.441 55.2037C66.3784 55.3673 66.2809 55.5154 66.1551 55.6373C66.0293 55.7592 65.8783 55.852 65.7128 55.9093C65.5473 55.9666 65.3712 55.9871 65.197 55.9691C64.618 55.9771 64.041 55.9961 63.466 56.0121Z"
                fill="black"
                fillOpacity="0.76"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path
                d="M54.651 43.4229C54.6543 43.8288 54.5774 44.2315 54.4248 44.6077C54.2722 44.9838 54.0468 45.3259 53.7616 45.6147C53.4764 45.9036 53.1369 46.1334 52.7627 46.2908C52.3885 46.4481 51.987 46.5302 51.5811 46.532C51.1652 46.5351 50.7529 46.4551 50.3684 46.2966C49.9839 46.1382 49.6349 45.9044 49.342 45.6091C49.0491 45.3139 48.8182 44.9631 48.6628 44.5774C48.5074 44.1917 48.4306 43.7786 48.437 43.3628C48.4669 42.544 48.8097 41.7679 49.3948 41.1943C49.9799 40.6208 50.7628 40.2933 51.582 40.2798C52.4013 40.3034 53.1794 40.6445 53.752 41.231C54.3246 41.8174 54.6469 42.6032 54.651 43.4229Z"
                fill="black"
                fillOpacity="0.76"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path
                d="M69.11 43.4729C69.1127 43.8788 69.0341 44.2813 68.8788 44.6563C68.7234 45.0313 68.4945 45.3712 68.2056 45.6563C67.9166 45.9413 67.5734 46.1657 67.1963 46.3159C66.8192 46.4662 66.4158 46.5391 66.01 46.5308C65.6038 46.5338 65.2011 46.4555 64.8258 46.3003C64.4504 46.1451 64.11 45.9162 63.8246 45.6272C63.5391 45.3382 63.3145 44.9952 63.1639 44.6179C63.0134 44.2407 62.94 43.837 62.948 43.4309C62.9439 43.0151 63.023 42.6026 63.1806 42.2178C63.3383 41.833 63.5713 41.4835 63.8658 41.19C64.1604 40.8964 64.5107 40.6646 64.896 40.5083C65.2814 40.3521 65.6941 40.2743 66.11 40.2798C66.9294 40.3106 67.7038 40.6631 68.2653 41.2608C68.8268 41.8584 69.1303 42.6531 69.11 43.4729Z"
                fill="black"
                fillOpacity="0.76"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path d="M60 93C72.1503 93 82 90.9853 82 88.5C82 86.0147 72.1503 84 60 84C47.8497 84 38 86.0147 38 88.5C38 90.9853 47.8497 93 60 93Z" fill="#12366C" fillOpacity="0.08" />
            </svg>

            <h3 style={{ color: "#2f2e2e", fontSize: "16px", paddingTop: "16px" }}>No recent transaction</h3>
            <h4 style={{ fontSize: "14px", color: "rgba(47, 46, 46, 0.6)", paddingTop: "6px" }}>You have not made any recent transaction yet</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
