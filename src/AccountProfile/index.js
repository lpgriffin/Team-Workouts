
import './style.css';
import { useState } from 'react';

const AccountProfile = () => {
    
    return (
      <div className="accountProfile">
        <span className="heading">Account Profile<br/></span>
        <button className="button" onClick={() => viewAccountSettings(email, password)}>Account Settings</button>
        <button className="button" onClick={() => createWorkoutGroup(email, password)}>Create Workout Group</button>
        <button type="button" onClick={() => viewWorkoutGroup()}>View Workout Groups</button>
        <div id="workoutDropdown" class="dropdown-content">
            <a href="#">Group 1</a>
            <a href="#">Group 2</a>
            <a href="#">Group 3</a>
        </div>
      </div>
    );
}
  
  export default AccountProfile;