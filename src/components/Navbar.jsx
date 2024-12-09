export default function Navbar({ handleButtonClick }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-between w-100 mx-3">
            <button
              className="nav-link mx-2"
              onClick={() => handleButtonClick("Menus")}
            >
              Menus
            </button>
            <button
              className="nav-link mx-2"
              onClick={() => handleButtonClick("Sandwiches")}
            >
              Sandwiches
            </button>
            <button
              className="nav-link mx-2"
              onClick={() => handleButtonClick("Drinks")}
            >
              Drinks
            </button>
            <button
              className="nav-link mx-2"
              onClick={() => handleButtonClick("Sweets")}
            >
              Sweets
            </button>
            <button
              className="nav-link mx-2"
              onClick={() => handleButtonClick("Sausages")}
            >
              Sausages
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
