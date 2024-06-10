import { Link } from 'react-router-dom';
import '../assets/components/button.css';
export default function Button() {
    return (
        <div className="button">
            <Link className='btn' to="/recipe">+</Link>
        </div>
    )
}