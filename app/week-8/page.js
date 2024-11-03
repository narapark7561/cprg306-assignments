'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemData from './item.json';
import MealIdea from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  // const handleItemSelect = (item) => {
  //   let name = item.name.split(',')[0];

  //   name = name
  //     .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '')
  //     .trim();
  //   setSelectedItemName(name);
  // };
  function handleItemSelect(itemName) {
    console.log('Selected item name:', itemName); // itemName 확인

    if (!itemName) {
      console.warn('Item name is undefined'); // 디버깅용 경고 메시지
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
