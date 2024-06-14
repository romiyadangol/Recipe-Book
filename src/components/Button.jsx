import { useState } from 'react';
import '../assets/components/button.css';
import AddRecipe from './AddRecipe';

export default function Button({addRecipe}) {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const handleAddRecipe = (newRecipe) => {
    addRecipe(newRecipe);
    setShowAddRecipe(false);
  };

  return (
    <div className="button">
      <button className='btn' onClick={() => setShowAddRecipe(true)}>+</button>
      {showAddRecipe && <AddRecipe show={showAddRecipe} onClose={() => setShowAddRecipe(false)} addRecipe={handleAddRecipe} />}
    </div>
  );
}
