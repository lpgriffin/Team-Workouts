
import './style.css';
import xSrc from "./../../Assets/x.svg";

const Modal = ({ onX, onLogout, modalType }) => {

    return (
      <div>
      { modalType === "bar" ? (
        <div data-testid={"modal"} className="modal">
          <img data-testid={"modal-x"} className="modal-x" src={xSrc} alt={""} onClick={() => onX()} />
          <button data-testid={"modal-logoutButton"} className="modal-button" onClick={() => onLogout()}>Logout</button>
        </div>
        ) : (
          <br/>
        )}
        </div>
    );
  }
  
  export default Modal;