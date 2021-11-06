
import './style.css';

const Error = ({ onBack }) => (
      <div className="error">
        <span className="heading">Team Workouts<br/></span>
        <span className="subheading">Error</span>
        <button className="button" onClick={() => onBack()}>Back to Login</button>
      </div>
);
  
export default Error;