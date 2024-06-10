import { useState } from 'react';
import '../assets/components/addrecipe.css';

export default function AddRecipe() {
    const [imagePreview, setImagePreview] = useState('');
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="add-form">
            <div className="add-form-content">
                <h4>Fill in the details for your recipe</h4>
                <form className='form'>
                    <div className="recipe-name">
                        <label>Recipe Name</label>
                        <input type="text" className='recipeName'/>
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
                            <input type="file" className="image" id="fileInput" onChange={handleImageChange} />
                        </div>
                    </div>
                    <div className="ingredients">
                        <label>Ingredients</label>
                        <input type='text' className='ingredients'/>
                        <button>+ Add Ingredient</button>
                    </div>
                    <div className="instructions">
                        <label>Instructions</label>
                        <textarea type='text' className='instructions'/>
                    </div>
                    <div className="time-calorie">
                        <div className="time">
                            <label>Time (in minutes)</label>
                            <input type='number' className='time'/>
                        </div>
                        <div className="calories">
                            <label>Calories</label>
                            <input type='number' className='calories'/>
                        </div>
                    </div>
                    <div className="addRecipe">
                            <button>Add Recipe</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
