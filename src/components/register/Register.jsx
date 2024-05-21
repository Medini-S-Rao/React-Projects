import "./register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">TribeTide</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <Link to="/" className="loginRegisterButton">
              Log into Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
