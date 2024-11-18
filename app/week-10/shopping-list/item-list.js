'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <p className="text-white mb-5 font-bold">
        Sort by:
        <button
          onClick={() => setSortBy('name')}
          className={`px-7 py-1 mr-5 ml-5 ${
            sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-7 py-1 mr-5  ${
            sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'
          }`}
        >
          Category
        </button>
      </p>
      <div>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </div>
    </div>
  );
}
