
import './style.css';
import { useState } from 'react';
import logoSrc from "./../../Assets/logo.svg";

const Register = ({ onRegister }) => {
  const[email, setEmail] = useState(undefined);
  const[password, setPassword] = useState(undefined);
  const[username, setUsername] = useState(undefined);
  const[password2, setPassword2] = useState(undefined);

  /**
   * TODO:
   * -Check for duplicate emails
   * -Check for duplicate usernames
   * -Check for password strength
  */
  const onRegisterClick = () => {
    if(password !== password2) {
      alert("Please make sure passwords match");
    }
    else if(email === undefined) {
      alert("Email already taken, please use a different one");
    }
    else if(username === undefined) {
      alert("Username already taken, please use a different one");
    }
    else {
      onRegister(email, username, password);
    }
  }

  const updateEmail = () => {
    setEmail(document.getElementById("emailID").value);
  }

  const updatePassword = () => {
    setPassword(document.getElementById("passwordID").value);
  }

  const updatePassword2 = () => {
    setPassword2(document.getElementById("password2ID").value);
  }

  const updateUsername = () => {
    setUsername(document.getElementById("usernameID").value);
  }

    return (
      <div data-testid={"register"} className="register">
        <div data-testid={"register-top"} className="register-top">
          <img data-testid={"register-logo"} className="register-logo" src={logoSrc} alt={""} />
        </div>
        <div data-testid={"register-bottom"} className="register-bottom">
          <span data-testid={"register-emailLabel"} className="register-label">email</span>
          <input data-testid={"register-emailInput"} id="emailID" type="text" className="register-input" onChange={updateEmail} />
          <span data-testid={"register-usernameLabel"} className="register-label">username</span>
          <input data-testid={"register-usernameInput"} id="usernameID" type="text" className="register-input" onChange={updateUsername} />
          <span data-testid={"register-passwordLabel"} className="register-label">password</span>
          <input data-testid={"register-passwordInput"} id="passwordID" type="text" className="register-input" onChange={updatePassword} />
          <span data-testid={"register-password2Label"} className="register-label">confirm password</span>
          <input data-testid={"register-password2Input"} id="password2ID" type="text" className="register-input" onChange={updatePassword2} />
          <button data-testid={"register-registerButton"} className="register-button" onClick={() => onRegisterClick()}>Register</button>
        </div>
      </div>
    );
  }
  
  export default Register;