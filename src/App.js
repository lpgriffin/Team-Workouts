import { default as Login } from "./Components/Login/index";
import { default as Home } from "./Components/Home/index";
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
    setPortal("home");
  };

  const onRegister = () => {
    setPortal("register");
  };

  const onBack = () => {
    setUserID(undefined);
    setPortal("login");
  };

  return (
    <div data-testid={"app"} className="app">
      {portal==="register" ? (
        <Register onBack={onBack} onRegister={onLogin} />
      ) : portal==="login" ? (
        <Login onLogin={onLogin} onRegister={onRegister} />
      ) : portal==="home" ? (
        <Home userID={userID} onBack={onBack} />
      ) : (
        <Error onBack={onBack} />
      )}
    </div>
  );
}

export default App;
