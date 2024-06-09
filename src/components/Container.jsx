import time from '../assets/time.svg';
import calorie from '../assets/calorie.svg';
import ingredient from '../assets/ingridient.svg';
import '../assets/components/container.css';

export default function Container() {
  return (
    <div className="container">
      <div className="image">
        <img className='bg' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Jellof Rice" />
      </div>
      <div className="card-info">
        <h1>Pancakes</h1>
        <div className="info">
          <div className="time">
            <img src={time} alt="time icon" />
            <span>50 mins</span>
          </div>
          <div className="calories">
            <img src={calorie} alt="calorie icon" />
            <span>285 Calories</span>
          </div>
          <div className="ingredients">
            <img src={ingredient} alt="ingredient icon" />
            <span>2 cups long-grain parboiled rice, 1/4 cup vegetable oil, 1 large onion, finely chopped, 2-3 cloves garlic, minced and 6 more</span>
          </div>
        </div>
        <div className="author">
          <span>by Romiya</span>
        </div>
      </div>
    </div>
  );
}
