
import './style.css';
import { useState } from 'react';

const Register = ({ onRegister, onBack }) => {
  const[email, setEmail] = useState(undefined);
  const[password, setPassword] = useState(undefined);
  const[name, setName] = useState(undefined);
  const[username, setUsername] = useState(undefined);
  const[password2, setPassword2] = useState(undefined);

  const updateEmail = () => {
    setEmail(document.getElementById("emailID").value);
  }

  const updatePassword = () => {
    setPassword(document.getElementById("passwordID").value);
  }

  const updatePassword2 = () => {
    setPassword2(document.getElementById("password2ID").value);
  }

  const updateName = () => {
    setName(document.getElementById("nameID").value);
  }

  const updateUsername = () => {
    setUsername(document.getElementById("usernameID").value);
  }

    return (
      <div data-testid={"register"} className="register">
        <span data-testid={"register-heading"} className="heading">Team Workouts<br/></span>
        <span data-testid={"register-usernameLabel"} className="label">username</span>
        <input data-testid={"register-usernameInput"} id="usernameID" type="text" className="input" onChange={updateUsername} />
        <span data-testid={"register-nameLabel"} className="label">name</span>
        <input data-testid={"register-nameInput"} id="nameID" type="text" className="input" onChange={updateName} />
        <span data-testid={"register-emailLabel"} className="label">email</span>
        <input data-testid={"register-emailInput"} id="emailID" type="text" className="input" onChange={updateEmail} />
        <span data-testid={"register-passwordLabel"} className="label">password</span>
        <input data-testid={"register-passwordInput"} id="passwordID" type="text" className="input" onChange={updatePassword} />
        <span data-testid={"register-password2Input"} className="label">confirm password</span>
        <input data-testid={"register-password2Label"} id="password2ID" type="text" className="input" onChange={updatePassword2} />
        <button data-testid={"register-registerButton"} className="button" onClick={() => onRegister()}>Register</button>
        <button data-testid={"register-backButton"} className="button" onClick={() => onBack()}>Back</button>
      </div>
    );
  }
  
  export default Register;