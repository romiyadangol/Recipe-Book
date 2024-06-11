import timeIcon from '../assets/time.svg';
import calorieIcon from '../assets/calorie.svg';
import ingredientIcon from '../assets/ingridient.svg';
import '../assets/components/container.css';

export default function Container({ recipe }) {
    const imageUrl = recipe ?recipe.imagePreview : '';
    const recipeName = recipe ? recipe.recipeName : '';
    const time = recipe ? recipe.time : '';
    const calories = recipe ? recipe.calories : '';
    const ingredients = recipe ? recipe.ingredients : '';

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
                </div>
            </div>
        </div>
    );
}
