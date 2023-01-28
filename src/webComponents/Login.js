import home from "./Homepage.png";
import "../App.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleContinue(event) {
    event.preventDefault();
    if (email === "user@gmail.com" && password === "user") {
      window.location.href = "/homeuser";
    } else if (email === "admin@gmail.com" && password === "admin") {
      window.location.href = "/reliefadmin";
    }
  }
  return (
    <>
      <div className="login-container">
        <div className="login-details">
          <h1>Login to your account 👋</h1>
          <div className="login-form">
            <form>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email address" />
              <br />
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password (min. of 6 characters)" />
            </form>
          </div>
          <div className="login-pass">
            <span>{/* intentional */}</span>
            <p>Forgot Password ?</p>
          </div>
          <div onClick={handleContinue} className="login-link">
            <h2 className="login-button">Login</h2>
          </div>
        </div>
        <div className="otp-img">
          <img src={home} alt="homepage" />
        </div>
      </div>
    </>
  );
}

export default Login;
