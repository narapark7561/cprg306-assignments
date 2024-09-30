"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    let currentQuantity = quantity;
    if (quantity < 20) {
      setQuantity(currentQuantity + 1);
    }
  };

  const decrement = () => {
    let currentQuantity = quantity;
    if (quantity > 1) {
      setQuantity(currentQuantity - 1);
    }
  };

  return (
    <div>
      <p>{quantity}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
