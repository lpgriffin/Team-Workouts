import { default as Login } from "./Components/Login/index";
import { default as Profile } from "./Components/Profile/index";
import { default as Register } from "./Components/Register/index";
import { default as Error } from "./Components/Error/index";
import "./App.css";
import { useState } from "react";
const axios =require ("axios");

function App() {
    const [userID, setUserID] = useState(undefined);
    const [portal, setPortal] = useState("login");

    //Functionality for logging in
    //TODO: Get userID

    const onLogin = (email,password) => {
        const user={email:email, password: password};
       const response= axios.post("http://localhost:6969/Login",user)
            .then(res=>{alert(res.data.message)
               })
        if (response.body.user)  {
        setUserID(user.name);
        setPortal("profile");}
        else{
            console.log(response.body.message());

        }

    };

    const onRegister = (email,password) => {
        const user={email:"b", password: "1"}
        console.log("this is a test");
        if (email && password){
            console.log(email&&password);
           axios.post("http://localhost:6969/Register",user )
                .then(function (response) {
                    console.log(response);
                    setPortal("profile");
                })
               .catch(function (error) {
                   console.log(error);
               });
        }

        else{
            alert("invalid input")
        };
             setPortal("profile");
    };

    const onBack = () => {
        setUserID(undefined);
        setPortal("login");
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
}

export default App;


