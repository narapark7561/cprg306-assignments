'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  const handleItemNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

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

  let incrementButtonStyles = 'bg-blue-500 text-white rounded-md py-0.5 px-4';
  let decrementButtonStyles = 'bg-gray-400 text-white rounded-md py-0.5 px-4';

  if (quantity === 20) {
    incrementButtonStyles = 'bg-gray-400 text-white rounded-md py-0.5 px-4';
    decrementButtonStyles = 'bg-blue-500 text-white rounded-md py-0.5 px-4';
  } else if (quantity === 1) {
    decrementButtonStyles = 'bg-gray-400 text-white rounded-md py-0.5 px-4';
  } else {
    incrementButtonStyles = 'bg-blue-500 text-white rounded-md py-0.5 px-4';
    decrementButtonStyles = 'bg-blue-500 text-white rounded-md py-0.5 px-4';
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
    >
      <div className="mb-4">
        <input
          onChange={handleItemNameChange}
          value={name}
          type="text"
          name="item_name"
          placeholder="Item name"
          className="w-full px-3 py-2 text-black rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className="flex items-center bg-white p-2 rounded-lg space-x-2">
          <p className="font-semibold text-xl">{quantity}</p>
          <button
            type="button"
            onClick={decrement}
            className={decrementButtonStyles}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className={incrementButtonStyles}
          >
            +
          </button>
        </div>
        <div className="flex-1">
          <select
            onChange={handleCategoryChange}
            value={category}
            className="w-full px-3 py-2 text-black rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          >
            <option disabled value="">
              Category
            </option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen_foods">Frozen Foods</option>
            <option value="canned_goods">Canned Goods</option>
            <option value="dry_goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          +
        </button>
      </div>
    </form>
  );
}
