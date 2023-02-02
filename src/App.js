import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Transaction from "./components/Transaction";
import Settlement from "./components/Settlement";
import User from "./components/User";
import Loans from "./components/Loans";
import Dispute from "./components/Dispute";
import Accounts from "./components/Account";
import Terminal from "./components/Terminal";
import Dashboard from "./components/Dashboard";
import LogOut from "./components/LogOut";
import Register from "./webComponents/Register";
import Kyc from "./webComponents/Kyc";
import Login from "./webComponents/Login";
import Otp from "./webComponents/Otp";
import Approved from "./webComponents/Approved";
import Reset from "./webComponents/Reset";
import ResetOtp from "./webComponents/ResetOtp";
import CreatePass from "./webComponents/CreatePass";
import Successful from "./webComponents/Successful";
import NewUser from "./webComponents/NewUser";
import HomeUser from "./webComponents/HomeUser";
import TransferUser from "./webComponents/TransferUser";
import BillsUser from "./webComponents/BillsUser";
import LoanUser from "./webComponents/LoanUser";
import DisputeUser from "./webComponents/DisputeUser";
import AccountUser from "./webComponents/AccountUser";
import GetStarted from "./webComponents/GetStarted";
import DashboardUser from "./webComponents/DashboardUser";
import AllTransactionUser from "./webComponents/AllTransactionUser";
import ConfirmTransaction from "./webComponents/ConfirmTransaction";
import ConfirmModal from "./webComponents/ConfirmModal";
import ConfirmModal2 from "./webComponents/ConfirmModal2";
import BilluserModal from "./webComponents/BilluserModal";
import BillsTransaction from "./webComponents/BillsTransaction";
import BillsTransactionModal from "./webComponents/BillsTransactionModal";
import LoanOtpPage from "./webComponents/LoanOtpPage";
import LoanConfirmPage from "./webComponents/LoanConfirmPage";
import "./App.css";

const First = React.lazy(() => import("./webComponents/Splash"));
const Main = React.lazy(() => import("./webComponents/TypeAccount"));

// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   }).then(() => promise);
// }
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <First />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/reliefadmin" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/settlement" element={<Settlement />} />
            <Route path="/user" element={<User />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/resetotp" element={<ResetOtp />} />
            <Route path="/createpass" element={<CreatePass />} />
            <Route path="/successful" element={<Successful />} />
            <Route path="/newuser" element={<NewUser />} />
          </Routes>

          <Routes>
            <Route exact path="/dashboarduser" element={<DashboardUser />} />
            <Route path="/homeuser/alltransactionuser" element={<AllTransactionUser />} />
            <Route path="/transferuser/confirmtransaction" element={<ConfirmTransaction />} />
            <Route path="/transferuser/confirmtransaction/confirmmodal" element={<ConfirmModal />} />
            <Route path="/transferuser/confirmtransaction/confirmmodal/confirm-modal2" element={<ConfirmModal2 />} />
          </Routes>

          <Routes>
            <Route exact path="/homeuser" element={<HomeUser />} />
            <Route path="/billsuser/billusermodal" element={<BilluserModal />} />
            <Route path="/billsuser/billusermodal/billstransaction" element={<BillsTransaction />} />
            <Route path="/billsuser/billusermodal/billstransaction/billstransactionmodal" element={<BillsTransactionModal />} />
            <Route path="/loanuser/loanotppage" element={<LoanOtpPage />} />
            <Route path="/loanuser/loanotppage/loanconfirmpage" element={<LoanConfirmPage />} />

            <Route path="/transferuser" element={<TransferUser />} />
            <Route path="/billsuser" element={<BillsUser />} />
            <Route path="/loanuser" element={<LoanUser />} />
            <Route path="/disputeuser" element={<DisputeUser />} />
            <Route path="/accountuser" element={<AccountUser />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
