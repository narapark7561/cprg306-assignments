'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from './item-list';
import NewItem from './new-item';
import itemData from './item.json';
import MealIdea from './meal-ideas';

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  if (!user) {
    return (
      <main className="p-10 bg-black min-h-screen flex ">
        <h1 className="text-xl font-bold text-white">
          You need to be signed in to view this page.
        </h1>
      </main>
    );
  }
  function handleItemSelect(itemName) {
    console.log('Selected item name:', itemName);

    if (!itemName) {
      console.warn('Item name is undefined');
      return;
    }

    const cleanedName = itemName
      .split(',')[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C\uDF00-\uDFFF]|[\uFE0F])/g,
        ''
      )
      .trim();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-10 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white text-left mb-8">
        Shopping List ☑️
      </h1>
      <div className="flex gap-11">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdea ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
