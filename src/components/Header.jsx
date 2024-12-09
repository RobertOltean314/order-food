export default function Header({ isNightMode, setIsNightMode }) {
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className="d-flex justify-content-between mb-3">
      <h1>Order Food Application</h1>
      <button className="btn btn-primary">Student/Teacher</button>
      <button className="btn btn-secondary" onClick={toggleNightMode}>
        {isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
      </button>
    </div>
  );
}
