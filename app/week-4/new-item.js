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

  let incrementButtonStyles = "bg-blue-500 text-white rounded-md py-0.5 px-4";
  let decrementButtonStyles = "bg-gray-400 text-white rounded-md py-0.5 px-4";

  if (quantity === 20) {
    incrementButtonStyles = "bg-gray-400 text-white rounded-md py-0.5 px-4";
    decrementButtonStyles = "bg-blue-500 text-white rounded-md py-0.5 px-4";
  } else if (quantity === 1) {
    decrementButtonStyles = "bg-gray-400 text-white rounded-md py-0.5 px-4";
  } else {
    incrementButtonStyles = "bg-blue-500 text-white rounded-md py-0.5 px-4";
    decrementButtonStyles = "bg-blue-500 text-white rounded-md py-0.5 px-4";
  }

  return (
    <div className="bg-white p-4 rounded-lg flex justify-center space-x-2 max-w-60 mt-10">
      <p className="font-semibold mr-7">{quantity}</p>
      <button onClick={decrement} className={decrementButtonStyles}>
        -
      </button>
      <button onClick={increment} className={incrementButtonStyles}>
        +
      </button>
    </div>
  );
}
