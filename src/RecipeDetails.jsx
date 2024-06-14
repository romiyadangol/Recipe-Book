import { useLocation, useParams } from 'react-router-dom';
import './assets/components/recipeDetails.css';

export default function RecipeDetails() {
  const {recipeName} = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  
  const recipe = {
    recipeName: decodeURIComponent(recipeName),
    imagePreview: params.get('image'),
    ingredients: params.get('ingredients') ? params.get('ingredients').split(', ') : [],
    instructions: params.get('instructions'),
    time: params.get('time'),
    calories: params.get('calories'),
  };

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipe-details">
      <div className="image-details">
        <img className="img" src={recipe.imagePreview} alt={recipe.recipeName} />
      </div>
      <div className="details">
        <h1>{recipe.recipeName}</h1>
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>
        <p><strong>Time:</strong> {recipe.time} min</p>
        <p><strong>Calories:</strong> {recipe.calories} kcal</p>
      </div>
    </div>
  );
}
