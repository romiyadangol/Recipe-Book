import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/components/header.css';
export default function Header() {
    return (
        <div className="header">
            <img src={logo} />
            <FontAwesomeIcon className="icon" icon={faUser}/>
            <div className="content">
                <h1>Discover Flavors, Create Memories</h1>
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" placeholder="Search for recipes, ingredients, and more"/>
                </div>
            </div>
    
        </div>
    )
}