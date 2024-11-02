'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemData from './item.json';
import MealIdea from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemData);
  {
    const handleAddItem = (item) => {
      setItems([...items, item]);
    };

    return (
      <main className="p-10 bg-gray-900 ">
        <h1 className="text-3xl font-bold text-white text-left mb-8">
          Shopping List ☑️
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
        <MealIdea />
      </main>
    );
  }
}
