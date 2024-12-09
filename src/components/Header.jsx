import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header({ isNightMode, toggleNightMode }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h1>Order Food Application</h1>
      <div className="d-flex gap-2">
        <button className="btn btn-primary">Register</button>
        <button className="btn btn-secondary" onClick={toggleNightMode}>
          {isNightMode ? (
            <FontAwesomeIcon icon={faSun} className="mx-2" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="mx-2" />
          )}
        </button>
      </div>
    </div>
  );
}
