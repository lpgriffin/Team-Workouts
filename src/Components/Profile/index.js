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
    <div className="profile">
      <span className="heading">
        Team Workouts
        <br />
      </span>
      <span className="subheading">userID: {userID}</span>
      <button className="button" onClick={() => onBack()}>Back</button>
    </div>
    ) : (
      <Workout workoutID={workoutID} />
    )}
  </div>);
};

export default Profile;
