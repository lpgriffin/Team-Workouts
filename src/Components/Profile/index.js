import "./style.css";
import { useState } from "react";
import { default as Workout } from "../Workout/index";

const Profile = ({ userID, onBack }) => {

  const[workoutID, setWorkoutID] = useState(undefined);

  //TODO: Get User data
  const getUser = () => {
    
  };

  return (
    <div>
    { workoutID === undefined ? (
    <div data-testid={"profile"} className="profile">
      <span data-testid={"profile-heading"} className="heading">
        Team Workouts
        <br />
      </span>
      <span data-testid={"profile-subheading"} className="subheading">userID: {userID}</span>
      <button data-testid={"profile-logoutButton"} className="button" onClick={() => onBack()}>Logout</button>
    </div>
    ) : (
      <Workout workoutID={workoutID} />
    )}
  </div>);
};

export default Profile;
