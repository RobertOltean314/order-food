import React, { useState } from "react";
import MenuSelector from "./components/MenuSelector";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isNightMode, setIsNightMode] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const containerClass = isNightMode
    ? "bg-dark text-white"
    : "bg-light text-dark";

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

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={`container-full ${containerClass}`}>
      <div className="container mt-5">
        <Header
          isNightMode={isNightMode}
          toggleNightMode={() => setIsNightMode(!isNightMode)}
        />
        <div className="row">
          <div className="col-md-9">
            <MenuSelector addToCart={addToCart} />
          </div>
          <div className="col-md-3">
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              onConfirmOrder={toggleModal}
            />
          </div>
        </div>
        <Order
          show={showModal}
          handleClose={toggleModal}
          cartItems={cartItems}
          totalPrice={calculateTotalPrice()}
        />
      </div>
    </div>
  );
}

export default App;
