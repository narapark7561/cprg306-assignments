'use client';

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      console.log(`Error: ${response.status}`);
      return [];
    }
    const data = await response.json();
    return data.meals
      ? data.meals.map((meal) => ({
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
        }))
      : [];
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [title, setTitle] = useState('Select an item to see meal ideas');

  async function loadMealIdeas() {
    if (ingredient) {
      const mealRecipe = await fetchMealIdeas(ingredient);
      if (mealRecipe.length > 0) {
        setTitle(`Here are some meal ideas using ${ingredient}:`);
        setMeals(mealRecipe);
      } else {
        setTitle(`No meal ideas found for ${ingredient}.`);
        setMeals([]);
      }
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      <p>{title}</p>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
