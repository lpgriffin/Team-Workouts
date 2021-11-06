import './App.css';
import Homepage from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import {
  BrowserRouter as Router,
    Switch,
  Route

} from "react-router-dom";

import {useState} from 'react';
function App() {
  const [user,setLoginUser] = useState({

  })
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              {
                user && user._id ? <Homepage/>:<Login/>
              }<Homepage/></Route>
            <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
            <Route path="/Register"><Register/></Route>
          </Switch>

        </Router>

      </div>
  );
}

export default App;

