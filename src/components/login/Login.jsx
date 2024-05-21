import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "medini98765@gmail.com" && password === "med") {
      navigate("/Home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginlogo">TribeTide</h3>
          <span className="loginDesc">
            Connect with your friends and colonize the world with TribeTide
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/Register" className="loginRegisterButton">
              Create a New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
