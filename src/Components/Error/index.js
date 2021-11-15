
import './style.css';

const Error = ({ onBack }) => (
      <div data-testid={"error"} className="error">
        <span data-testid={"error-heading"} className="heading">Team Workouts<br/></span>
        <span data-testid={"error-subheading"} className="subheading">Error</span>
        <button data-testid={"error-backButton"} className="button" onClick={() => onBack()}>Back to Login</button>
      </div>
);
  
export default Error;