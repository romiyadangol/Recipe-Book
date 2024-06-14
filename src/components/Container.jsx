import timeIcon from '../assets/time.svg';
import calorieIcon from '../assets/calorie.svg';
import ingredientIcon from '../assets/ingridient.svg';
import '../assets/components/container.css';
import { Link } from 'react-router-dom';

export default function Container({ recipe }) {
    if (!recipe) {
        return null;  // Safeguard if no recipe is passed
    }

    const imageUrl = recipe.imagePreview;
    const recipeName = recipe.recipeName;
    const time = recipe.time;
    const calories = recipe.calories;
    const ingredients = recipe.ingredients.join(', ');  // Ensure ingredients are displayed as a string

    return (
        <div className="container">
            <div className="image">
                <img className='bg' src={imageUrl} alt={recipeName} />
            </div>
            <div className="card-info">
                <h1>{recipeName}</h1>
                <div className="info">
                    <div className="time">
                        <img src={timeIcon} alt="time icon" />
                        <span>{time} min</span>
                    </div>
                    <div className="calories">
                        <img src={calorieIcon} alt="calorie icon" />
                        <span>{calories} kcal</span>
                    </div>
                    <div className="ingredients">
                        <img src={ingredientIcon} alt="ingredient icon" />
                        <span>{ingredients}</span>
                    </div>
                    <div className="read-more">
                    <Link className='read' to={`/recipe/${recipeName}?image=${encodeURIComponent(imageUrl)}&time=${time}&calories=${calories}&ingredients=${encodeURIComponent(ingredients)}&instructions=${encodeURIComponent(recipe.instructions)}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
