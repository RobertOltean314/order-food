import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export default function OrderModal({
  show,
  handleClose,
  cartItems,
  totalPrice,
}) {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleConfirmOrder = () => {
    setShowPaymentOptions(true);
  };

  const handlePayment = () => {
    window.location.reload();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {showPaymentOptions ? "Choose Payment Method" : "Confirm Order"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showPaymentOptions ? (
          <div>
            <Button
              variant="primary"
              className="w-100 mb-2"
              onClick={() => handlePayment("Cash")}
            >
              <FontAwesomeIcon icon={faMoneyBillWave} className="mx-2" />
              Cash
            </Button>
            <Button
              variant="primary"
              className="w-100"
              onClick={() => handlePayment("Card")}
            >
              <FontAwesomeIcon icon={faCreditCard} className="mx-2" />
              Card
            </Button>
          </div>
        ) : (
          <div>
            <h5>Items in Cart:</h5>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item.title} - {item.quantity} x ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        {showPaymentOptions ? null : (
          <>
            <Button variant="secondary" onClick={handleClose}>
              Edit Order
            </Button>
            <Button variant="primary" onClick={handleConfirmOrder}>
              Finish
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
