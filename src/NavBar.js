import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/MovieReview">Review a Movie</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar; 