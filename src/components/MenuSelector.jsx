import React, { useState } from "react";
import menuData from "../menuData";
import Item from "./Item";
import Navbar from "./Navbar";

export default function MenuSelector({ addToCart }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="border rounded p-3">
      <Navbar handleButtonClick={handleButtonClick} />
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
