import { useState } from 'react';
import '../assets/components/addrecipe.css';
import Model from './Model';

export default function AddRecipe({ show, onClose, addRecipe }) {
  const [imagePreview, setImagePreview] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [time, setTime] = useState('');
  const [calories, setCalories] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleIngredientChange = (index, e) => {
    const values = [...ingredients];
    values[index] = e.target.value;
    setIngredients(values);
  };

  const handleAddIngredient = (event) => {
    event.preventDefault();
    setIngredients([...ingredients, '']);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {
      recipeName,
      ingredients,
      instructions,
      time,
      calories,
      imagePreview,
    };
    alert('Recipe added successfully');
    addRecipe(recipe);
    setRecipeName('');
    setIngredients([]);
    setInstructions('');
    setTime('');
    setCalories('');
    setImagePreview('');
    onClose(); 
  };

  return (
    <Model show={show} onClose={onClose}>
      <div className="add-form">
        <div className="add-form-content">
          <h4>Fill in the details for your recipe</h4>
          <form className='form' onSubmit={handleSubmit}>
            <div className="recipe-name">
              <label>Recipe Name</label>
              <input 
                type="text" 
                className='recipeName'
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
            </div>
            <div className="image">
              <label>Image</label>
              <div className="image-container">
                {imagePreview ? (
                  <img src={imagePreview} alt="Recipe" className="recipe-image" />
                ) : (
                  <div className="placeholder" onClick={() => document.getElementById('fileInput').click()}>
                    Click to upload image
                  </div>
                )}
                <input 
                  type="file" 
                  className="image" 
                  id="fileInput" 
                  onChange={handleImageChange} 
                />
              </div>
            </div>
            <div className="ingredients">
              <label>Ingredients</label><br />
              {ingredients.map((ingredient, index) => (
                <input 
                  key={index}
                  type='text' 
                  className='ingredient'
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e)}
                />
              ))}
              <button className="ingredients-btn" onClick={handleAddIngredient}>+ Add Ingredient</button>
            </div>
            <div className="instructions">
              <label>Instructions</label>
              <textarea 
                type='text' 
                className='instructions'
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>
            <div className="time-calorie">
              <div className="time">
                <label>Time (in minutes)</label>
                <input 
                  type='number' 
                  className='time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="calories">
                <label>Calories</label>
                <input 
                  type='number' 
                  className='calories'
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
              </div>
            </div>
            <div className="add-Recipe">
              <button type='submit'>Add Recipe</button>
            </div>
          </form>
        </div>
      </div>
    </Model>
  );
}
