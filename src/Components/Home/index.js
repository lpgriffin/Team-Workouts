import "./style.css";
import { useState } from "react";
import logoSrc from "./../../Assets/logo.svg";
import barsSrc from "./../../Assets/bars.svg";
import upSrc from "./../../Assets/up.svg";
import downSrc from "./../../Assets/down.svg";

const Home = ({ userID, onLogout }) => {
  const[showHeader, setShowHeader] = useState(false);
  const[showWelcome, setShowWelcome] = useState(true);
  const[workoutID, setWorkoutID] = useState(undefined);
  const[nextWorkout, setNextWorkout] = useState(true);

  //TODO: Get User data
  const username = "user1";
  const workoutLevel = "1";
  const workoutProgress = "50%";
  const userLevel = "2";
  const userProgress = "33%";
  const getUser = () => {
    
  };

  const barsClick = () => {
    if(showHeader) setShowHeader(false);
    else setShowHeader(true);
  };

  const upClick = () => {
    if(showHeader) setShowHeader(false);
    else setShowHeader(true);
  };

  const downClick = () => {
    if(showHeader) setShowHeader(false);
    else setShowHeader(true);
  };

  const onEditWorkout = () => {
    
  };

  const onViewWorkout = () => {
    
  };

  const onEditUsers = () => {
    
  };

  const onViewUsers = () => {
    
  };

  return (
    <div data-testid={"home"} className="home">
        <div data-testid={"home-header"} className="home-header">
          <img data-testid={"home-logo"} className="home-logo" src={logoSrc} alt={""} />
          <img data-testid={"home-bars"} className="home-bars" src={barsSrc} alt={""} onClick={() => barsClick()}/>
        </div>
        <div data-testid={"home-top"} className="home-top">
          { showWelcome ? (
            <span data-testid={"home-welcome-label"} className="home-welcome-label">Welcome {username}</span>
          ) : (
            <img data-testid={"home-up"} className="home-up" src={upSrc} alt={""} onClick={() => upClick()}/>
          )}
        </div>
        <div data-testid={"home-level"} className="home-level">
        <span data-testid={"home-level-label"} className="home-level-label">Level {userLevel} - {userProgress}</span>
        </div>
        <div data-testid={"home-workout"} className="home-workout">
          <span data-testid={"home-workout-label"} className="home-workout-label">{workoutID}</span>
          <div data-testid={"home-level"} className="home-level">
            <span data-testid={"home-level-label"} className="home-level-label">Level {workoutLevel} - {workoutProgress}</span>
          </div>
          <button data-testid={"home-editWorkoutButton"} className="home-button" onClick={() => onEditWorkout()}>Edit<br/>Workout</button>
          <button data-testid={"home-viewWorkoutButton"} className="home-button" onClick={() => onViewWorkout()}>View<br/>Workout</button>
          <button data-testid={"home-editUsersButton"} className="home-button" onClick={() => onEditUsers()}>Edit<br/>Users</button>
          <button data-testid={"home-viewUsersButton"} className="home-button" onClick={() => onViewUsers()}>View<br/>Users</button>
        </div>
        <div data-testid={"home-bottom"} className="home-top">
          { nextWorkout ? (
            <img data-testid={"home-down"} className="home-down" src={downSrc} alt={""} onClick={() => downClick()}/>
          ) : (
            <br />
          )}
        </div>
    </div>
  );
};

export default Home;
