import React, { useState } from "react";
import menuData from "../menuData";
import Item from "./Item";

export default function MenuSelector({ addToCart }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="border rounded p-3">
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
      {selectedSection && (
        <div className="mt-3">
          <h2>{selectedSection}</h2>
          <p>Select items to add to your cart:</p>
          <div className="row">
            {menuData[selectedSection].map((item, index) => (
              <Item key={index} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
