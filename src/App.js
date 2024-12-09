import React, { useState } from "react";
import MenuSelector from "./components/MenuSelector";
import Cart from "./components/Cart";
import Order from "./components/Order";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFinishOrder = () => {
    window.location.reload();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onConfirmOrder={handleConfirmOrder}
          />
        </div>
      </div>
      <Order
        show={showModal}
        handleClose={handleCloseModal}
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleFinish={handleFinishOrder}
      />
    </div>
  );
}

export default App;
