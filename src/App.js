import React, { useState } from "react";
import MenuSelector from "./components/MenuSelector";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div
      className={`container mt-5 ${
        isNightMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex justify-content-between mb-3">
        <h1>Menu App</h1>
        <button className="btn btn-secondary" onClick={toggleNightMode}>
          {isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
        </button>
      </div>
      <div className="row">
        <div className="col-md-9">
          <MenuSelector addToCart={addToCart} />
        </div>
        <div className="col-md-3">
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
