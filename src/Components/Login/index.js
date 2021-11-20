
import './style.css';
import { useState } from 'react';
import logoSrc from "./../../Assets/logo.svg";

const Login = ({ onLogin, onRegister }) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const updateEmail = () => {
    setEmail(document.getElementById("emailID").value);
  }

  const updatePassword = () => {
    setPassword(document.getElementById("passwordID").value);
  }

    return (
      <div data-testid={"login"} className="login">
        <div data-testid={"login-top"} className="login-top">
          <img data-testid={"login-logo"} className="login-logo" src={logoSrc} alt={""} />
        </div>
        <div data-testid={"login-bottom"} className="login-bottom">
          <span data-testid={"login-emailLabel"} className="login-label">email</span>
          <input data-testid={"login-emailInput"} id="emailID" type="text" className="login-input" onChange={updateEmail} />
          <span data-testid={"login-passwordLabel"} className="login-label">password</span>
          <input data-testid={"login-passwordInput"} id="passwordID" type="text" className="login-input" onChange={updatePassword} />
          <button data-testid={"login-loginButton"} className="login-button" onClick={() => onLogin(email, password)}>Login</button>
          <button data-testid={"login-registerButton"} className="login-button" onClick={() => onRegister(email, password)}>Register</button>
        </div>
      </div>
    );
  }
  
  export default Login;