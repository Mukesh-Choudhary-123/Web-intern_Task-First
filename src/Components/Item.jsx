import React from "react";
import "../cart.css";
import { useCart } from "../context/CartContextApi";

const Item = (props) => {
  const cart = useCart();
  console.log(cart);
  return (
    <div className="item-card">
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>

      <button
        id="button2"
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
