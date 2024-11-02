'use client';

import { useState } from 'react';
import { useEffect } from 'react';

async function fetchMealIdeas({ ingredient }) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) console.log(response.status);
    const data = await response.json();
    return data.meals.map((meal) => ({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
    }));
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return [];
  }
}
export default function MealIdea({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    let mealRecipe = await fetchMealIdeas({ ingredient });
    return setMeals(mealRecipe);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <ul>
        <li>{strMeal}</li>
      </ul>
    </div>
  );
}
