'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdea from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  console.log('Current User UID:', user?.uid);

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async () => {
    try {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  const handleAddItem = async (item) => {
    try {
      if (user) {
        const newItemId = await addItem(user.uid, item);
        setItems((prevItems) => [...prevItems, { ...item, id: newItemId }]);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleItemSelect = (itemName) => {
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
  };

  if (!user) {
    return (
      <main className="p-10 bg-black min-h-screen flex">
        <h1 className="text-xl font-bold text-white">
          You need to be signed in to view this page.
        </h1>
      </main>
    );
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
