import React, { useEffect, useState } from "react";

export default function Cart({ cartItems, setCartItems, onConfirmOrder }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const incrementQuantity = (title) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (title) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="border rounded p-3">
      <h2>Cart</h2>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul className="list-group mb-3">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-thumbnail me-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1">${item.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => decrementQuantity(item.title)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-secondary btn-sm ms-2"
                      onClick={() => incrementQuantity(item.title)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="btn btn-success w-100" onClick={onConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
}
