
import './style.css';
import { useState } from 'react';

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
        <span data-testid={"login-heading"} className="heading">Team Workouts<br/></span>
        <span data-testid={"login-emailLabel"} className="label">email</span>
        <input data-testid={"login-emailInput"} id="emailID" type="text" className="input" onChange={updateEmail} />
        <span data-testid={"login-passwordLabel"} className="label">password</span>
        <input data-testid={"login-passwordInput"} id="passwordID" type="text" className="input" onChange={updatePassword} />
        <button data-testid={"login-loginButton"} className="button" onClick={() => onLogin(email, password)}>Login</button>
        <button data-testid={"login-registerButton"} className="button" onClick={() => onRegister(email, password)}>Register</button>
      </div>
    );
  }
  
  export default Login;