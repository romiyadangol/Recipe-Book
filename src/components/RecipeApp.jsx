import { useState } from 'react';
import AddRecipe from './AddRecipe';
import Container from './Container';

export default function RecipeApp() {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    return (
        <div className="recipe-app">
            <AddRecipe addRecipe={addRecipe} />
            {recipes.map((recipe, index) => (
                <Container key={index} recipe={recipe} />
            ))}
        </div>
    );
}
