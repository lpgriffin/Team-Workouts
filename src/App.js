import { default as Login } from "./Components/Login/index";
import { default as AccountProfile } from "./AccountProfile/index";
import { default as Profile } from "./Components/Profile/index";
import { default as Register } from "./Components/Register/index";
import { default as Error } from "./Components/Error/index";
import "./App.css";
import { useState } from "react";

function App() {
  const [userID, setUserID] = useState(undefined);
  const [portal, setPortal] = useState("login");

  //Functionality for logging in
  //TODO: Get userID
  const onLogin = () => {
    setUserID("undefined")
    setPortal("profile");
  };

  const onRegister = () => {
    setPortal("register");
  };

  const onBack = () => {
    setUserID(undefined);
    setPortal("login");

  // TODO: View account settings such as logout, change username, etc
  const viewAccountSettings = () => {
  };
  // TODO: View workout group selected in dropdown menu
  const viewWorkoutGroup = () => { 
  };
  //TODO: Create a workout group page
  const createWorkoutGroup = () => {
  };

  return (
    <div className="App">
      {portal==="register" ? (
        <Register onBack={onBack} onRegister={onLogin} />
      ) : portal==="login" ? (
        <Login onLogin={onLogin} onRegister={onRegister} />
      ) : portal==="profile" ? (
        <Profile userID={userID} onBack={onBack} />
      ) : (
        <Error onBack={onBack} />
      )}
    </div>
  );


export default App;
