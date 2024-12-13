import React from "react";
import { useCart } from "../context/CartContextApi";
import "../cart.css";
const Cart = () => {
  const cart = useCart();

  const total = cart.items.reduce((a, b) => a + b.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {/* {cart &&
        cart.items.map((item) => (
          <p>
            {item.name} - ₹{item.price}
          </p>
        ))} */}
      <h3>Total Bill ₹ {total}\-</h3>
    </div>
  );
};

export default Cart;
