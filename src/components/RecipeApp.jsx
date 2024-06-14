import { useState } from 'react';
import Button from './Button';
import Container from './Container';
import '../assets/components/recipeapp.css';

export default function RecipeApp() {
    const initialRecipes = [
        {
          recipeName: 'Pancakes',
          imagePreview: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          ingredients: [
            '1 cup all-purpose flour',
            '2 tablespoons sugar',
          ],
          instructions: '1. In a large bowl, whisk together the flour, sugar, baking powder, and salt. \n' +
                        '2. In another bowl, beat the egg and then whisk in the milk, melted butter, and vanilla extract. \n' +
                        '3. Pour the wet ingredients into the dry ingredients and stir until just combined. \n' +
                        '4. Heat a non-stick skillet over medium heat and lightly grease with butter or oil. \n' +
                        '5. Pour 1/4 cup of batter onto the skillet and cook until bubbles form on the surface, then flip and cook until golden brown. \n' +
                        '6. Repeat with the remaining batter. Serve warm with your favorite toppings.',
          time: 20,
          calories: 250 
}]; 
  const [recipes, setRecipes] = useState(initialRecipes);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    console.log('New Recipe Added:', newRecipe);  
    console.log('Current Recipes:', recipes);     
  };

  return (
    <div className="recipe-app">
      <Button addRecipe={addRecipe} />
      {recipes.length === 0 ? (
        <p>No recipes added yet</p>
      ) : (
        recipes.map((recipe, index) => (
          <Container key={index} recipe={recipe} />
        ))
      )}
    </div>
  );
}
