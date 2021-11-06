import { default as AccountProfile } from "./AccountProfile/index";
import logo from './logo.svg';
import './App.css';

function App() {

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
